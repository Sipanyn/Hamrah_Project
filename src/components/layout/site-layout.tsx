import { Outlet } from "react-router";
import SiteHeader from "./site-header";

export default function SiteLayout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--nova-bg)] text-[var(--nova-fg)] transition-colors duration-300">
      <SiteHeader />
      <Outlet />
    </div>
  );
}
