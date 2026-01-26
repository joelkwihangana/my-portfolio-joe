import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";

type SkillGroupProps = {
  title: string;
  description: string;
  skills: string[];
};

function SkillGroup({ title, description, skills }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Skills & tooling
          </h2>
          <p className="mt-3 text-slate-600">
            Backend-focused fullstack DevOps skills, built through real
            projects, production deployments, and hands-on troubleshooting.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SkillGroup
            title="Backend & APIs"
            description="Designing and building backend services that power real applications."
            skills={[
              "FastAPI",
              "Node.js",
              "Python",
              "REST APIs",
              "Backend architecture",
            ]}
          />

          <SkillGroup
            title="Infrastructure & DevOps"
            description="Running applications in production with reliability and clarity."
            skills={[
              "Linux",
              "VPS (Hostinger)",
              "Docker",
              "CI/CD",
              "Nginx",
              "Deployment workflows",
            ]}
          />

          <SkillGroup
            title="Databases & Data"
            description="Managing structured data with a focus on reliability and maintenance."
            skills={["MySQL", "Database schema design", "Backups & updates"]}
          />

          <SkillGroup
            title="Frontend (supporting)"
            description="Building clean, maintainable user interfaces when the product requires it."
            skills={["React", "TypeScript", "Tailwind CSS", "Responsive UI"]}
          />

          <SkillGroup
            title="Security & Operations mindset"
            description="Thinking beyond code to keep systems stable and secure."
            skills={[
              "Production debugging",
              "Operational awareness",
              "Basic security practices",
              "Monitoring mindset",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
