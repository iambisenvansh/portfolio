import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <div className="container section">
      <h2>Achievements</h2>

      {achievements.map((a, i) => (
        <div key={i} className="card">
          <h3>{a.title}</h3>
          <p style={{ marginTop: "8px" }}>{a.description}</p>
        </div>
      ))}
    </div>
  );
}
