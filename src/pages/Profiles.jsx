import { profiles } from "../data/profiles";

export default function Profiles() {
  return (
    <div className="container section">
      <h2>Coding & Professional Profiles</h2>

      <ul style={{ marginTop: "20px" }}>
        {profiles.map((p, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>
            <a href={p.url} target="_blank">{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
