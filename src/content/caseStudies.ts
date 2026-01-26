export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  links: {
    live?: string;
    github?: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "earthlink-group",
    title: "EarthLink Group",
    subtitle: "Corporate site built for credibility, speed, and conversion.",
    problem:
      "Needed a professional web presence that builds trust fast and communicates services clearly.",
    solution:
      "Designed a clean UI, structured content for conversion, and deployed a reliable production build.",
    impact: [
      "Fast load experience",
      "Clear service narrative",
      "Mobile-first layout",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Deployment"],
    links: {
      live: "https://earthlinkgroup.com/",
      github: "https://github.com/joelkwihangana",
    },
  },
  {
    slug: "earthlink-study",
    title: "EarthLink Study",
    subtitle: "Education platform focused on clarity and user experience.",
    problem:
      "Needed a platform to publish learning content and support students with a smooth experience.",
    solution:
      "Built responsive UI and structured pages for readability, then deployed the platform.",
    impact: [
      "Responsive design",
      "Clear content layout",
      "Deployed and maintained",
    ],
    stack: ["React", "Tailwind", "Deployment"],
    links: {
      live: "https://earthlinkstudy.com/",
      github: "https://github.com/joelkwihangana",
    },
  },
  {
    slug: "devops-proof",
    title: "DevOps Proof Projects",
    subtitle: "Automation, CI/CD, and hands-on engineering proof.",
    problem:
      "Needed practical proof of DevOps skills beyond certificates and buzzwords.",
    solution:
      "Built small focused repos showing automation scripts, deployment workflows, and debugging habits.",
    impact: [
      "Repeatable workflows",
      "Documented learn-by-doing",
      "Real engineering habits",
    ],
    stack: ["Linux", "Bash", "Python", "Docker", "CI/CD"],
    links: {
      github: "https://github.com/joelkwihangana",
    },
  },
];
