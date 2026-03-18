export type EngineeringLab = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  featured?: boolean;
};

export const engineeringLabs: EngineeringLab[] = [
  {
    id: "lab-01",
    title: "Lab 01: High-Availability Postgres Cluster with pgvector",
    description: "Configuring a replicated PostgreSQL database handling vector embeddings for semantic search workflows using Patroni and HAProxy. Validates the full IMS admin lifecycle: schema design, replication lag monitoring, and automated failover.",
    tags: ["PostgreSQL", "pgvector", "Patroni", "HAProxy", "Docker"],
    status: "Completed",
    featured: true,
    link: "https://github.com/joelkwihangana"
  },
  {
    id: "lab-02",
    title: "Lab 02: Declarative Infrastructure via Terraform",
    description: "Provisioning AWS VPCs, Subnets, and EC2 instances using Terraform with managed remote state in S3 and DynamoDB locking. Infrastructure as Code (IaC) eliminates manual configuration errors and makes environments reproducible.",
    tags: ["Terraform", "AWS", "IaC", "State Management"],
    status: "In Progress",
    link: "https://github.com/joelkwihangana"
  },
  {
    id: "lab-03",
    title: "Lab 03: Prometheus & Grafana Observability Stack",
    description: "Instrumenting a FastAPI backend with custom Prometheus metrics and visualizing service health and endpoint latency in Grafana. Targets 99.9% uptime visibility with alerting on SLO breaches.",
    tags: ["Prometheus", "Grafana", "FastAPI", "Observability", "SLO"],
    status: "Planned"
  }
];
