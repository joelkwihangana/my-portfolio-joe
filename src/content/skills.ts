export type SkillCategory = {
  name: string;
  tier?: 'primary' | 'secondary' | 'foundation';
  tooltip?: string;
  items: { name: string; status: 'Mastered' | 'Working Knowledge' | 'Learning'; tooltip?: string }[];
};

export const skillsGrid: SkillCategory[] = [
  {
    name: "Database & Data Systems",
    tier: 'primary',
    items: [
      { name: "PostgreSQL", status: "Mastered" },
      { name: "pgvector", status: "Mastered", tooltip: "Vector Database: stores AI embeddings for semantic/similarity search" },
      { name: "MySQL", status: "Mastered" },
      { name: "Redis", status: "Working Knowledge" },
      { name: "MongoDB", status: "Working Knowledge" },
    ],
  },
  {
    name: "Backend & API",
    tier: 'secondary',
    items: [
      { name: "FastAPI (Python)", status: "Mastered" },
      { name: "Python", status: "Mastered" },
      { name: "Node.js (Express)", status: "Mastered" },
    ],
  },
  {
    name: "Infrastructure & DevOps",
    tier: 'secondary',
    items: [
      { name: "Docker", status: "Working Knowledge" },
      { name: "Kubernetes", status: "Learning" },
      { name: "Terraform", status: "Learning", tooltip: "IaC: Infrastructure as Code — define servers and networks in version-controlled files" },
      { name: "Ansible", status: "Learning" },
      { name: "Linux / Ubuntu", status: "Mastered" },
      { name: "Nginx", status: "Mastered" },
      { name: "AWS (EC2, S3, IAM, VPC)", status: "Working Knowledge" },
    ],
  },
  {
    name: "Frontend",
    tier: 'secondary',
    items: [
      { name: "React / TypeScript", status: "Mastered" },
      { name: "Vite", status: "Mastered" },
      { name: "TailwindCSS", status: "Working Knowledge" },
    ],
  },
  {
    name: "Observability & CI/CD",
    tier: 'secondary',
    items: [
      { name: "Bash / Shell Scripting", status: "Mastered" },
      { name: "GitHub Actions (CI/CD)", status: "Working Knowledge" },
      { name: "Prometheus / Grafana", status: "Working Knowledge" },
    ],
  },
  {
    name: "Systems Reliability & Troubleshooting",
    tier: 'foundation',
    items: [
      { name: "Carbon Black EDR", status: "Mastered" },
      { name: "Carbon Black Cloud", status: "Mastered" },
      { name: "App Control", status: "Working Knowledge" },
      { name: "CASB", status: "Working Knowledge" },
      { name: "Log Analysis", status: "Mastered" },
    ],
  },
];
