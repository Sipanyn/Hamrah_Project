
import { createBrowserRouter } from "react-router";

import Home from "./pages/home/home";
import TeamMembers from "./pages/team-members/team-members";
import MemberResume from "./pages/member-resume/member-resume";
import ProjectsList from "./pages/projects-list/projects-list";
import ProjectDetails from "./pages/project-details/project-details";
import BlogPosts from "./pages/blog-posts/blog-posts";
import BlogPostDetails from "./pages/blog-post-details/blog-post-details";
import NotFound from "./pages/not-found/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <TeamMembers />,
  },
  {
    path: "/team/:slug",
    element: <MemberResume />,
  },
  {
    path: "/projects",
    element: <ProjectsList />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },
  {
    path: "/blog",
    element: <BlogPosts />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPostDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
