import { useParams, Link } from "react-router";
// import styles from './project-details.module.css';

const ProjectDetails = (): React.ReactElement => {
  const { id } = useParams();

  const projects: Record<
    string,
    { title: string; category: string; description: string }
  > = {
    "1": {
      title: "Modern Living Room",
      category: "Interior Design",
      description:
        "A spacious living room with natural light, wooden accents, and comfortable seating for relaxation.",
    },
    "2": {
      title: "Office Workspace",
      category: "Office Design",
      description:
        "An ergonomic office space designed for productivity with standing desks and collaborative zones.",
    },
    "3": {
      title: "Cafe Interior",
      category: "Commercial Design",
      description:
        "Cozy cafe interior with warm lighting, rustic tables, and inviting atmosphere.",
    },
    "4": {
      title: "Bedroom Retreat",
      category: "Residential Design",
      description:
        "Serene bedroom design with soft textures, neutral palette, and calming ambiance.",
    },
  };

  const project = projects[id ?? ""];

  if (!project) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Project not found</h1>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/projects" style={{ color: "var(--nova-orange)", textDecoration: "none" }}>
        &larr; Back to Projects
      </Link>
      <h1 style={{ fontSize: "2.5rem", margin: "1.5rem 0 0.5rem" }}>
        {project.title}
      </h1>
      <p style={{ color: "var(--nova-orange)", fontWeight: "600", marginBottom: "1rem" }}>
        {project.category}
      </p>
      <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", fontSize: "1.1rem" }}>
        {project.description}
      </p>
      {id && (
        <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Project ID: {id}
        </p>
      )}
    </div>
  );
};

export default ProjectDetails;
