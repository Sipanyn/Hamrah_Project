import { Link, useSearchParams } from "react-router";
// import styles from './team-members.module.css';

const members = [
  {
    id: 1,
    name: "Ali Ahmadi",
    slug: "ali-ahmadi",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
  },
  {
    id: 2,
    name: "Sara Hosseini",
    slug: "sara-hosseini",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
  },
  {
    id: 3,
    name: "Reza Karimi",
    slug: "reza-karimi",
    role: "Product Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza",
  },
];

const TeamMembers = (): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Team Members</h1>
      <input
        type="text"
        placeholder="Search members..."
        defaultValue={search}
        style={{
          padding: "0.5rem",
          width: "100%",
          maxWidth: "300px",
          marginBottom: "1.5rem",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((member) => (
          <div
            key={member.id}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={member.avatar}
              alt={member.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: "0.5rem",
              }}
            />
            <h3 style={{ margin: "0.25rem 0" }}>{member.name}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{member.role}</p>
            <Link
              to={`/team/${member.slug}`}
              style={{
                marginTop: "0.75rem",
                color: "var(--nova-orange)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              View Resume →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
