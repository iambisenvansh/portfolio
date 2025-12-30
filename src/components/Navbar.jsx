import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "16px 0", borderBottom: "1px solid #e5e7eb" }}>
      <div className="container" style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/profiles">Profiles</Link>
      </div>
    </nav>
  );
}
