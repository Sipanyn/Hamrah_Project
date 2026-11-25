import { BrowserRouter, Routes, Route } from "react-router";

// Import your actual page components
import Home from "./pages/home/home";
import TeamMembers from "./pages/team-members/team-members";
import MemberResume from "./pages/member-resume/member-resume";
import ProjectsList from "./pages/projects-list/projects-list";
import ProjectDetails from "./pages/project-details/project-details";
import BlogPosts from "./pages/blog-posts/blog-posts";
import BlogPostDetails from "./pages/blog-post-details/blog-post-details";
import NotFound from "./pages/not-found/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Static */}
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/blog" element={<BlogPosts />} />

        {/* Dynamic */}
        <Route path="/team/:slug" element={<MemberResume />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/blog/:slug" element={<BlogPostDetails />} />

        {/* Fallback (must be last) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
