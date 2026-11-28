import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Navbar from "./navbar";
import LandingFooter from "./landing-footer";
import CompactFooter from "./compact-footer";

export default function SiteLayout() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <div aria-hidden="true" className="h-20 shrink-0" />
      <main className="flex-1">
        <Outlet />
      </main>
      {isLanding ? <LandingFooter /> : <CompactFooter />}
    </div>
  );
}
