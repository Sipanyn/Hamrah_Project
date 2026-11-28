import { Link } from "react-router";

export default function BrandLogo() {
  return (
    <Link to="/" aria-label="NOVA home" className="block h-5 w-[132px] shrink-0 overflow-hidden text-[var(--text)] no-underline">
      <img
        src="/images/Nova-logo-dark.png"
        alt="NOVA"
        className="block h-5 w-full object-contain dark:hidden"
      />
      <img
        src="/images/Nova-logo-light.png"
        alt="NOVA"
        className="hidden h-5 w-full object-contain dark:block"
      />
    </Link>
  );
}
