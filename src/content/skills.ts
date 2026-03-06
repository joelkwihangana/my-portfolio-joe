export type SkillCategory = {
  name: string;
  items: { name: string; status: 'Mastered' | 'Working Knowledge' | 'Learning' }[];
};

export const skillsGrid: SkillCategory[] = [
  {
    name: "Orchestration & Infrastructure",
    items: [
      { name: "Linux/Ubuntu", status: "Mastered" },
      { name: "Docker", status: "Working Knowledge" },
      { name: "Kubernetes", status: "Learning" },
      { name: "Terraform", status: "Learning" },
    ],
  },
  {
    name: "Data Systems",
    items: [
      { name: "MySQL / PostgreSQL", status: "Mastered" },
      { name: "PostgreSQL (pgvector)", status: "Learning" },
      { name: "Redis", status: "Working Knowledge" },
      { name: "MongoDB", status: "Working Knowledge" },
      { name: "ClickHouse", status: "Learning" },
    ],
  },
  {
    name: "Pipelines & Automation",
    items: [
      { name: "Bash / Shell Scripting", status: "Mastered" },
      { name: "GitHub Actions (CI/CD)", status: "Working Knowledge" },
      { name: "Ansible", status: "Learning" },
      { name: "Kafka", status: "Learning" },
    ],
  },
  {
    name: "Web APIs & Architecture",
    items: [
      { name: "Node.js (Express)", status: "Mastered" },
      { name: "FastAPI (Python)", status: "Mastered" },
      { name: "React / TypeScript", status: "Mastered" },
      { name: "Nginx", status: "Mastered" },
    ],
  },
];
