import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ACTIVE_TRACKER_IMAGES, CRP_IMAGES, IMAGES, PIM_IMAGES, RCH_VIDEO, SUP_IMAGES, VASSIST_IMAGES } from "@/constants";

export const DATA = {
  name: "Zeeshan",
  initials: "MZ",
  url: "https://zeesek.vercel.app/",
  location: "Islamabad, Pakistan",
  locationLink: "https://www.google.com/maps/place/islamabad",
  description:
    "Backend-leaning Software Engineer / Platform Engineer",
  summary:
    `I started my tech journey at 17 as a bug bounty hunter, deeply immersed in the world of cybersecurity. It was exciting and intense, filled with late-night hunts and constant learning. But over time, I realized I was only scratching the surface—repeating familiar patterns without truly understanding how systems were built.

That curiosity pushed me toward development. I wanted to go deeper—learn how the internet works, how real-world systems are architected, and how developers bring ideas to life. The more I explored, the more I fell in love with building things from the ground up.

I transitioned into Full Stack Development to connect the dots between security, code, and architecture. Now, I don't just identify vulnerabilities—I understand the systems behind them and can contribute to building secure, scalable solutions.

Over time, I’ve come to see development as a blend of logic and creativity, where every line of code shapes a bigger picture. I still participate in bug bounties occasionally, purely for fun, but my main focus is on building meaningful technology that solves real problems.

Outside of tech, I love listening to music—and sometimes even making my own. It’s my creative escape and a way to stay inspired.

Always learning. Always building.`,
  professional_summary: `
Backend-leaning Software Engineer / Platform Engineer with 4+ years of experience building cloud-native, SaaS systems
used by enterprise and high-scale consumer platforms. Strong ownership across system design, backend architecture,
cost optimization, and secure application development. Experienced in AWS and GCP, serverless and microservices
architectures, and data-intensive systems. Known for translating business problems into scalable technical solutions and
collaborating effectively with non-technical stakeholders.
 `,
  strengths: `
- Cloud-native backend & platform engineering (AWS, GCP)
- Distributed & serverless system design
- Cost optimization & performance tuning
- Secure system design (application & cloud security)
- API design (REST, GraphQL)
- CI/CD & infrastructure as code
`,
  avatarUrl: "/me.png",
  cartoonAvatarUrl: "/cartoon_avatar.png",
  skills: [
    // Languages
    "TypeScript", "JavaScript (Node.js)", "Go", "Python", "SQL",

    // Backend & APIs
    "Node.js", "NestJS", "Express", "GraphQL", "REST",

    // Frontend (supporting)
    "React", "Next.js", "Vue.js", "Tailwind CSS",

    // Databases
    "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Firestore",

    // Object–relational mapping (ORM)
    "TypeORM", "Prisma",

    // Cloud & DevOps
    "AWS (Lambda, RDS, S3, API Gateway, EKS, Cognito and more)",
    "GCP (Cloud Run, Cloud SQL, BigQuery and more)",
    "Docker", "GitHub Actions", "GitLab CI/CD",

    // IaC
    "Terraform", "AWS CDK",

    // Testing & Monitoring
    "Jest", "Cypress", "CloudWatch", "GCP Monitoring", "Sentry",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://zeesek.medium.com/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "iamzeeshan1233@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itszeeshan",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/zeesec",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/itszeeshan2",
        icon: Icons.x,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@zeesek",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:iamzeeshan1233@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Rebolet",
      href: "https://www.rebolet.com/",
      badges: ["Typescript", "NodeJs", "NestJs", "ExpressJs", "Directus", "Vue", "GCP (CloudSQL, Cloud Storage, Cloud Run, Big Query, Cloud Logging And Monitoring etc.)", "Sentry ", "Cypress", "Jest", "Docker", "Gitlab CI/CD", "Postgres", "Firebase", "Redis", "Sass", "Vite + React", "Zod", "Redux", "AWS (Amplify, CloudWatch, DynamoDB, API Gateway, S3 etc.)", "Serverless", "Terraform"],
      industries: ["B2C, B2B and B2B2C SaaS and versions of our app", "E-Commerce", "Retail", "Re-Commerce", "Logistics"],
      location: `Berlin, Germany - Remote`,
      title: "Senior Software Engineer",
      logoUrl: IMAGES.REBOLET_LOGO,
      start: "July 2024",
      end: "March 2025",
      description:
        `
- **Architected and delivered a serverless customer return portal** using **AWS Lambda and AppSync GraphQL**, serving 100,000+
users and reducing manual inspection effort by **50%**.
- **Designed a multi-platform integration layer** leveraging Strategy and Mapper patterns to abstract Shopify, ChannelEngine, and
Macke APIs, with sequential query fallback ensuring high reliability and error isolation
- **Implemented hierarchical BigQuery category traversal** with statistical fallback, adopting GraphQL over REST for flexible querying
and reduced over-fetching, and secured access via API keys stored in AWS Secrets Manager for fine-grained control
- Architected and implemented a **serverless invoicing module** within the Supplier Portal using **Google Cloud Functions, Express.js,
and BigQuery**, enabling automated batch invoice generation with retry logic, rate limiting, and timezone-aware processing, and
seamlessly integrating with **Zoho Books API** to convert sales and logistics data into accurate invoices for multiple suppliers.
- Collaborated directly with leadership and non-technical stakeholders to align engineering decisions with business objectives.
`
    },
    {
      company: "Rebolet",
      href: "https://www.rebolet.com/",
      badges: ["Typescript", "NodeJs", "NestJs", "ExpressJs", "Directus", "Vue", "GCP (CloudSQL, Cloud Storage, Cloud Run, Big Query, Cloud Logging And Monitoring etc.)", "Sentry ", "Cypress", "Jest", "Docker", "Gitlab CI/CD", "Postgres", "Firebase", "Redis", "Sass", "Serverless", "Auth0"],
      industries: ["B2C, B2B and B2B2C SaaS and versions of our app", "E-Commerce", "Retail", "Re-Commerce", "Logistics"],
      location: `Berlin, Germany - Remote`,
      title: "Software Engineer",
      logoUrl: IMAGES.REBOLET_LOGO,
      start: "July 2022",
      end: "July 2024",
      description:
        `
- Led the design and development of an **enterprise Product Information Management (PIM) system**, centralizing product data
across multiple e-commerce platforms. 
- Deployed and operated a **self-hosted Directus platform** on Google Cloud Run using Docker, Cloud SQL, and Cloud Storage,
significantly reducing operational overhead.
- Integrated **BigQuery** for real-time supplier and product analytics, enabling data-driven decision-making for internal teams.
- Improved application performance and reliability through **CDN caching, backend optimizations, and CI/CD pipeline
improvements**, reducing deployment friction by **30%**. Optimized backend APIs and frontend delivery (tree-shaking, bundle
optimization), reducing load times by **35%**.
- Implemented access-control and permission systems to meet internal security and compliance requirements.
`    },
    {
      company: "HackerOne",
      href: "https://www.hackerone.com/",
      badges: [],
      industries: [],
      location: "San Francisco, California - Remote",
      title: "Security Researcher (Bug Bounties & Vulnerability Research)",
      logoUrl: IMAGES.HACKERONE_LOGO,
      start: "August 2017",
      end: "January 2021",
      description:
        `- Recognized by industry leaders like Meta, Airbnb, Toyota, Snapchat, HackerOne, Shopify, and Spotify for identifying security
vulnerabilities impacting 100M+ daily users. Notably, Authored a top-ranked HackerOne report, on Nov 10, 2017, which
led the HackerOne Hacktivity dashboard for two months, serving as a key resource for security researchers.
- Earned [several badges](https://hackerone.com/zeesek/badges), including Greybeard for submitting valid reports for more than one month in a row, Good Samaritan for
resolving issues with teams that do not pay, Belle of the Ball for a top-ranked Hacktivity report which maintained a high-impact
presence in the security community, contributing to industry best practices and Hacking Hackers. ![https://hackerone.com/zeesek/badges](${IMAGES.HACKERONE_BAGES})`,
    },
  ],
  education: [
    {
      school: "Bahria University E-8 Campus",
      href: "https://www.bahria.edu.pk/",
      degree: "Bachelors In Information Technology",
      location: "Islamabad, Pakistan",
      logoUrl: IMAGES.BAHRIA_LOGO,
      start: "February 2020",
      end: "February 2024",
    },
  ],
  projects: [
    {
      title: "Product Information Manager",
      href: "https://pim-dev-fsrlw6dawa-ey.a.run.app/",
      dates: "June 2023 - Feb 2025",
      active: true,
      description: "The **Product Information Manager (PIM)** is a headless CMS-based system built on Directus that enables us at Rebolet to effectively track, manage, and enrich product data across multiple e-commerce channels and marketplaces. The system automates product enrichment, pricing, inventory management, and multi-channel synchronization.",
      technologies: [
        'Directus', 'TypeScript', 'Vue', ' Node.js', 'PostgreSQL', 'Docker', 'Google Cloud Platform', 'Cloud Run', 'Cloud SQL', 'Jest'
      ],
      links: [
        {
          type: "Website",
          href: "https://pim-dev-fsrlw6dawa-ey.a.run.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      highlight: PIM_IMAGES.IMAGE_3,
      images: [
        { src: PIM_IMAGES.IMAGE_1, alt: "1. login page" },
        { src: PIM_IMAGES.IMAGE_2, alt: "2. infos for collections on side bar with tabular layout view(multiple layouts are supported on this page) along with detailed view once clicked on relevant product(AI is enabled to allow user to automate product description etc.)" },
        { src: PIM_IMAGES.IMAGE_3, alt: "3. dark view enabled" },
        { src: PIM_IMAGES.IMAGE_4, alt: "4. product settings page, to import products via barcodes from amazon sp-api, so no need to add manually each time on the system" },
        { src: PIM_IMAGES.IMAGE_5, alt: "5. html description setter for shopify, user can use the compiler on the system to test html, css page" },
        { src: PIM_IMAGES.IMAGE_6, alt: "6. user directory, robust access management framework to add authorized users only and give relevant access to the system" },
        { src: PIM_IMAGES.IMAGE_7, alt: "7. files manager to view files related to products" },
        { src: PIM_IMAGES.IMAGE_8, alt: "8. insights section, create dashboard or graphs for insights" },
        { src: PIM_IMAGES.IMAGE_9, alt: "9. can create multiple insights" },
        { src: PIM_IMAGES.IMAGE_10, alt: "10. real-time notification system. and system/user settings sections and much more!" },
      ],
      video:
        "",
    },
    {
      title: "Supplier Portal Dashboard",
      href: "https://portal.rebolet.com/",
      dates: "June 2022 - September 2023",
      active: true,
      description:
        `The **Supplier Portal Server Side** is a **microservices-based serverless architecture** built on Google Cloud Platform, designed to provide a comprehensive backend system for supplier management, analytics, invoicing, and inventory operations. The side on the system I worked on serves as the backend API for a supplier-facing portal, enabling suppliers to:
- View sales analytics and performance metrics
- Track inventory and product data
- Access financial information and invoices
- Manage account settings
- Query contract metadata and fee history
- Upload bulk inventory files`,
      technologies: [
        "Vuejs",
        "Typescript",
        "Javascript",
        "Nodejs",
        "Nestjs",
        "Firebase",
        "Google App Engine",
        "Auth0",
        "SQL",
        "I18n",
        "Nx Monorepo",
        "Serverless",
      ],
      links: [
        {
          type: "Website",
          href: "https://portal.rebolet.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      highlight: SUP_IMAGES.IMAGE_2,
      images: [
        { src: SUP_IMAGES.IMAGE_1, alt: "1. login" },
        { src: SUP_IMAGES.IMAGE_2, alt: "2. dashboard page" },
        { src: SUP_IMAGES.IMAGE_3, alt: "3. bulk product listing using export button via csv file, can view and delete wrong listed products" },
        { src: SUP_IMAGES.IMAGE_4, alt: "4. current items in buyers(company) inventory, along with sales and inbound info, can use date filters to narrow down your product search" },
        { src: SUP_IMAGES.IMAGE_5, alt: "5. inbound items info" },
        { src: SUP_IMAGES.IMAGE_6, alt: "6. invoices/financial infos" },
        { src: SUP_IMAGES.IMAGE_7, alt: "7. settings" },
      ],
      video:
        "",
    },
    {
      title: "Customer Return Portal",
      href: "https://return.rebolet.dev/",
      dates: "August 2023 - October 2023",
      active: true,
      description:
        "The **Customer Return Portal (CRP)** is a serverless 1 page facing web application that enables customers to initiate and manage product returns across multiple e-commerce platforms. The system serves **100,000+ users** and has reduced manual inspection effort by an estimated **50%** through automated condition grading and return label generation.",
      technologies: [
        "AWS Amplify Gen 2",
        "AWS Lambda",
        "AWS AppSync",
        "AWS Cognito",
        "AWS Secrets Manager",
        "DynamoDB",
        "AWS CDK",
        "React",
        "TypeScript",
        "AWS Amplify UI React",
      ],
      links: [
        {
          type: "Website",
          href: "https://return.rebolet.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      highlight: CRP_IMAGES.IMAGE_1,
      images: [{ src: CRP_IMAGES.IMAGE_1, alt: "1. Multi Step Form" }],
      video: "",
    },
    {
      title: "VAssist",
      href: "https://vassist-dev.vercel.app/",
      dates: "April 2021 - December 2021",
      active: true,
      description:
        "Developed a **Virtual Assistance Platform** for users where they can connect on a single platform to have an interaction and exchange information live, they can get help or get paid for providing help.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Redux",
        "Stripe",
        "WebRTC",
        "Socket",
        "Nestjs",
        "Nodejs",
        "Mongodb",
        "Prisma",
        "Mau",
        "Vercel",
        "Turbo Monorepo",
      ],
      links: [
        {
          type: "Website",
          href: "https://vassist-dev.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      highlight: VASSIST_IMAGES.IMAGE_4,
      images: [
        { src: VASSIST_IMAGES.IMAGE_1, alt: "1. home" },
        { src: VASSIST_IMAGES.IMAGE_2, alt: "2. login with sso options & forgot password" },
        { src: VASSIST_IMAGES.IMAGE_3, alt: "3. signup (email verification required) with sso options" },
        { src: VASSIST_IMAGES.IMAGE_4, alt: "4. home page if users already logged in (session maintained)" },
        { src: VASSIST_IMAGES.IMAGE_5, alt: "5. online assistants that can help you along with what they charge(hourly rate) and other info" },
        { src: VASSIST_IMAGES.IMAGE_6, alt: "6. feed" },
        { src: VASSIST_IMAGES.IMAGE_7, alt: "7. user profile" },
        { src: VASSIST_IMAGES.IMAGE_8, alt: "8. private rooms for group sessions or 1-1" },
        { src: VASSIST_IMAGES.IMAGE_9, alt: "9. private room call view, user that has created private room is the only one that can talk by default, all the others are muted, user can open other mics only or the people he has given access to" },
        { src: VASSIST_IMAGES.IMAGE_10, alt: "10. real-time chat" },
        { src: VASSIST_IMAGES.IMAGE_11, alt: "11. real-time call & notification systems for 1-1" },
        { src: VASSIST_IMAGES.IMAGE_12, alt: "12. 1-1 call, based on call duration the assistant will get paid" },
        { src: VASSIST_IMAGES.IMAGE_13, alt: "13. user profile settings" },
        { src: VASSIST_IMAGES.IMAGE_14, alt: "14. payments" },
        { src: VASSIST_IMAGES.IMAGE_15, alt: "15. checkout payments with stripe" },
      ],
      video: "",
    },
    {
      title: "Active Tracker",
      href: "https://activetracker-dev.up.railway.app/",
      dates: "August 2020 - September 2020",
      active: true,
      description:
        "Developed a Workout Tracker App to keep track of all your activity inside gym.",
      technologies: [
        "Javascript",
        "Vue 3",
        "Supabase",
        "Supabase Auth"
      ],
      links: [
        {
          type: "Website",
          href: "https://activetracker-dev.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      highlight: ACTIVE_TRACKER_IMAGES.IMAGE_5,
      images: [
        { src: ACTIVE_TRACKER_IMAGES.IMAGE_1, alt: "1. home" },
        { src: ACTIVE_TRACKER_IMAGES.IMAGE_2, alt: "2. login" },
        { src: ACTIVE_TRACKER_IMAGES.IMAGE_3, alt: "3. signup" },
        { src: ACTIVE_TRACKER_IMAGES.IMAGE_4, alt: "4. create your workout routine" },
        { src: ACTIVE_TRACKER_IMAGES.IMAGE_5, alt: "5. create whole workout sessions" },
        { src: ACTIVE_TRACKER_IMAGES.IMAGE_6, alt: "6. current workout plans" },
        { src: ACTIVE_TRACKER_IMAGES.IMAGE_7, alt: "7. current workout plan detail view" },
      ],
      video: "",
    },
    {
      title: "React Custom Hooks VSCode Extension",
      href: "https://magicui.design",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "Developed a **VS Code extension** to streamline real-time development by providing **ready-to-use React custom hooks**. Simplified workflow, reduced boilerplate, and improved code consistency for JavaScript and TypeScript projects by dynamically adapting hooks to project needs.",
      technologies: [
        "VSCE",
        "Typescript",
        "Javascript",
        "Nodejs",
        "open-source",
      ],
      links: [
        {
          type: "Website",
          href: "https://marketplace.visualstudio.com/items/?itemName=zeesec.react-custom-hooks",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/itszeeshan/react-custom-hooks/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Docs",
          href: "https://github.com/itszeeshan/react-custom-hooks/tree/main/docs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      highlight: "",
      images: [],
      video: RCH_VIDEO.VIDEO_1,
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
