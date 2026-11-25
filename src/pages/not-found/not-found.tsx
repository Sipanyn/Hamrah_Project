import { Link } from "react-router";
// import styles from './not-found.module.css';

const NotFound = (): React.ReactElement => {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>404</h1>
      <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "2rem" }}>
        Page not found
      </p>
      <Link
        to="/"
        style={{
          padding: "0.75rem 1.5rem",
          background: "#f59e0b",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "600",
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
