import earthlinkGroupImg from "../assets/images/earthlinkgroup.png";
import earthlinkStudyImg from "../assets/images/earthlinkstudy.png";
import devopsProofImg from "../assets/images/devops-proof.png";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  status: 'Production' | 'Live' | 'Internal Lab';
  architecture: string;
  theWhy: string;
  observability: string;
  keyDecisions: string[];

  role: string;

  problem: string;
  solution: string;

  impact: string[];
  ops?: string[];
  stack: string[];

  image: {
    src: string;
    alt: string;
  };

  links: {
    live?: string;
    github?: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "earthlink-group",
    title: "EarthLink Group",
    subtitle: "High-Availability Corporate Web Platform",
    status: 'Production',
    role: "Backend Architecture & Infrastructure Owner",
    problem:
      "Needed a scalable, concurrent web presence capable of handling marketing traffic bursts while strictly isolating runtime environments.",
    solution:
      "Provisioned a Linux VPS and orchestrated a FastAPI backend served via Nginx reverse proxy. Implemented strict system boundaries between the web server and the ASGI application.",
    impact: [
      "Sub-200ms API Response",
      "Zero-downtime Nginx reloads",
      "Hardened Linux Environment",
    ],
    architecture:
      "FastAPI (ASGI) + Uvicorn + Nginx Reverse Proxy on Ubuntu VPS.",
    theWhy: "Chose FastAPI for its native async support to handle concurrent connections efficiently, avoiding blocking I/O during database fetches.",
    observability: "Monitoring app health and Uptime via custom logging pipelines.",
    keyDecisions: [
      "Contract-first API design for frontend decoupling",
      "Nginx reverse proxy for SSL termination and static caching",
      "Systemd service management for automatic process restarts",
    ],
    ops: [
      "Automated systemd daemon configuration",
      "TLS/SSL certificate management via Certbot",
      "Log rotation setup to prevent disk exhaustion",
    ],
    stack: [
      "FastAPI",
      "Python",
      "Nginx",
      "Systemd",
      "React",
      "Tailwind",
    ],
    image: {
      src: earthlinkGroupImg,
      alt: "EarthLink Group infrastructure topology",
    },
    links: {
      live: "https://earthlinkgroup.com/",
    },
  },
  {
    slug: "earthlink-study",
    title: "EarthLink Study",
    subtitle: "Relational Data Platform for Education",
    status: 'Live',
    role: "Database Administrator & Backend Engineer",
    problem:
      "Required a structured data storage solution capable of enforcing referential integrity for student enrollments and course content.",
    solution:
      "Designed an optimized normalized MySQL schema. Built a Node.js connection pool to handle multiplexed database transactions efficiently.",
    impact: [
      "ACID Compliant Transactions",
      "Optimized query execution",
      "Reliable state management",
    ],
    architecture:
      "Node.js (Express) + MySQL (Connection Pooling) + React SPA.",
    theWhy: "Selected MySQL for strict schema enforcement and relational integrity, ensuring orphaned student records cannot exist.",
    observability: "Database slow-query logging and connection pool monitoring.",
    keyDecisions: [
      "Implemented connection pooling to prevent connection exhaustion",
      "Normalized database to 3NF to eliminate data anomalies",
      "Environment variable separation for production secrets",
    ],
    ops: [
      "MySQL user privilege isolation",
      "Scheduled logical database backups",
      "Process management via PM2",
    ],
    stack: [
      "Node.js",
      "MySQL",
      "PM2",
      "Linux",
      "React",
      "React Router",
    ],
    image: {
      src: earthlinkStudyImg,
      alt: "EarthLink Study schema design",
    },
    links: {
      live: "https://earthlinkstudy.com/",
    },
  },
  {
    slug: "vavaspa",
    title: "VavaSpa",
    subtitle: "Modern SPA with React & Vite Tooling",
    status: 'Production',
    role: "Lead Frontend Engineer",
    problem:
      "Required a highly performant, accessible single-page application with optimized asset delivery and strict typing.",
    solution:
      "Engineered a component-driven UI using React/TypeScript. Leveraged Vite for hot-module replacement in dev and heavily optimized ESBuild bundling for production.",
    impact: [
      "Type-safe compilation",
      "Optimized chunk splitting",
      "Lighthouse 90+ Performance",
    ],
    architecture:
      "React 19 + TypeScript + Vite + Tailwind 4 (CDN-less).",
    theWhy: "Selected Vite and TypeScript to enforce compile-time safety and eliminate runtime type errors before CI/CD pipelines trigger.",
    observability: "Frontend error boundary tracking and core web vitals.",
    keyDecisions: [
      "Strict TypeScript configuration to enforce data contracts",
      "Tailwind V4 utility strategy to minimize CSS bundle size",
      "Component-level code splitting",
    ],
    ops: [
      "Automated linting via ESLint",
      "Deterministic builds via package-lock",
      "Static asset optimization",
    ],
    stack: ["React", "TypeScript", "Vite", "TailwindCSS"],
    image: {
      src: devopsProofImg, // Temporary placeholder until specific asset exists
      alt: "VavaSpa Frontend Architecture",
    },
    links: {
      live: "https://vavaspa.com/",
    },
  },
];
