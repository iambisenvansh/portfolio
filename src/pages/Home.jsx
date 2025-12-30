import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <div className="container section">
      <img
        src={profile}
        alt="Profile"
        style={{
          width: "140px",
          borderRadius: "50%",
          marginBottom: "20px"
        }}
      />

      <h1>Vansh Bisen</h1>
      <h3 style={{ color: "#374151", marginTop: "8px" }}>
        Backend Engineer | Distributed APIs & AI Pipelines
      </h3>

      <p style={{ marginTop: "16px", maxWidth: "600px" }}>
        Backend-heavy full stack engineer focused on scalable APIs,
        async processing, security, and AI-powered systems.
      </p>
    </div>
  );
}
