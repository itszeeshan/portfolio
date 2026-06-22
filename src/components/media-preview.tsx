'use client'

import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

interface MediaPreviewProps {
  video?: readonly string[]
  images?: readonly { src: string; alt: string }[]
  highlight?: string
}

function MediaPreview({ video, images, highlight }: MediaPreviewProps) {
  // Normalise video to array
  const videoArray = React.useMemo(() => {
    if (!video) return []
    return Array.isArray(video) ? video : [video]
  }, [video])

  // Build combined list of all media, sorted by numeric suffix from src
  const allMedia = React.useMemo(() => {
    const items: { type: 'video' | 'image'; src: string; alt?: string; order: number }[] = []

    // Add videos – extract number from src
    videoArray.forEach((src) => {
      const order = extractNumber(src) ?? 9999 // fallback high number
      items.push({ type: 'video', src, order })
    })

    // Add images – extract number from src (not alt)
    if (images) {
      images.forEach((img) => {
        const order = extractNumber(img.src) ?? 9999
        items.push({ type: 'image', src: img.src, alt: img.alt, order })
      })
    }

    // Sort by order ascending
    items.sort((a, b) => a.order - b.order)
    return items
  }, [videoArray, images])

  // Helper: extract first integer from a string
  function extractNumber(str: string): number | null {
    const match = str.match(/\d+/)
    return match ? parseInt(match[0], 10) : null
  }

  // Determine the highlight item (by src)
  const highlightItem = React.useMemo(() => {
    if (highlight) {
      const found = allMedia.find(item => item.src === highlight)
      if (found) return found
    }
    return allMedia.length > 0 ? allMedia[0] : null
  }, [allMedia, highlight])

  // List of all image items (for thumbnails)
  const imageItems = allMedia.filter(item => item.type === 'image')
  const highlightIsImage = highlightItem?.type === 'image'

  // Which images to show as thumbnails?
  const thumbnailImages = React.useMemo(() => {
    if (!highlightIsImage) {
      // Highlight is video → show first 2 images from sorted list
      return imageItems.slice(0, 2)
    }
    // Highlight is image → show next 2 images after it (if any)
    const index = imageItems.findIndex(item => item.src === highlightItem.src)
    return imageItems.slice(index + 1, index + 3)
  }, [imageItems, highlightIsImage, highlightItem])

  const extraCount = imageItems.length - (highlightIsImage ? 3 : 2)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer">
          {highlightItem ? (
            highlightItem.type === 'video' ? (
              <video
                src={highlightItem.src}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              />
            ) : (
              <div className="relative">
                <Image
                  src={highlightItem.src}
                  alt={highlightItem.alt || ''}
                  width={500}
                  height={300}
                  className="h-40 w-full object-cover object-top"
                />
                <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                  {thumbnailImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden border-2 border-white shadow-md"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {extraCount > 0 && (
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden border-2 border-white bg-black/60 flex items-center justify-center text-white text-[10px] md:text-xs font-medium shadow-md">
                      +{extraCount}
                    </div>
                  )}
                </div>
              </div>
            )
          ) : (
            <div>No media available</div>
          )}
        </div>
      </DialogTrigger>

      <DialogContent className="flex justify-center items-center p-4 sm:max-w-[90vw]">
        {(() => {
          if (allMedia.length === 0) return <div>No media available</div>

          // Single video → no carousel
          if (allMedia.length === 1 && allMedia[0].type === 'video') {
            return (
              <video
                src={allMedia[0].src}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg max-h-[80vh] object-contain"
              />
            )
          }

          // Multiple items → carousel in sorted order
          return (
            <Carousel className="w-full max-w-[800px]">
              <CarouselContent>
                {allMedia.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 flex flex-col gap-3">
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="rounded-lg max-h-[80vh] object-contain"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt || `Image ${index + 1}`}
                          className="object-contain rounded-lg m-auto w-full max-h-[80vh]"
                        />
                      )}
                      {/* {item.type === 'image' && <p className="mx-auto">{item.alt}</p>} */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                &#9664;
              </CarouselPrevious>
              <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                &#9654;
              </CarouselNext>
            </Carousel>
          )
        })()}
      </DialogContent>
    </Dialog>
  )
}

export default MediaPreview