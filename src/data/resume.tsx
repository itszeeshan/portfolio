import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { IMAGES } from "@/constants";

export const DATA = {
  name: "Zeeshan",
  initials: "MZ",
  url: "https://zeesek.io",
  location: "Islamabad, Pakistan",
  locationLink: "https://www.google.com/maps/place/islamabad",
  description:
    "Software Engineer | Cybersecurity Consultant | Former Bug Bounty Hunter & Penetration Tester",
  summary:
    `Results-driven professional with 3+ years of professional software engineering experience in developing architecture, programming, cloud-native and cloud
ready applications, plus 4+ years professional experience in cybersecurity. I specialize in building innovative, secure, efficient, and cost-effective solutions
that drive business growth. With strong management, communication, and collaboration skills, I bridge the gap between
technical teams and business stakeholders to ensure alignment and success.`,
 professional_summary: `
- 5+ years of experience in software development.
- 4+ years of experience in cybersecurity.
- Strong experience in developing both monolithic and microservices based applications.
- Distributed cloud computing (GCP, AWS).
- Database design & development (SQL & NoSQL)
- Experience in using project management tools such as Jira.
 `,
  avatarUrl: "/me.jpeg",
  skills: [
    "Typescript",
    "Javascript",
    "Nodejs",
    "Python",
    "Go",
    "SQL",
    "React.js",
    "Next.js",
    "Vue.js",
    "Express.js",
    "Nest.js",
    "Vite",
    "Redux",
    "GraphQL(Apollo)",
    "Auth0",
    "tRPC(TypeScript Remote Procedure Call)",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "DynamoDB",
    "Supabase",
    "Firebase",
    "Firestore",
    "Sequelize",
    "Prisma",
    "Docker",
    "Github Actions Workflows",
    "Gitlab CI/CD",
    "AWS CDK (Cloud Development Kit)",
    "Terraform",
    "AWS (Amplify, EC2, RDS, Cognito, EKS, S3, Lambda, API Gateway, VPC, CloudWatch etc.)",
    "GCP (App Engine, CloudSQL, Cloud Storage, Cloud Run, Big Query, Cloud Logging And Monitoring etc.)",
    "Git",
    "Jest",
    "Cypress",
    "Apache Kafka",
    "Directus",
    "Sanity",
    "Sentry",
    "Stripe",
    "CSS",
    "Sass",
    "TailwindCSS",
    "Amplify UI",
    "Shadcn UI",
    "Magic UI",
    "I18n",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "iamzeeshan1233@gmail.com",
    // tel: "+",
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
      Youtube: {
        name: "Medium",
        url: "https://medium.com/@zeesek",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
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
      start: "Jan 2024",
      end: "Feb 2025",
      description:
        `
- Led the design and development for a **Return Management System (Customer Return Portal)** for **200,000+ customers**, allowing them to test and grade products
upon return, eliminating the need for manual inspection of each returned item, which **improved return processing efficiency by 50%**
and significantly **reduced labor costs**.
- Managed a remote tech team, driving code quality, security, and best practices through mentorship, in-depth code reviews,
and technical guidance, resulting in faster deployments, fewer production issues, and stronger team collaboration.
- Partnered with leadership and non-technical stakeholders to align technical solutions with business goals, driving key strategic
decisions and company growth.`,
    },
    {
      company: "Rebolet",
      href: "https://www.rebolet.com/",
      badges: ["Typescript", "NodeJs", "NestJs", "ExpressJs", "Directus", "Vue", "GCP (CloudSQL, Cloud Storage, Cloud Run, Big Query, Cloud Logging And Monitoring etc.)", "Sentry ", "Cypress", "Jest", "Docker", "Gitlab CI/CD", "Postgres", "Firebase", "Redis", "Sass", "Serverless", "Auth0"],
      industries: ["B2B & B2C Re-commerce Tech", "focus to EU ecommerce market"],
      location: `Berlin, Germany - Remote`,
      title: "Software Engineer",
      logoUrl: IMAGES.REBOLET_LOGO,
      start: "June 2022",
      end: "Jan 2024",
      description:
        `- Planned, Architected and Executed a **Product Information Management System** to automate and govern product data, **eliminating 60% of manual workflows
and reducing operational overhead, enabling faster product launches with airtight security**.
- Collaborated to build **TestNGrade**, optimizing product categorization and pricing for **500+ suppliers**, driving **€7 per item on
200,000+ products** which significantly **boosted revenue**. Enhanced backend performance by refactoring API endpoints, improving
response times and scalability. Optimized the frontend with tree shaking, **reducing app size by 30% and cutting load times by 40%**. 
Collaborated with the design team to create a user-friendly interface, increasing user engagement and navigation efficiency.
Implemented a robust access management framework, strengthening security and ensuring compliance across applications,
including the Suppliers Portal Dashboard.
- Led the redesign of **Supplier Portal Dashboard** unifying financial data and automating invoices for executives. Optimized
APIs and frontend, **cutting load times by 35% and boosting efficiency by 50%**. Led a UX overhaul, **increasing adoption by 45%.**`,
    },
    {
      company: "HackerOne",
      href: "https://www.hackerone.com/",
      badges: [],
      industries: [],
      location: "San Francisco, California - Remote",
      title: "Security Researcher",
      logoUrl: IMAGES.HACKERONE_LOGO,
      start: "August 2017",
      end: "January 2021",
      description:
        `- Recognized by industry leaders like [Meta, Airbnb, Toyota, Snapchat, HackerOne, Shopify, and Spotify]() for identifying security
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Typescript",
        "Javascript",
        "Nodejs",
        "Python",
        "Go",
        "SQL",
        "React.js",
        "Next.js",
        "Vue.js",
        "Express.js",
        "Nest.js",
        "Vite",
        "Redux",
        "GraphQL(Apollo)",
        "Auth0",
        "tRPC(TypeScript Remote Procedure Call)",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "DynamoDB",
        "Supabase",
        "Firebase",
        "Firestore",
        "Sequelize",
        "Prisma",
        "Docker",
        "Github Actions Workflows",
        "Gitlab CI/CD",
        "AWS CDK (Cloud Development Kit)",
        "Terraform",
        "AWS (Amplify, EC2, RDS, Cognito, EKS, S3, Lambda, API Gateway, VPC, CloudWatch etc.)",
        "GCP (App Engine, CloudSQL, Cloud Storage, Cloud Run, Big Query, Cloud Logging And Monitoring etc.)",
        "Git",
        "Jest",
        "Cypress",
        "Apache Kafka",
        "Directus",
        "Sanity",
        "Sentry",
        "Stripe",
        "CSS",
        "Sass",
        "TailwindCSS",
        "Amplify UI",
        "Shadcn UI",
        "Magic UI",
        "I18n",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
