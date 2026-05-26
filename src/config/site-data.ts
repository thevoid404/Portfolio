export type TechSkill = {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "language";
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
};

export type Experience = {
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

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const siteConfig = {
  name: "Ashraf Uddin Anas",
  title: "Full Stack Developer",
  email: "anasahmed4484@gmail.com",
  location: "Dhaka, Bangladesh",
  intro:
    "I build scalable, modern, high-performance web applications with ensured security.",
  about: {
    headline: "Engineering digital experiences with precision and intent.",
    story: [
      "I'm a full stack developer obsessed with the intersection of performance, aesthetics, and maintainable architecture. Over the past five years, I've shipped products for startups and enterprises alike—always with a focus on craft.",
      "From designing API layers in NestJS to crafting pixel-perfect interfaces in Next.js, I treat every line of code as part of a larger narrative. I believe great software should feel effortless, even when the systems underneath are extraordinarily complex.",
    ],
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Delivered", value: "40+" },
      { label: "Client Satisfaction", value: "98%" },
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
  profile: {
    image: "/profile.jpg",
    alt: "Ashraf Uddin Anas — Full Stack Developer",
    tagline: "Building the web, one commit at a time.",
    bio: "Passionate about clean code, thoughtful design, and shipping products that make a real difference. When I'm not coding, I'm learning, experimenting, or collaborating on new ideas.",
    highlights: [
      "Full stack development",
      "Open to internships & freelance",
      "Based in Dhaka, Bangladesh",
    ],
  },
  education: {
    university: "Your University Name",
    faculty: "Faculty of Science & Engineering",
    program: "B.Sc. in Computer Science & Engineering",
    currentSemester: "6th Semester",
    academicYear: "2024 — 2025",
    status: "Currently enrolled",
    gpa: "3.85 / 4.00",
    location: "Dhaka, Bangladesh",
    summary:
      "Focused on software engineering, web technologies, and practical project work. Balancing coursework with real-world development experience.",
    currentCourses: [
      { code: "CSE-601", name: "Software Engineering", status: "In progress" },
      { code: "CSE-602", name: "Computer Networks", status: "In progress" },
      { code: "CSE-603", name: "Machine Learning Fundamentals", status: "In progress" },
      { code: "CSE-604", name: "Web Application Development", status: "In progress" },
    ],
    recentUpdates: [
      {
        date: "May 2025",
        title: "Final exams approaching",
        detail: "Preparing for end-of-semester assessments in core CSE courses.",
      },
      {
        date: "Apr 2025",
        title: "Capstone project phase",
        detail: "Started planning full stack graduation project — modern web app with NestJS & Next.js.",
      },
      {
        date: "Mar 2025",
        title: "Semester 6 coursework",
        detail: "Enrolled in advanced networking, ML fundamentals, and software engineering labs.",
      },
    ],
    focusAreas: ["Web Development", "System Design", "Databases", "UI Engineering"],
  },
  interests: {
    headline: "What I want to build next",
    description:
      "Areas I'm actively exploring and excited to work on — from products to research-driven side projects.",
    items: [
      {
        id: "1",
        title: "AI-powered web products",
        description:
          "Integrating LLMs and computer vision into practical dashboards, copilots, and developer tools.",
      },
      {
        id: "2",
        title: "Scalable SaaS platforms",
        description:
          "Multi-tenant architectures, billing systems, and real-time collaboration for B2B teams.",
      },
      {
        id: "3",
        title: "Open source tooling",
        description:
          "CLI utilities, UI kits, and boilerplates that help developers ship faster with Next.js & NestJS.",
      },
      {
        id: "4",
        title: "FinTech & data visualization",
        description:
          "High-performance charts, risk analytics, and secure payment flows for financial products.",
      },
      {
        id: "5",
        title: "Developer experience",
        description:
          "Design systems, documentation sites, and internal platforms that raise engineering velocity.",
      },
      {
        id: "6",
        title: "Mobile-first progressive web apps",
        description:
          "Offline-ready PWAs with native-like motion and performance on emerging markets.",
      },
    ],
  },
  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Academics", href: "#academics" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const techSkills: TechSkill[] = [
  { id: "nextjs", name: "Next.js", category: "frontend" },
  { id: "react", name: "React", category: "frontend" },
  { id: "typescript", name: "TypeScript", category: "language" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
  { id: "nodejs", name: "Node.js", category: "backend" },
  { id: "express", name: "Express", category: "backend" },
  { id: "nestjs", name: "NestJS", category: "backend" },
  { id: "python", name: "Python", category: "language" },
  { id: "postgresql", name: "PostgreSQL", category: "database" },
  { id: "mongodb", name: "MongoDB", category: "database" },
  { id: "redis", name: "Redis", category: "database" },
  { id: "graphql", name: "GraphQL", category: "backend" },
  { id: "docker", name: "Docker", category: "devops" },
  { id: "aws", name: "AWS", category: "devops" },
  { id: "prisma", name: "Prisma", category: "database" },
  { id: "git", name: "Git", category: "devops" },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "nexus-commerce",
    title: "Nexus Commerce",
    tagline: "Enterprise headless commerce platform",
    description:
      "A high-throughput B2B commerce engine with real-time inventory, multi-tenant architecture, and sub-100ms checkout flows.",
    longDescription:
      "Nexus Commerce reimagines enterprise retail with a headless architecture built on Next.js and NestJS. The platform handles 50K+ concurrent sessions with edge-cached product catalogs, webhook-driven inventory sync, and a merchant dashboard with granular role-based access. I led the full stack implementation—from PostgreSQL schema design to Stripe Connect integrations.",
    role: "Lead Full Stack Developer",
    year: "2025",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    metrics: [
      { label: "Conversion lift", value: "+34%" },
      { label: "API latency", value: "<80ms" },
      { label: "Uptime", value: "99.97%" },
    ],
    gradient: "from-violet-950/80 via-indigo-900/40 to-charcoal-950",
    accent: "#8b5cf6",
    link: "#",
    github: "#",
  },
  {
    id: "2",
    slug: "flowsphere",
    title: "FlowSphere",
    tagline: "Collaborative workflow automation suite",
    description:
      "Visual pipeline builder for teams to orchestrate complex automations with drag-and-drop nodes and live execution tracing.",
    longDescription:
      "FlowSphere empowers operations teams to design, test, and deploy automation workflows without writing code. Built with a React flow canvas, Node.js execution engine, and Redis-backed job queues, the product processes 2M+ workflow runs monthly. I architected the plugin system and real-time collaboration layer using WebSockets.",
    role: "Full Stack Developer",
    year: "2024",
    tags: ["React", "Node.js", "Redis", "WebSockets"],
    metrics: [
      { label: "Workflows run", value: "2M+/mo" },
      { label: "Time saved", value: "12hrs/wk" },
      { label: "NPS score", value: "72" },
    ],
    gradient: "from-cyan-950/80 via-teal-900/30 to-charcoal-950",
    accent: "#22d3ee",
    link: "#",
    github: "#",
  },
  {
    id: "3",
    slug: "visionai-dashboard",
    title: "VisionAI Dashboard",
    tagline: "Real-time computer vision analytics",
    description:
      "Mission-control interface for ML inference pipelines with live camera feeds, anomaly detection alerts, and model performance metrics.",
    longDescription:
      "VisionAI Dashboard provides security and retail clients a unified command center for computer vision deployments. Python microservices handle inference; the Next.js frontend streams WebRTC feeds with TensorFlow.js overlays. I built the charting layer, alert routing system, and role-based tenant isolation.",
    role: "Full Stack Developer",
    year: "2024",
    tags: ["Next.js", "Python", "TensorFlow", "WebRTC"],
    metrics: [
      { label: "Cameras managed", value: "1,200+" },
      { label: "Detection accuracy", value: "96.4%" },
      { label: "Alert response", value: "<3s" },
    ],
    gradient: "from-emerald-950/80 via-green-900/30 to-charcoal-950",
    accent: "#34d399",
    link: "#",
    github: "#",
  },
  {
    id: "4",
    slug: "devlink",
    title: "DevLink",
    tagline: "Developer networking & portfolio hub",
    description:
      "A curated platform connecting engineers through project showcases, skill endorsements, and async pair-programming sessions.",
    longDescription:
      "DevLink bridges the gap between GitHub profiles and meaningful professional connections. Featuring algorithmic feed ranking, integrated Cal.com scheduling, and GraphQL subscriptions for live presence. I owned the social graph API, recommendation engine, and the entire responsive UI system.",
    role: "Lead Frontend Developer",
    year: "2023",
    tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    metrics: [
      { label: "Active developers", value: "18K+" },
      { label: "Connections made", value: "240K" },
      { label: "Session bookings", value: "8K/mo" },
    ],
    gradient: "from-blue-950/80 via-sky-900/30 to-charcoal-950",
    accent: "#38bdf8",
    link: "#",
    github: "#",
  },
  {
    id: "5",
    slug: "quantum-finance",
    title: "Quantum Finance",
    tagline: "Institutional portfolio analytics",
    description:
      "Bloomberg-grade dashboard for hedge funds with real-time risk modeling, options Greeks visualization, and regulatory reporting.",
    longDescription:
      "Quantum Finance delivers institutional investors a performant analytics suite with D3-powered visualizations and WebAssembly-accelerated calculations. Express APIs aggregate market data feeds; PostgreSQL TimescaleDB stores tick history. I implemented the portfolio stress-testing module and SEC-compliant export pipelines.",
    role: "Full Stack Developer",
    year: "2023",
    tags: ["React", "Express", "PostgreSQL", "D3.js"],
    metrics: [
      { label: "AUM tracked", value: "$4.2B" },
      { label: "Calc speed", value: "10x faster" },
      { label: "Report accuracy", value: "100%" },
    ],
    gradient: "from-amber-950/80 via-orange-900/25 to-charcoal-950",
    accent: "#fbbf24",
    link: "#",
    github: "#",
  },
  {
    id: "6",
    slug: "pulse-cms",
    title: "Pulse CMS",
    tagline: "Headless content platform for media teams",
    description:
      "Editorial-first CMS with block-based authoring, multi-locale publishing, and CDN-optimized asset delivery for global newsrooms.",
    longDescription:
      "Pulse CMS streamlines content operations for digital publishers. Built on Next.js with a NestJS API layer, it features collaborative drafting, version history, and preview environments. MongoDB stores flexible content schemas; CloudFront distributes assets globally. I designed the block editor and webhook-based publish pipeline.",
    role: "Full Stack Developer",
    year: "2022",
    tags: ["Next.js", "NestJS", "MongoDB", "AWS"],
    metrics: [
      { label: "Articles published", value: "500K+" },
      { label: "Publish time", value: "-60%" },
      { label: "CDN hit rate", value: "94%" },
    ],
    gradient: "from-rose-950/80 via-pink-900/25 to-charcoal-950",
    accent: "#fb7185",
    link: "#",
    github: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Full Stack Developer",
    company: "Vertex Labs",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Leading product engineering for enterprise SaaS clients, mentoring junior developers, and establishing frontend architecture standards.",
    highlights: [
      "Reduced core app bundle size by 42% through code splitting and RSC adoption",
      "Introduced CI/CD pipelines cutting deployment time from 45min to 8min",
      "Shipped 3 major product releases generating $2.1M ARR",
    ],
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Nebula Digital",
    period: "2021 — 2023",
    location: "Dhaka, Bangladesh",
    description:
      "Built and maintained client-facing web applications across fintech, e-commerce, and healthtech verticals.",
    highlights: [
      "Architected microservices migration serving 200K daily active users",
      "Implemented design system adopted across 6 product teams",
      "Achieved WCAG 2.1 AA compliance across all client deliverables",
    ],
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "Pixelcraft Studio",
    period: "2019 — 2021",
    location: "Dhaka, Bangladesh",
    description:
      "Crafted responsive, animation-rich marketing sites and SPAs for agency clients in creative industries.",
    highlights: [
      "Delivered 25+ client projects with 100% on-time delivery record",
      "Pioneered GSAP animation standards increasing engagement by 28%",
      "Built reusable component library reducing project kickoff time by 40%",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    step: "01",
    title: "Discovery",
    description:
      "Deep dive into goals, users, and constraints. I map technical requirements to business outcomes before writing a single line of code.",
  },
  {
    id: "2",
    step: "02",
    title: "Architecture",
    description:
      "System design with scalability in mind—database schemas, API contracts, and component hierarchies documented and validated.",
  },
  {
    id: "3",
    step: "03",
    title: "Development",
    description:
      "Iterative sprints with continuous integration. Clean, typed code with comprehensive testing and performance budgets enforced.",
  },
  {
    id: "4",
    step: "04",
    title: "Refinement",
    description:
      "Motion design, accessibility audits, and lighthouse optimization. Every interaction polished until it feels inevitable.",
  },
  {
    id: "5",
    step: "05",
    title: "Launch",
    description:
      "Zero-downtime deployments, monitoring setup, and knowledge transfer. I stay engaged post-launch to ensure long-term success.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Anas transformed our legacy platform into a modern, blazing-fast experience. His attention to detail and architectural thinking are exceptional.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Vertex Labs",
  },
  {
    id: "2",
    quote:
      "The Nexus Commerce project was delivered ahead of schedule with metrics that exceeded our targets. A rare combination of speed and quality.",
    author: "Marcus Webb",
    role: "Product Director",
    company: "RetailForge",
  },
  {
    id: "3",
    quote:
      "Working with Anas felt like having a senior engineer and designer in one. The FlowSphere UI is the best-in-class in our category.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "Automate.io",
  },
  {
    id: "4",
    quote:
      "His GSAP animations and performance optimizations took our marketing site from good to extraordinary. Conversion rates jumped 28%.",
    author: "James Okonkwo",
    role: "Head of Growth",
    company: "Pixelcraft Studio",
  },
  {
    id: "5",
    quote:
      "Anas built our entire VisionAI dashboard from scratch—complex real-time data, beautiful UX, and rock-solid reliability under load.",
    author: "Dr. Amy Nakamura",
    role: "VP Engineering",
    company: "Sightline AI",
  },
  {
    id: "6",
    quote:
      "Professional, communicative, and technically brilliant. He's our go-to engineer for any project requiring full stack excellence.",
    author: "David Park",
    role: "Founder",
    company: "Nebula Digital",
  },
];
