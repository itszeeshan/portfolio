'use client'

import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarPreviewDialogProps {
  src: string
  alt?: string
  fallback?: React.ReactNode
  fullWidth?: number | string
  fullHeight?: number | string
  className?: string,
}

export const AvatarPreviewDialog: React.FC<AvatarPreviewDialogProps> = ({
  src,
  alt = "Profile picture",
  fallback,
  fullWidth = "400px",
  fullHeight = "auto",
  className,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar className={cn("cursor-pointer", className)}>
          <AvatarImage src={src} alt={alt} />
          {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
        </Avatar>
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center p-4 sm:max-w-[90vw]">
        <img
          src={src}
          alt={alt}
          style={{ width: fullWidth, height: fullHeight }}
          className="rounded-lg max-h-[80vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  )
}
