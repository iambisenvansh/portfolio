export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>

      <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
        {project.description.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        {project.tech.map((t, i) => (
          <span key={i} className="badge">{t}</span>
        ))}
      </div>
    </div>
  );
}
