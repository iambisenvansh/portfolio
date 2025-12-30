import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="container section">
      <h2>Projects</h2>

      <div style={{ marginTop: "20px" }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}
