import { Link } from "react-router";
// import styles from './home.module.css';

const Home = (): React.ReactElement => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to Nova
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto 2rem",
        }}
      >
        Discover amazing furniture and interior design pieces crafted with care.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/team"
          style={{
            padding: "0.75rem 1.5rem",
            background: "var(--nova-orange)",
            color: "var(--on-accent)",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
          }}
        >
          Meet the Team
        </Link>
        <Link
          to="/projects"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid var(--border)",
            color: "var(--text)",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
          }}
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;
