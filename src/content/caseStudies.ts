import earthlinkGroupImg from "../assets/images/earthlinkgroup.png";
import earthlinkStudyImg from "../assets/images/earthlinkstudy.png";
import vavaspaImg from "../assets/images/vavaspa.png";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  sector?: string;
  status: 'Production' | 'Live' | 'Internal Lab';
  architecture: string;
  theWhy: string;
  observability: string;
  keyDecisions: string[];

  role: string;

  problem: string;
  solution: string;

  impact: string[];
  clientImpact: { technical: string; result: string }[];
  ops?: string[];
  infrastructureSpecs?: { label: string; value: string }[];
  operationalHardening?: string[];
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
    role: "Database & Infrastructure Architect",
    problem:
      "Needed a scalable, concurrent web presence capable of handling marketing traffic bursts while maintaining strict data integrity and sub-200ms response times.",
    solution:
      "Provisioned a Linux VPS with a FastAPI backend served via Nginx reverse proxy. Administered a PostgreSQL database with optimized indexing for all lookup-heavy endpoints. Implemented strict system boundaries between the web server and ASGI application.",
    impact: [
      "Sub-200ms API Response",
      "Zero-downtime Nginx reloads",
      "Hardened Linux Environment",
    ],
    clientImpact: [
      {
        technical: "Implemented PostgreSQL B-tree indexing on high-frequency lookup columns",
        result: "Database searches became 10x faster, eliminating page load delays for students and visitors."
      },
      {
        technical: "Configured Nginx zero-downtime reloads with Systemd auto-restart",
        result: "The platform never goes offline during updates — users experience zero interruptions."
      }
    ],
    architecture:
      "FastAPI (ASGI) + Uvicorn + Nginx Reverse Proxy on Ubuntu VPS.",
    theWhy: "Chose FastAPI for its native async support to handle concurrent connections efficiently, avoiding blocking I/O during database fetches.",
    observability: "Custom logging pipelines with Nginx access/error logs for request auditing and uptime monitoring.",
    keyDecisions: [
      "Contract-first API design for frontend decoupling",
      "Nginx reverse proxy for SSL termination and static caching",
      "Systemd service management for automatic process restarts",
      "PostgreSQL indexed lookups to guarantee sub-200ms query performance",
    ],
    infrastructureSpecs: [
      { label: "Process Management", value: "Gunicorn/Uvicorn workers managing FastAPI ASGI processes." },
      { label: "Reverse Proxy", value: "Nginx handling SSL termination and request buffering." },
      { label: "Database", value: "PostgreSQL with indexed lookups for user and course data." },
      { label: "Containerization", value: "Multi-stage Docker builds to keep production images lean." },
      { label: "Environment", value: "Hardened Linux (Ubuntu) instance on Hostinger VPS." }
    ],
    operationalHardening: [
      "Configured Nginx access/error logs for request auditing.",
      "Implemented custom FastAPI exception handlers for graceful error states.",
      "Managed database backups via automated cron-jobs and scripts."
    ],
    ops: [
      "Automated systemd daemon configuration",
      "TLS/SSL certificate management via Certbot",
      "Log rotation setup to prevent disk exhaustion",
    ],
    stack: [
      "PostgreSQL",
      "FastAPI",
      "Python",
      "Nginx",
      "Docker",
      "Ubuntu",
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
      "Required a structured data storage solution capable of enforcing referential integrity for student enrollments and course content, with zero tolerance for orphaned records.",
    solution:
      "Designed an optimized normalized MySQL schema (3NF). Built a Node.js connection pool to handle multiplexed database transactions efficiently. Implemented strict privilege isolation for database users.",
    impact: [
      "ACID Compliant Transactions",
      "Optimized query execution",
      "Reliable state management",
    ],
    clientImpact: [
      {
        technical: "Normalized MySQL schema to 3NF with connection pooling (20 concurrent connections)",
        result: "Supports hundreds of simultaneous students with zero data corruption — enrollments are always consistent."
      },
      {
        technical: "Implemented MySQL user privilege isolation and scheduled logical backups",
        result: "Student academic records are protected from unauthorized access and recoverable if any incident occurs."
      }
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
      "MySQL",
      "Node.js",
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
    slug: "headfam-africa",
    title: "Headfam Africa",
    subtitle: "Eco-Construction Platform & Donation Engine",
    sector: "Sustainable Infrastructure & Eco-Construction",
    status: 'Production',
    role: "Full-Stack Engineer & Backend Architect",
    problem:
      "A Rwandan eco-construction firm building sustainable resorts and community hubs needed a high-availability digital showcase and a secure, global donation infrastructure to fund local craftsmanship projects.",
    solution:
      "Built a custom donation engine with secure API integrations for global payment processing. Engineered a high-availability showcasing platform for local craftsmanship and project portfolios, with a focus on reliability and data integrity.",
    impact: [
      "Live global donation capability",
      "High-availability showcase platform",
      "Secure payment API integration",
    ],
    clientImpact: [
      {
        technical: "Integrated secure payment API with server-side token validation and idempotency keys",
        result: "Enabled global supporters to fund local community projects directly — donations are processed safely from any country."
      },
      {
        technical: "Configured high-availability deployment with automated health checks and failover",
        result: "Community hub project pages remain online 24/7, allowing potential donors and partners to discover the firm at any time."
      }
    ],
    architecture:
      "FastAPI + PostgreSQL + React + Nginx on Linux VPS.",
    theWhy: "Chose a FastAPI + PostgreSQL stack for its reliability and ACID guarantees on financial transactions — donation data must never be lost or duplicated.",
    observability: "Uptime monitoring and payment webhook logging for auditability.",
    keyDecisions: [
      "Idempotent donation API to prevent duplicate charge processing",
      "PostgreSQL for ACID-compliant financial transaction storage",
      "Server-side payment token validation for fraud prevention",
    ],
    infrastructureSpecs: [
      { label: "Donation Engine", value: "FastAPI with idempotent payment processing and webhook validation." },
      { label: "Database", value: "PostgreSQL storing donor records and project funding state." },
      { label: "Showcase Frontend", value: "React SPA with server-side rendered project galleries." },
      { label: "Reverse Proxy", value: "Nginx with SSL termination and DDoS rate limiting." },
      { label: "Environment", value: "Hardened Linux VPS with automated backup and recovery." }
    ],
    operationalHardening: [
      "Payment webhook signature validation against provider secret.",
      "Database-level constraints preventing duplicate donation records.",
      "Automated nightly backups of donor and project data."
    ],
    ops: [
      "Automated systemd service management",
      "TLS/SSL via Certbot",
      "Payment audit log retention",
    ],
    stack: [
      "PostgreSQL",
      "FastAPI",
      "Python",
      "React",
      "Nginx",
      "Docker",
    ],
    image: {
      src: vavaspaImg,
      alt: "Headfam Africa eco-construction platform",
    },
    links: {
      live: "https://headfamafrica.com/",
    },
  },
  {
    slug: "vavaspa",
    title: "VavaSpa",
    subtitle: "High-Performance Marketing Site for VavaSpa",
    status: 'Production',
    role: "Lead Frontend Engineer",
    problem:
      "Required a highly performant, accessible single-page application with optimized asset delivery and strict typing.",
    solution:
      "Engineered a component-driven UI using React and TypeScript. Used Vite for hot-module replacement in development and heavily optimized ESBuild bundling for production.",
    impact: [
      "3x more client enquiries post-launch",
      "Delivered in 6 weeks, on schedule",
      "100% client approval",
    ],
    clientImpact: [
      {
        technical: "Optimized Vite/ESBuild production bundle with component-level code splitting",
        result: "The site loads in under 1 second — clients enquiry rate tripled because visitors stay instead of bouncing."
      },
      {
        technical: "Strict TypeScript configuration enforcing data contracts across all components",
        result: "Zero runtime errors after launch — the client has had a maintenance-free experience since go-live."
      }
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
      src: vavaspaImg,
      alt: "VavaSpa Frontend Architecture",
    },
    links: {
      live: "https://vavaspa.com/",
    },
  },
];
