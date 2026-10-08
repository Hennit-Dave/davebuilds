// ---------------------------------------------------------------------------
// Single source of truth for every finished project. Every project here
// gets rendered in two places:
//   1. The Projects section on index.html (what was built)
//   2. A card on davebuilds.html (the story behind it) -> storyUrl
//
// To add a new finished project:
//   1. Push a new object here.
//   2. Copy davebuilds-portfolio.html to a new davebuilds-<slug>.html file
//      and write its story using the same section template.
//   3. Set this object's storyUrl to that new file's name.
// No other file needs to change — both grids render from this array.
//
// "thumbnail" is optional — a real screenshot path (e.g. "assets/<slug>/dashboard.png").
// When present, both card grids render it instead of the "cover" gradient placeholder.
// ---------------------------------------------------------------------------
/* exported PROJECTS */
const PROJECTS = [
  {
    slug: "portfolio",
    name: "This Portfolio",
    description: "The site you are on right now — built with AI-assisted development as a place to show finished work and document the process behind it.",
    storyTeaser: "The reasoning behind the terminal-meets-canvas identity, why Projects and DaveBuilds had to stay structurally separate, and what I would still change.",
    stack: ["HTML", "CSS", "JavaScript"],
    cover: ["#283542", "#3E4A59"],
    badges: ["AI-assisted"],
    liveDemo: "#",
    github: "#",
    dateCompleted: "June 2026",
    readingTime: "6 min read",
    storyUrl: "davebuilds-portfolio.html"
  },
  {
    slug: "taskflow",
    badges: ["AI-assisted"],
    name: "TaskFlow",
    description: "A full-stack task management app with list and calendar views, subtasks, priorities, and an activity feed — built end to end on a real REST API.",
    storyTeaser: "The real stack behind a full-stack build — Express, SQLite, and JWT auth — plus the future features already scaffolded in the codebase and waiting to be wired up.",
    stack: ["Node.js", "Express", "SQLite", "JWT"],
    cover: ["#0E7490", "#155E75"],
    thumbnail: "assets/taskflow/dashboard.png",
    liveDemo: "https://taskflow-fqay.onrender.com/html/index.html",
    github: "https://github.com/Hennit-Dave/TaskFlow",
    dateCompleted: "July 4, 2026",
    readingTime: "8 min read",
    storyUrl: "davebuilds-taskflow.html"
  },
  {
    slug: "lumiere",
    name: "Lumière",
    description: "A luxury beauty and jewelry brand concept — a fully designed landing page built visually in Framer, no code involved.",
    storyTeaser: "A freestyle exploration in pure visual design — the brand, the palette, the type pairing, and an honest look at what's still unfinished.",
    stack: ["Framer"],
    cover: ["#C0617A", "#2A1A1E"],
    thumbnail: "assets/lumiere/hero.png",
    liveDemo: "https://happier-shortbread-762754.framer.app/",
    dateCompleted: "July 15, 2026",
    readingTime: "6 min read",
    storyUrl: "davebuilds-lumiere.html"
  }
];
