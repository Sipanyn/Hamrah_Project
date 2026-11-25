import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
} from "react-router";

// Placeholder page components
const Home = () => <h1>Home</h1>;
const TeamMembers = () => <h1>Team Members</h1>;
const MemberResume = () => {
  const { slug } = useParams();
  return <h1>Member resume: {slug}</h1>;
};
const ProjectsList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  return <h1>Projects list (search: {search})</h1>;
};
const ProjectDetails = () => {
  const { id } = useParams();
  return <h1>Project details: {id}</h1>;
};
const BlogPosts = () => <h1>Blog Posts</h1>;
const BlogPostDetails = () => {
  const { slug } = useParams();
  return <h1>Blog post: {slug}</h1>;
};
const NotFound = () => <h1>404 Not Found</h1>;

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
