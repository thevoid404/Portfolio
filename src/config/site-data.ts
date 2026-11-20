/**
 * =============================================================================
 * PORTFOLIO SITE CONFIGURATION & CENTRALIZED DATA
 * =============================================================================
 * All portfolio content, projects, academic milestones, skills, and links
 * are strictly typed and centralized here for easy updates in seconds.
 */

export type TechSkill = {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "ai" | "language";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  role: string;
  year: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  accent: string;
  link?: string;
  github?: string;
  /** Drop your Kaggle notebook URL here */
  kaggleUrl?: string;
  /** Drop your certificate or credential URL here */
  certificateUrl?: string;
};

export type Milestone = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type InterestItem = {
  id: string;
  title: string;
  description: string;
};

export type AcademicHighlight = {
  title: string;
  badge?: string;
  detail: string;
};

/* =============================================================================
 * MAIN SITE CONFIGURATION
 * ============================================================================= */
export const siteConfig = {
  name: "Ashraf Uddin Anas",
  title: "Full Stack & Applied AI Engineer",
  email: "anasahmed4484@gmail.com",
  location: "Dhaka, Bangladesh",
  intro:
    "I start with real problems, not frameworks—building scalable web systems and agentic AI workflows with Next.js, NestJS, and LangGraph.",

  hero: {
    availabilityBadge: "Available for engineering roles & select builds",
  },

  profile: {
    image: "/profile.jpg",
    alt: "Ashraf Uddin Anas — Full Stack & Applied AI Engineer",
    tagline: "Full-Stack & Applied AI Engineer",
    bio: "Final-year CSE student building full-stack web products and AI agent systems. I care less about chasing frameworks and more about understanding the problem deeply enough to build what actually works.",
    highlights: [
      "Full-Stack & AI Systems",
      "Open to internships & roles",
      "Based in Dhaka, Bangladesh",
    ],
  },

  academics: {
    university: "Southeast University",
    faculty: "Faculty of Science & Engineering",
    program: "B.Sc. in Computer Science & Engineering",
    status: "Final-Year Undergraduate",
    cgpa: "3.86 / 4.00",
    location: "Dhaka, Bangladesh",
    summary:
      "Final-year Computer Science & Engineering undergraduate at Southeast University, focusing on backend systems, distributed architectures, and applied AI agent workflows alongside academic coursework.",
    focusAreas: [
      "Software Engineering",
      "Backend Systems",
      "Applied AI & ML",
      "Database Architecture",
    ],
    // Real academic and competition highlights (replacing dummy semester updates/exams)
    highlights: [
      {
        title: "Final-Year CSE Track",
        badge: "Academic Track",
        detail:
          "Advanced study and practical coursework in software engineering, distributed systems, and scalable backend architecture.",
      },
      {
        title: "Applied AI & Systems Engineering",
        badge: "Specialization",
        detail:
          "Designing multi-agent orchestration, reliable tool-calling workflows, and containerized backend microservices.",
      },
    ] as AcademicHighlight[],
    milestones: [
      {
        title: "IEEE Datathon — 4th Place Finalist",
        badge: "National Finalist",
        detail:
          "Competed under IEEE, engineering machine learning pipelines, predictive modeling, and feature analysis under strict time limits.",
      },
    ] as AcademicHighlight[],
  },

  about: {
    headline:
      "I’m more interested in understanding a problem than rushing to look like I have the answer.",
    story: [
      "I’m Ashraf Uddin Ahmed Anas—a final-year Computer Science & Engineering student at Southeast University in Dhaka.",
      "Most of how I think about software didn’t come from chasing frameworks; it came from sitting with messy, real-world problems until they actually made sense. Moving from MERN into structured backend and AI systems taught me something simple: good engineering is mostly empathy. When you genuinely understand the friction someone is dealing with, the right architecture starts revealing itself.",
      "I don’t tie my identity to a single stack. If something is genuinely worth building, I’d rather learn whatever the problem asks for than force every idea into what I already know.",
    ],
    // 3 honest, verified metrics
    stats: [
      { label: "CSE CGPA", value: "3.86" },
      { label: "IEEE Datathon Finalist", value: "4th" },
      { label: "Web + Agentic AI", value: "Full-Stack" },
    ],
  },

  social: {
    github: "https://github.com/thevoid404",
    linkedin: "https://www.linkedin.com/in/ashraf-uddin-ahmed-anas/",
    twitter: "https://x.com/anas_ahmes4484",
  },

  resume: {
    file: "/resume.pdf",
    label: "Download Resume",
  },

  interests: {
    headline: "Technical Curiosities & Research",
    description:
      "Areas of genuine technical depth, active exploration, and engineering curiosity.",
    items: [
      {
        id: "1",
        title: "Agentic AI & LLM Orchestration",
        description:
          "LangChain, LangGraph, LangSmith, and building reliable, deterministic tool-calling workflows that solve real business friction.",
      },
      {
        id: "2",
        title: "Edge AI",
        description:
          "Exploring efficient model inference, quantization, and running intelligence under strict memory and hardware constraints.",
      },
      {
        id: "3",
        title: "Federated Learning",
        description:
          "Exploring decentralized, privacy-preserving machine learning paradigms where models train across distributed nodes without raw data transfer.",
      },
      {
        id: "4",
        title: "Quantum Physics",
        description:
          "Deep intellectual curiosity in quantum mechanics, superposition, entanglement, and their future computational implications.",
      },
      {
        id: "5",
        title: "Real-Time Backend Systems",
        description:
          "Engineering resilient, event-driven backends using NestJS, Socket.io, Redis caching, Docker, and PostgreSQL architectures.",
      },
      {
        id: "6",
        title: "Interactive Web Engineering",
        description:
          "Crafting fluid, tactile digital interfaces using Next.js, TypeScript, and high-performance GSAP motion design.",
      },
    ] as InterestItem[],
  },

  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Academics", href: "#academics" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Journey", href: "#experience" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

/* =============================================================================
 * REAL TECH STACK (17 Verified Technologies)
 * ============================================================================= */
export const techSkills: TechSkill[] = [
  { id: "nextjs", name: "Next.js", category: "frontend" },
  { id: "react", name: "React", category: "frontend" },
  { id: "typescript", name: "TypeScript", category: "language" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
  { id: "gsap", name: "GSAP", category: "frontend" },
  { id: "nestjs", name: "NestJS", category: "backend" },
  { id: "nodejs", name: "Node.js", category: "backend" },
  { id: "postgresql", name: "PostgreSQL", category: "database" },
  { id: "redis", name: "Redis", category: "database" },
  { id: "docker", name: "Docker", category: "devops" },
  { id: "socketio", name: "Socket.io", category: "backend" },
  { id: "mongodb", name: "MongoDB", category: "database" },
  { id: "python", name: "Python", category: "language" },
  { id: "langchain", name: "LangChain", category: "ai" },
  { id: "langgraph", name: "LangGraph", category: "ai" },
  { id: "langsmith", name: "LangSmith", category: "ai" },
  { id: "git", name: "Git", category: "devops" },
];

/* =============================================================================
 * VERIFIED PROJECTS (Selected Work)
 * ============================================================================= */
export const projects: Project[] = [
  {
    id: "aria",
    slug: "aria",
    title: "Aria",
    tagline: "Autonomous AI Customer Support & Operations System",
    description:
      "Autonomous AI customer support & commerce operations system with real-time WebSocket workflows and deterministic validation.",
    longDescription:
      "Aria is an autonomous agentic system built to handle end-to-end customer support and commerce operations with deterministic reliability. Built on Next.js and NestJS, Aria combines real-time bidirectional WebSocket event streams with multi-agent orchestration powered by LangChain, LangGraph, and LangSmith. The system uses Redis for real-time state caching, PostgreSQL for persistent operational data, and containerized Docker environments for reproducible multi-service execution.",
    role: "Full-Stack Developer (frontend, backend, database & AI orchestration)",
    year: "2025",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Docker",
    ],
    metrics: [
      { label: "Orchestration", value: "LangGraph" },
      { label: "Real-Time Protocol", value: "Socket.io" },
      { label: "State & Cache", value: "Redis + PG" },
    ],
    gradient: "from-violet-950/80 via-indigo-900/40 to-charcoal-950",
    accent: "#8b5cf6",
    link: "https://aria-autonomous-agent-puce.vercel.app/",
    github: "https://github.com/thevoid404/Aria",
  },
  {
    id: "audiolux",
    slug: "audiolux",
    title: "AudioLux",
    tagline: "Modern Full-Stack Audio E-Commerce Platform",
    description:
      "Modern full-stack audio e-commerce and product showcase platform engineered for clean UX and fast browsing.",
    longDescription:
      "AudioLux is a high-performance audio equipment e-commerce and showcase platform crafted for audiophiles and producers. Built with Next.js, React, and TypeScript on the frontend paired with a modular Node.js backend and optimized database schema, AudioLux delivers instantaneous catalog filtering, responsive product showcases, fluid shopping cart interactions, and optimized media delivery.",
    role: "Full-Stack Contributor (frontend, backend & database)",
    year: "2024",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Database"],
    metrics: [
      { label: "Browsing Flow", value: "Sub-second UX" },
      { label: "Architecture", value: "Next.js Full-Stack" },
      { label: "Data Layer", value: "Optimized DB" },
    ],
    gradient: "from-cyan-950/80 via-teal-900/30 to-charcoal-950",
    accent: "#22d3ee",
    link: "https://audiolux-web.vercel.app/",
    github: "https://github.com/thevoid404",
  },
  {
    id: "digital-agency",
    slug: "digital-agency",
    title: "Digital Agency",
    tagline: "High-Craft Interactive Agency Platform",
    description:
      "High-craft agency web platform built with responsive layouts and refined motion design.",
    longDescription:
      "A design-forward digital agency web platform engineered to demonstrate high-craft interactive web engineering. The application leverages Next.js, React, and Tailwind CSS along with advanced GSAP timeline orchestration and scroll-triggered animations to deliver tactile, cinematic browsing without sacrificing Lighthouse performance or accessibility.",
    role: "Frontend Engineer",
    year: "2024",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    metrics: [
      { label: "Motion Engine", value: "GSAP" },
      { label: "Design Craft", value: "Fluid Motion" },
      { label: "Performance", value: "Optimized" },
    ],
    gradient: "from-indigo-950/80 via-purple-900/30 to-charcoal-950",
    accent: "#6366f1",
    link: "https://digital-agency-gamma-lac.vercel.app/",
    github: "https://github.com/thevoid404",
  },
  {
    id: "ieee-datathon",
    slug: "ieee-ml-datathon",
    title: "IEEE ML Datathon (4th Place Finalist)",
    tagline: "National Machine Learning Competition Entry",
    description:
      "Competition entry under IEEE: built end-to-end machine learning pipelines and data-driven solutions to secure 4th place nationwide.",
    longDescription:
      "Competitive machine learning entry for the national IEEE Datathon. Designed and deployed comprehensive data preprocessing, feature engineering pipelines, exploratory data analysis, and predictive model ensembles under strict competition time constraints. Placed 4th nationwide among competitive engineering teams.",
    role: "Machine Learning Finalist",
    year: "2024",
    tags: ["Python", "Machine Learning", "Data Analysis", "Kaggle"],
    metrics: [
      { label: "Standing", value: "4th Place" },
      { label: "Division", value: "IEEE ML" },
      { label: "Focus", value: "Predictive AI" },
    ],
    gradient: "from-emerald-950/80 via-teal-900/30 to-charcoal-950",
    accent: "#10b981",
    // Easily drop your Kaggle notebook or certificate URLs here anytime:
    kaggleUrl: "https://www.kaggle.com",
    certificateUrl: "https://www.linkedin.com/in/ashraf-uddin-ahmed-anas/",
  },
];

/* =============================================================================
 * ENGINEERING JOURNEY & MILESTONES (Replaced dummy companies)
 * ============================================================================= */
export const experiences: Milestone[] = [
  {
    id: "1",
    role: "Full-Stack & Agentic AI Engineering (Aria)",
    company: "Active Daily Product Development · Autonomous Systems",
    period: "2024 — Present",
    location: "Dhaka, Bangladesh",
    description:
      "Active daily product engineering across Next.js, NestJS, Redis, PostgreSQL, Socket.io, and LangGraph/LangSmith.",
    highlights: [
      "Architected multi-agent autonomous support workflows using LangGraph and LangSmith for deterministic execution",
      "Implemented real-time bidirectional WebSocket event channels with Socket.io and Redis state caching",
      "Engineered modular NestJS backend services with PostgreSQL schemas and containerized Docker deployment",
    ],
  },
  {
    id: "2",
    role: "4th Place Finalist — IEEE Datathon",
    company: "IEEE National Competition · Machine Learning Track",
    period: "2024",
    location: "Dhaka, Bangladesh",
    description:
      "Competed under IEEE, building end-to-end machine learning pipelines and data-driven solutions under competition constraints.",
    highlights: [
      "Built complete feature engineering and predictive modeling pipelines in Python and Scikit-learn",
      "Secured 4th place national finalist standing against competitive engineering teams nationwide",
      "Conducted deep exploratory data analysis and model validation on complex competitive datasets",
    ],
  },
  {
    id: "3",
    role: "MERN to Distributed Backend & AI Systems",
    company: "Architectural Evolution & System Design",
    period: "2023 — 2024",
    location: "Dhaka, Bangladesh",
    description:
      "Transitioned from monolithic MERN stack builds into containerized, real-time architectures with NestJS, Docker, Redis, and LLM orchestration.",
    highlights: [
      "Migrated from express-based monolithic structures to production-grade NestJS enterprise architecture",
      "Deepened focus on caching layers with Redis, event queues, and PostgreSQL relational design",
      "Integrated LLM orchestration frameworks (LangChain, LangGraph) into practical production-ready products",
    ],
  },
];

/* =============================================================================
 * ENGINEERING DISCIPLINE & WORKFLOW
 * ============================================================================= */
export const processSteps: ProcessStep[] = [
  {
    id: "1",
    step: "01",
    title: "Discovery & Empathy",
    description:
      "Deep dive into the real-world friction and requirements before rushing to write code. Architecture begins with genuine empathy.",
  },
  {
    id: "2",
    step: "02",
    title: "System Design",
    description:
      "Modeling database schemas, state contracts, caching boundaries with Redis, and deterministic AI execution flows.",
  },
  {
    id: "3",
    step: "03",
    title: "Disciplined Development",
    description:
      "Building with strict TypeScript, modular NestJS or Next.js services, WebSocket feedback loops, and containerization.",
  },
  {
    id: "4",
    step: "04",
    title: "Refinement & Craft",
    description:
      "Fluid GSAP motion choreographies, latency profiling, deterministic validation, and accessibility compliance.",
  },
  {
    id: "5",
    step: "05",
    title: "Deployment & Monitoring",
    description:
      "Dockerized deployment, logging with LangSmith / telemetry, and continuous iteration based on real-world usage.",
  },
];
