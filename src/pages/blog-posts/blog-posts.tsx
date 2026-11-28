import { Link } from "react-router";
// import styles from './blog-posts.module.css';

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt:
      "Welcome to our blog. This is our first post about design and creativity.",
    date: "Nov 20, 2026",
  },
  {
    slug: "react-router-guide",
    title: "React Router v7 Guide",
    excerpt:
      "A practical guide to setting up routing in React with the LTS version of React Router.",
    date: "Nov 18, 2026",
  },
  {
    slug: "rtl-layout-tips",
    title: "RTL Layout Tips",
    excerpt:
      "Best practices for building right-to-left interfaces for Persian and Arabic languages.",
    date: "Nov 15, 2026",
  },
];

const BlogPosts = (): React.ReactElement => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Blog Posts</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {posts.map((post) => (
          <div
            key={post.slug}
            style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}
          >
            <h2 style={{ margin: "0 0 0.5rem 0" }}>{post.title}</h2>
            <p style={{ color: "var(--text-secondary)", margin: "0 0 0.5rem 0" }}>
              {post.excerpt}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>
              {post.date}
            </p>
            <Link
              to={`/blog/${post.slug}`}
              style={{
                display: "inline-block",
                marginTop: "0.75rem",
                color: "var(--nova-orange)",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
