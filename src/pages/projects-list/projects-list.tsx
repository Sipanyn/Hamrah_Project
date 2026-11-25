import { Link, useSearchParams } from "react-router";
// import styles from './projects-list.module.css';

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
  },
  {
    id: 2,
    title: "Office Workspace",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
  },
  {
    id: 3,
    title: "Cafe Interior",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
  },
  {
    id: 4,
    title: "Bedroom Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400",
  },
];

const ProjectsList = (): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const filter = searchParams.get("filter") ?? "";

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (!filter || p.category.toLowerCase() === filter.toLowerCase()),
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Projects</h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search projects..."
          defaultValue={search}
          style={{ padding: "0.5rem", flex: 1, minWidth: "200px" }}
        />
        <select defaultValue={filter} style={{ padding: "0.5rem" }}>
          <option value="">All Categories</option>
          <option value="Interior">Interior</option>
          <option value="Office">Office</option>
          <option value="Commercial">Commercial</option>
          <option value="Residential">Residential</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0 0 0.25rem 0" }}>{project.title}</h3>
              <p style={{ color: "#666", fontSize: "0.9rem", margin: 0 }}>
                {project.category}
              </p>
            </div>
            <Link
              to={`/projects/${project.id}`}
              style={{
                display: "block",
                padding: "0.75rem",
                background: "#f59e0b",
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#666", marginTop: "2rem" }}>
          No projects found.
        </p>
      )}
    </div>
  );
};

export default ProjectsList;
