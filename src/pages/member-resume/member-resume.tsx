import { useParams, Link } from "react-router";
// import styles from './member-resume.module.css';

const MemberResume = (): React.ReactElement => {
  const { slug } = useParams();

  const members: Record<string, { name: string; role: string; bio: string }> = {
    "ali-ahmadi": {
      name: "Ali Ahmadi",
      role: "UI/UX Designer",
      bio: "Passionate about creating intuitive user experiences with a focus on accessibility and visual hierarchy.",
    },
    "sara-hosseini": {
      name: "Sara Hosseini",
      role: "Frontend Developer",
      bio: "Specializes in React and TypeScript, building scalable web applications with clean code.",
    },
    "reza-karimi": {
      name: "Reza Karimi",
      role: "Product Manager",
      bio: "Bridges the gap between design, engineering, and business to deliver great products.",
    },
  };

  const member = members[slug ?? ""];

  if (!member) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Member not found</h1>
        <Link to="/team">Back to Team</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/team" style={{ color: "#f59e0b", textDecoration: "none" }}>
        &larr; Back to Team
      </Link>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          marginTop: "1.5rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            {member.name}
          </h1>
          <p
            style={{
              color: "#f59e0b",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            {member.role}
          </p>
          <p style={{ color: "#444", lineHeight: "1.6" }}>{member.bio}</p>
        </div>
      </div>
      {slug && (
        <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#999" }}>
          Slug: {slug}
        </p>
      )}
    </div>
  );
};

export default MemberResume;
