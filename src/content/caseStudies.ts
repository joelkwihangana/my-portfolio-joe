import earthlinkGroupImg from "../assets/images/earthlinkgroup.png";
import earthlinkStudyImg from "../assets/images/earthlinkstudy.png";
import devopsProofImg from "../assets/images/devops-proof.png";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;

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
    subtitle: "Corporate site built for credibility, speed, and conversion.",
    role: "Backend (FastAPI) + deployment on Hostinger VPS",
    problem:
      "Needed a professional web presence that builds trust fast and communicates services clearly.",
    solution:
      "Built FastAPI backend services and deployed them on a Linux VPS, then delivered a clean frontend experience for trust and conversion.",
    impact: [
      "Fast load experience",
      "Clear service narrative",
      "Mobile-first layout",
    ],
    ops: [
      "Deployed FastAPI on Hostinger VPS (Linux)",
      "Managed production updates and troubleshooting",
      "Handled reverse proxy setup (Nginx) and release flow",
    ],
    stack: [
      "FastAPI",
      "Python",
      "Linux",
      "Nginx",
      "VPS",
      "Deployment",
      "React",
      "Tailwind",
    ],
    image: {
      src: earthlinkGroupImg,
      alt: "EarthLink Group website screenshot",
    },
    links: {
      live: "https://earthlinkgroup.com/",
    },
  },
  {
    slug: "earthlink-study",
    title: "EarthLink Study",
    subtitle: "Education platform focused on clarity and user experience.",
    role: "Backend (Node.js + MySQL) + deployment on Hostinger VPS",
    problem:
      "Needed a platform to publish learning content and support students with a smooth experience.",
    solution:
      "Implemented backend services with Node.js and MySQL, deployed to a Linux VPS, and integrated the frontend to deliver a smooth learning experience.",

    impact: [
      "Responsive design",
      "Clear content layout",
      "Deployed and maintained",
    ],
    ops: [
      "Provisioned and maintained app + database on Hostinger VPS",
      "Managed MySQL and application updates",
      "Production troubleshooting and stability improvements",
    ],
    stack: [
      "Node.js",
      "MySQL",
      "Linux",
      "VPS",
      "Deployment",
      "React",
      "Tailwind",
    ],
    image: {
      src: earthlinkStudyImg,
      alt: "EarthLink Study website screenshot",
    },
    links: {
      live: "https://earthlinkstudy.com/",
    },
  },
  {
    slug: "devops-proof",
    title: "DevOps Proof Projects",
    subtitle: "Automation, CI/CD, and hands-on engineering proof.",
    role: "Owner",
    problem:
      "Needed practical proof of DevOps skills beyond certificates and buzzwords.",
    solution:
      "Created small, focused repos showing automation scripts, container workflows, and deployment practices with clear documentation.",
    impact: [
      "Repeatable workflows",
      "Documented learn-by-doing",
      "Real engineering habits",
    ],
    ops: [
      "markdowns + setup guides",
      "Repeatable automation scripts",
      "CI/CD experiments and notes",
    ],
    stack: ["Linux", "Bash", "Python", "Docker", "CI/CD"],
    image: {
      src: devopsProofImg,
      alt: "DevOps proof projects thumbnail",
    },
    links: {
      github: "https://github.com/joelkwihangana",
    },
  },
];
