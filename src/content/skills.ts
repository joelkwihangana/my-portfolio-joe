export type SkillCategory = {
  name: string;
  items: { name: string; status: 'Mastered' | 'Working Knowledge' | 'Learning' }[];
};

export const skillsGrid: SkillCategory[] = [
  {
    name: "Infrastructure & Cloud",
    items: [
      { name: "Linux / Ubuntu", status: "Mastered" },
      { name: "Nginx", status: "Mastered" },
      { name: "Docker", status: "Working Knowledge" },
      { name: "AWS (EC2, S3, IAM, VPC)", status: "Working Knowledge" },
      { name: "Kubernetes", status: "Learning" },
      { name: "Terraform", status: "Learning" },
    ],
  },
  {
    name: "Backend & Data",
    items: [
      { name: "Node.js (Express)", status: "Mastered" },
      { name: "FastAPI (Python)", status: "Mastered" },
      { name: "PostgreSQL / MySQL", status: "Mastered" },
      { name: "Redis", status: "Working Knowledge" },
      { name: "MongoDB", status: "Working Knowledge" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React / TypeScript", status: "Mastered" },
      { name: "Vite", status: "Mastered" },
      { name: "TailwindCSS", status: "Working Knowledge" },
    ],
  },
  {
    name: "DevOps & Automation",
    items: [
      { name: "Bash / Shell Scripting", status: "Mastered" },
      { name: "GitHub Actions (CI/CD)", status: "Working Knowledge" },
      { name: "Prometheus / Grafana", status: "Working Knowledge" },
      { name: "Ansible", status: "Learning" },
    ],
  },
  {
    name: "Security & Observability",
    items: [
      { name: "Carbon Black EDR", status: "Mastered" },
      { name: "Carbon Black Cloud", status: "Mastered" },
      { name: "App Control", status: "Working Knowledge" },
      { name: "CASB", status: "Working Knowledge" },
      { name: "Log Analysis", status: "Mastered" },
    ],
  },
];
