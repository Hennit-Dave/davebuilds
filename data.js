// Project content lives here. Featured work appears on the homepage;
// only entries with a real storyUrl appear on the DaveBuilds index.
/* exported PROJECTS */
const LEGACY_STORIES = [
  {
    slug: "portfolio",
    featured: false,
    name: "This Portfolio",
    description: "The site you are on right now — built with AI-assisted development as a place to show finished work and document the process behind it.",
    storyTeaser: "The reasoning behind the terminal-meets-canvas identity, why Projects and DaveBuilds had to stay structurally separate, and what I would still change.",
    stack: ["HTML", "CSS", "JavaScript"],
    cover: ["#283542", "#3E4A59"],
    badges: ["AI-assisted"],
    liveDemo: "https://davebuilds.vercel.app/",
    dateCompleted: "June 2026",
    readingTime: "6 min read",
    storyUrl: "davebuilds-portfolio.html"
  },
  {
    slug: "taskflow",
    featured: false,
    badges: ["AI-assisted"],
    name: "TaskFlow",
    description: "A full-stack task management app with list and calendar views, subtasks, priorities, and an activity feed — built end to end on a real REST API.",
    storyTeaser: "The real stack behind a full-stack build — Express, SQLite, and JWT auth — plus the future features already scaffolded in the codebase and waiting to be wired up.",
    stack: ["Node.js", "Express", "SQLite", "JWT"],
    cover: ["#0E7490", "#155E75"],
    thumbnail: "assets/taskflow/dashboard.png",
    thumbnailWidth: 2000, thumbnailHeight: 1146,
    thumbnailAlt: "TaskFlow dashboard with task stats, analytics and a new task form",
    liveDemo: "https://taskflow-fqay.onrender.com/html/index.html",
    github: "https://github.com/Hennit-Dave/TaskFlow",
    dateCompleted: "July 4, 2026",
    readingTime: "8 min read",
    storyUrl: "davebuilds-taskflow.html"
  },
  {
    slug: "lumiere",
    featured: false,
    name: "Lumière",
    description: "A luxury beauty and jewelry brand concept — a fully designed landing page built visually in Framer, no code involved.",
    storyTeaser: "A freestyle exploration in pure visual design — the brand, the palette, the type pairing, and an honest look at what's still unfinished.",
    stack: ["Framer"],
    cover: ["#C0617A", "#2A1A1E"],
    thumbnail: "assets/lumiere/hero.png",
    thumbnailWidth: 2000, thumbnailHeight: 958,
    thumbnailAlt: "Lumière landing page with a Beauty Crafted for You headline and lifestyle photo",
    liveDemo: "https://happier-shortbread-762754.framer.app/",
    dateCompleted: "July 15, 2026",
    readingTime: "6 min read",
    storyUrl: "davebuilds-lumiere.html"
  }
];

const PROJECTS = [
  {
    slug: "freelance-marketplace-api",
    featured: true,
    name: "Freelance Marketplace API",
    description: "A public REST API for a freelance marketplace with five resources, validation and rate limiting.",
    role: "Designed the API and directed an AI agent to build it; reviewed and tested the output.",
    stack: ["Next.js 14", "strict TypeScript", "Prisma", "PostgreSQL (Neon)", "Zod", "Upstash Redis", "Vercel"],
    badges: ["Live"],
    liveDemo: "https://freelancemarketplaceapi.vercel.app/consumer",
    github: "https://github.com/Hennit-Dave/freelancemarketplace-API",
    images: [{
      src: "assets/projects/api-consumer-640.jpg",
      srcset: "assets/projects/api-consumer-640.jpg 640w, assets/projects/api-consumer-1280.jpg 1280w",
      width: 2378, height: 1714,
      alt: "Gigs list with a category filter on the API's consumer page",
      caption: "Consumer page showing seeded sample data"
    }],
    storyUrl: "davebuilds-freelance-marketplace-api.html",
    storyTeaser: "From brief and data model to a deployed API: directing an agent, testing real services and reviewing the tradeoffs."
  },
  {
    slug: "order-confirmation-jobs",
    featured: true,
    name: "Order Confirmation Jobs",
    description: "A background job system that sends order confirmation emails, with retries, a dead-letter page and stuck-job recovery. Postgres is the queue.",
    role: "Designed the job flow and directed an AI agent to build it.",
    note: "Delivery is at-least-once with an idempotency guard. The email is sent before sentAt is written, so a retry can send it again.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL (FOR UPDATE SKIP LOCKED)", "Nodemailer"],
    badges: ["Runs locally, not deployed"],
    github: "https://github.com/Hennit-Dave/orderconfirmationjobs",
    images: [{
      src: "assets/projects/order-idempotency-640.jpg",
      srcset: "assets/projects/order-idempotency-640.jpg 640w, assets/projects/order-idempotency-1280.jpg 1280w",
      width: 2372, height: 1406,
      alt: "Terminal showing the same order posted twice and the same job id returned",
      caption: "Idempotency check: a repeated orderId returns the same job"
    }]
  },
  {
    slug: "phunmix-delight",
    featured: true,
    name: "Phunmix Delight",
    description: "A promotional site for my sister's cocktail, mocktail and finger-food business in Lagos, built with AI-assisted development.",
    role: "Wrote the brief and prompts, gathered her logo, photos and contact details, reviewed and iterated on the output.",
    stack: ["React", "Vite", "React Three Fiber"],
    badges: ["Live", "Family business site", "AI-assisted"],
    liveDemo: "https://phunmix-delight.vercel.app/",
    github: "https://github.com/Hennit-Dave/phunmix-delight",
    images: [{
      src: "assets/projects/phunmix-mobile-480.jpg",
      srcset: "assets/projects/phunmix-mobile-480.jpg 480w, assets/projects/phunmix-mobile-960.jpg 960w",
      width: 1125, height: 2314,
      alt: "Phunmix Delight gallery on a phone with a 'Make an enquiry' button",
      caption: "Mobile gallery and enquiry button",
      portrait: true
    }, {
      src: "assets/projects/phunmix-desktop-640.jpg",
      srcset: "assets/projects/phunmix-desktop-640.jpg 640w, assets/projects/phunmix-desktop-1280.jpg 1280w",
      width: 3014, height: 1828,
      alt: "Phunmix Delight desktop homepage with a blue cocktail and enquiry links",
      caption: "Desktop homepage"
    }]
  },
  { slug: "rota", name: "Rota", featured: true, inProgress: true, badges: ["In progress"] },
  { slug: "matinee", name: "Matinee", featured: true, inProgress: true, badges: ["In progress"] },
  ...LEGACY_STORIES
];
