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
  glowColor?: string;
  featuredSpan?: "wide" | "medium" | "standard";
  previewImage?: string;
  link?: string;
  github?: string;
  kaggleUrl?: string;
  certificateUrl?: string;
};

export type Milestone = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  status: "Active" | "Achievement";
  accent: string;
  description: string;
  highlights: string[];
  kaggleUrl?: string;
  certificateUrl?: string;
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type ResearchFrontier = {
  id: string;
  title: string;
  status: "Exploring" | "Deep Curiosity";
  summary: string;
  centralQuestion: string;
  motif: "chip" | "constellation" | "quantum" | "embedded";
};

export type EngineeringCraft = {
  id: string;
  title: string;
  status: "Active Practice";
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
    "Building full-stack web applications and AI systems—from clean interfaces down to reliable backends.",

  hero: {
    availabilityBadge: "Available for engineering roles & select builds",
  },

  activeVentures: [
    {
      name: "Aria",
      role: "Co-Founder · AI Support & Store Operations",
      accent: "#10b981",
      dotColor: "bg-emerald-400",
      link: "https://ariadesk.app/",
    },
    {
      name: "Nexus Studio",
      role: "Co-Founder · Digital Product & Web Agency",
      accent: "#14b8a6",
      dotColor: "bg-teal-400",
      link: "https://digital-agency-gamma-lac.vercel.app/",
    },
  ],

  profile: {
    image: "/profile.jpg",
    alt: "Ashraf Uddin Anas — Full Stack & Applied AI Engineer",
    tagline: "Full-Stack & Applied AI Engineer",
    bio: "Final-year CSE student building full-stack web apps and AI tools. Focused on clean code, dependable backends, and practical workflows.",
    highlights: [
      "Full-Stack & AI Systems",
      "Open to engineering roles",
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
    subtitle: "Formal computer science education and academic track.",
    hsc: {
      college: "Dr. Mahbubur Rahman Mollah College",
      program: "Higher Secondary (HSC) · Science",
      gpa: "GPA 5.00 / 5.00",
      location: "Dhaka, Bangladesh",
    },
    summary:
      "Final-year Computer Science & Engineering undergraduate at Southeast University, focusing on backend systems, distributed architectures, and applied AI agent workflows alongside academic coursework.",
    focusAreas: [
      "Software Engineering",
      "Backend Systems",
      "Applied AI & ML",
      "Database Architecture",
    ],
    highlights: [
      {
        title: "Final-Year CSE Curriculum",
        badge: "Academic Track",
        detail:
          "Advanced study and practical coursework in software engineering, distributed systems, and scalable backend architecture.",
      },
      {
        title: "Applied Systems & AI Engineering",
        badge: "Specialization",
        detail:
          "Designing multi-agent orchestration, reliable tool-calling workflows, and containerized backend microservices.",
      },
    ] as AcademicHighlight[],
    milestones: [
      {
        title: "Undergraduate CSE Foundation",
        badge: "Southeast University",
        detail:
          "Maintaining a 3.86 CGPA with deep technical focus in database architecture, computer networking, and system design.",
      },
    ] as AcademicHighlight[],
  },

  about: {
    headline:
      "I’m more interested in understanding a problem than rushing to look like I have the answer.",
    story: [
      "I’m Ashraf Uddin Ahmed Anas—a final-year Computer Science & Engineering student at Southeast University in Dhaka.",
      "Most of how I think about software didn’t come from chasing frameworks; it came from sitting with messy, real-world problems until they actually made sense. Moving from monolithic stacks into structured backend and AI systems taught me something simple: good engineering is mostly empathy. When you genuinely understand the friction someone is dealing with, the right architecture starts revealing itself.",
      "I don’t tie my identity to a single stack. If something is genuinely worth building, I’d rather learn whatever the problem asks for than force every idea into what I already know.",
    ],
    languages: "English · Bengali",
    beyondScreen: [
      {
        title: "DIY & Making",
        description: "Building practical things I actually need from scratch.",
      },
      {
        title: "Photography",
        description: "Drawn to framing, natural light, and visual detail.",
      },
      {
        title: "Cinema & Series",
        description: "Always up for sharp storytelling and good pacing.",
      },
    ],
    availability: {
      status: "Open to Opportunities",
      detail:
        "Software engineering roles, internships & select product builds.",
    },
    stats: [
      { label: "Active Ventures", value: "2" },
      { label: "Web & Agentic AI", value: "Full-Stack" },
      { label: "Production Tech", value: "17+" },
    ],
  },

  social: {
    github: "https://github.com/thevoid404",
    linkedin: "https://www.linkedin.com/in/ashraf-uddin-ahmed-anas/",
    twitter: "https://x.com/anas_ahmes4484",
    x: "https://x.com/anas_ahmes4484",
    facebook: "https://www.facebook.com/ahmed.anas.682117/",
    instagram: "https://www.instagram.com/_anas__ahmed_0/",
    discord: "https://discord.com/users/1334867033577357347",
    whatsapp: "https://wa.me/8801533174536",
  },

  resume: {
    file: "/resume.pdf",
    label: "Download Resume",
  },

  interests: {
    headline: "Technical Curiosities & Research",
    description:
      "Topics I’m actively studying and areas I enjoy building in.",
    frontiers: [
      {
        id: "edge-ai",
        title: "Edge AI",
        status: "Exploring",
        summary:
          "Running efficient inference, quantization, and intelligence under strict memory and hardware constraints.",
        centralQuestion:
          "How small can a model get before it loses genuine reasoning?",
        motif: "chip",
      },
      {
        id: "federated-learning",
        title: "Federated Learning",
        status: "Exploring",
        summary:
          "Decentralized, privacy-preserving training where distributed nodes learn collaboratively without raw data transfer.",
        centralQuestion:
          "How can intelligence improve globally while sensitive data stays strictly local?",
        motif: "constellation",
      },
      {
        id: "embedded-systems",
        title: "Embedded Systems",
        status: "Exploring",
        summary:
          "Connecting computers to the physical world through sensors, vision, and AI. Currently building a vision-controlled robotic arm assistant in a university lab project.",
        centralQuestion:
          "How can we build machines that can see, understand, and interact with the physical world?",
        motif: "embedded",
      },
    ] as ResearchFrontier[],
    crafts: [
      {
        id: "agentic-ai",
        title: "Agentic AI & LLM Orchestration",
        status: "Active Practice",
        description:
          "LangChain, LangGraph, and dependable tool-calling workflows built for real operations.",
      },
      {
        id: "real-time-systems",
        title: "Real-Time Backend Systems",
        status: "Active Practice",
        description:
          "Solid, event-driven backends powered by NestJS, Socket.io, Redis, Docker, and PostgreSQL.",
      },
      {
        id: "interactive-web",
        title: "Interactive Web Engineering",
        status: "Active Practice",
        description:
          "Tactile, high-performance interfaces engineered with Next.js, TypeScript, and fluid GSAP motion.",
      },
    ] as EngineeringCraft[],
  },

  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#academics" },
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
 * VERIFIED PROJECTS (Featured Work with Asymmetric Highlighting)
 * ============================================================================= */
export const projects: Project[] = [
  {
    id: "aria",
    slug: "aria",
    title: "Aria",
    tagline: "AI Customer Support & Order Management",
    description:
      "An AI support and store management platform built with live real-time chat and dependable order verification.",
    longDescription:
      "Aria is an AI assistant built to handle everyday customer support and store orders with dependable accuracy. Built on Next.js and NestJS, Aria connects live real-time chat with multi-step AI agents using LangChain and LangGraph. It uses Redis for fast session memory, PostgreSQL for customer and order records, and Docker for smooth, reproducible execution.",
    role: "Co-Founder & Full-Stack Engineer",
    year: "2026",
    featuredSpan: "wide",
    glowColor: "rgba(139, 92, 246, 0.28)",
    previewImage: "/images/projects/aria.png",
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
    gradient: "from-emerald-950/80 via-teal-900/40 to-charcoal-950",
    accent: "#10b981",
    link: "https://aria-autonomous-agent-puce.vercel.app/",
    github: "https://github.com/thevoid404/Aria",
  },
  {
    id: "audiolux",
    slug: "audiolux",
    title: "AudioLux",
    tagline: "Modern Full-Stack Audio E-Commerce Platform",
    description:
      "Full-stack audio commerce storefront built for crisp product discovery and seamless checkout.",
    longDescription:
      "AudioLux is a high-performance audio equipment e-commerce and showcase platform crafted for audiophiles and producers. Built with Next.js, React, and TypeScript on the frontend paired with a modular Node.js backend and optimized database schema, AudioLux delivers instantaneous catalog filtering, responsive product showcases, fluid shopping cart interactions, and optimized media delivery.",
    role: "Full-Stack Contributor (frontend, backend & database)",
    year: "2025",
    featuredSpan: "standard",
    glowColor: "rgba(20, 184, 166, 0.25)",
    previewImage: "/images/projects/audiolux.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Firebase"],
    metrics: [
      { label: "Browsing Flow", value: "Sub-second UX" },
      { label: "Architecture", value: "Next.js Full-Stack" },
      { label: "Data Layer", value: "PostgreSQL DB" },
    ],
    gradient: "from-teal-950/80 via-slate-900/40 to-charcoal-950",
    accent: "#14b8a6",
    link: "https://audiolux-web.vercel.app/",
    github: "https://github.com/thevoid404",
  },
  {
    id: "creators-vault",
    slug: "creators-vault",
    title: "Creators Vault",
    tagline: "Intelligent Digital Asset Management Workspace",
    description:
      "Intelligent digital asset workspace with semantic search and cross-project relationship tracking.",
    longDescription:
      "An intelligent digital asset management workspace for creators, designers and developers. Collect, organize, connect and search every digital asset you work with — uploads, pasted URLs, marketplace purchases, code snippets, fonts — in one place, with relationship tracking (\"used in the AudioLux dashboard\") and search by meaning, not just filename.",
    role: "Creator & Full-Stack Engineer",
    year: "2026",
    featuredSpan: "standard",
    glowColor: "rgba(245, 158, 11, 0.22)",
    previewImage: "/images/projects/creators-vault.png",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    metrics: [
      { label: "Search Engine", value: "Semantic Search" },
      { label: "Asset Graphs", value: "Relationship Track" },
      { label: "Architecture", value: "Next.js + NestJS" },
    ],
    gradient: "from-amber-950/80 via-orange-900/30 to-charcoal-950",
    accent: "#f59e0b",
    link: "https://creators-vault-storage.vercel.app/",
    github: "https://github.com/thevoid404/Creators-vault",
  },
  {
    id: "nexus-studio",
    slug: "nexus-studio",
    title: "Nexus Studio",
    tagline: "High-Craft Digital Product & Web Agency Platform",
    description:
      "High-craft digital agency platform designed with responsive layouts and fluid motion.",
    longDescription:
      "Nexus Studio is our digital product studio web platform engineered to demonstrate high-craft interactive web engineering. The application leverages Next.js, React, and Tailwind CSS along with advanced GSAP timeline orchestration and scroll-triggered animations to deliver tactile, cinematic browsing without sacrificing Lighthouse performance or accessibility.",
    role: "Co-Founder & Frontend Engineer",
    year: "2026",
    featuredSpan: "medium",
    glowColor: "rgba(52, 211, 153, 0.25)",
    previewImage: "/images/projects/nexus-studio.png",
    tags: ["Next.js", "Tailwind CSS", "GSAP", "React"],
    metrics: [
      { label: "Motion Engine", value: "GSAP" },
      { label: "Design Craft", value: "Fluid Motion" },
      { label: "Performance", value: "Optimized" },
    ],
    gradient: "from-emerald-950/80 via-teal-950/40 to-charcoal-950",
    accent: "#10b981",
    link: "https://digital-agency-gamma-lac.vercel.app/",
    github: "https://github.com/thevoid404",
  },
  /* =========================================================================
   * TEMPLATE: To add project 4 or 5 later, uncomment and fill in below:
   * =========================================================================
   * {
   *   id: "project-four",
   *   slug: "project-four",
   *   title: "Project Four",
   *   tagline: "High-Performance Distributed Application",
   *   description: "One-line summary of what the system does and why it matters.",
   *   longDescription: "Detailed case study description covering architecture, tech stack, and results.",
   *   role: "Lead Full-Stack Engineer",
   *   year: "2025",
   *   featuredSpan: "standard",
   *   glowColor: "rgba(16, 185, 129, 0.25)",
   *   tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
   *   metrics: [
   *     { label: "Metric One", value: "99.9%" },
   *     { label: "Metric Two", value: "<50ms" },
   *   ],
   *   gradient: "from-emerald-950/80 via-teal-900/30 to-charcoal-950",
   *   accent: "#10b981",
   *   link: "https://example.com",
   *   github: "https://github.com/thevoid404",
   * },
   */
];

/* =============================================================================
 * VENTURES & MILESTONES (STRICTLY the only place IEEE Datathon appears)
 * ============================================================================= */
export const experiences: Milestone[] = [
  {
    id: "1",
    role: "Co-Founder & Full-Stack Engineer — Aria",
    company: "Active Venture · AI Support & Store Operations",
    period: "2026 — Present",
    location: "Dhaka, Bangladesh",
    status: "Active",
    accent: "#10b981",
    description:
      "Building an AI support platform that handles customer inquiries and automates store orders from frontend to database.",
    highlights: [
      "Built multi-step AI agent workflows with LangGraph and dependable order verification",
      "Engineered real-time bidirectional WebSocket event streams with Socket.io and Redis cache",
      "Built containerized Docker microservices paired with relational PostgreSQL schemas",
    ],
  },
  {
    id: "2",
    role: "Co-Founder — Nexus Studio",
    company: "Active Venture · Digital Product & Web Agency",
    period: "2026 — Present",
    location: "Dhaka, Bangladesh",
    status: "Active",
    accent: "#14b8a6",
    description:
      "Running our digital web studio—designing and shipping high-craft modern web experiences for brands, startups, and high-performance products.",
    highlights: [
      "Directing frontend motion craft, responsive layouts, and interactive design systems with GSAP",
      "Delivering sub-second load times and 98+ Lighthouse scores across client productions",
      "Translating brand identities into memorable, high-conversion digital platforms",
    ],
  },
  {
    id: "3",
    role: "4th Place Finalist — IEEE Datathon",
    company: "IEEE National Competition · Machine Learning Track",
    period: "2026",
    location: "Dhaka, Bangladesh",
    status: "Achievement",
    accent: "#10b981",
    description:
      "Placed 4th nationwide under IEEE, competing on end-to-end machine learning modeling pipelines and data analysis under strict competition constraints.",
    highlights: [
      "Built complete feature engineering and predictive modeling pipelines in Python and Scikit-learn",
      "Secured 4th place national finalist standing against competitive engineering teams nationwide",
      "Conducted deep exploratory data analysis and model validation on complex competitive datasets",
    ],
    kaggleUrl: "https://www.kaggle.com",
    certificateUrl: "https://www.linkedin.com/in/ashraf-uddin-ahmed-anas/",
  },
];

/* =============================================================================
 * HOW I WORK (4 Crisp, Punchy Steps)
 * ============================================================================= */
export const processSteps: ProcessStep[] = [
  {
    id: "1",
    step: "01",
    title: "Understand",
    description:
      "Uncovering root friction and core requirements before writing a single line of code.",
  },
  {
    id: "2",
    step: "02",
    title: "Architect",
    description:
      "Designing robust database schemas, clean API boundaries, and resilient state contracts.",
  },
  {
    id: "3",
    step: "03",
    title: "Build",
    description:
      "Iterating with strict TypeScript, modular services, and deterministic tool execution.",
  },
  {
    id: "4",
    step: "04",
    title: "Ship & Iterate",
    description:
      "Deploying containerized builds with telemetry, motion polish, and performance profiling.",
  },
];
