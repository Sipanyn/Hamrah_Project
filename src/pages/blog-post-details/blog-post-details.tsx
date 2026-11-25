import { useParams, Link } from "react-router";
// import styles from './blog-post-details.module.css';

const BlogPostDetails = (): React.ReactElement => {
  const { slug } = useParams();

  const posts: Record<
    string,
    { title: string; date: string; content: string }
  > = {
    "hello-world": {
      title: "Hello World",
      date: "Nov 20, 2026",
      content:
        "Welcome to our blog! This is our first post where we share thoughts on design, development, and creativity.",
    },
    "react-router-guide": {
      title: "React Router v7 Guide",
      date: "Nov 18, 2026",
      content:
        "React Router v7 is the LTS release... In this guide we cover how to set up routes, dynamic params, and navigation.",
    },
    "rtl-layout-tips": {
      title: "RTL Layout Tips",
      date: "Nov 15, 2026",
      content:
        "Building right-to-left interfaces requires attention to direction, text alignment, and mirrored layouts.",
    },
  };

  const post = posts[slug ?? ""];

  if (!post) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <Link to="/blog" style={{ color: "#f59e0b", textDecoration: "none" }}>
        &larr; Back to Blog
      </Link>
      <h1 style={{ fontSize: "2.5rem", margin: "1.5rem 0 0.5rem" }}>
        {post.title}
      </h1>
      <p style={{ color: "#999", fontSize: "0.9rem", marginBottom: "2rem" }}>
        {post.date}
      </p>
      <div style={{ color: "#333", lineHeight: "1.8", fontSize: "1.1rem" }}>
        <p>{post.content}</p>
        <p>
          This is a detailed article page. You can add rich content, images, and
          more here.
        </p>
      </div>
      {slug && (
        <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#999" }}>
          Slug: {slug}
        </p>
      )}
    </div>
  );
};

export default BlogPostDetails;
