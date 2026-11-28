import { Link, NavLink } from "react-router";
import { usePreferences } from "../../preferences/preferences-context";
import { getMessages } from "../../i18n/messages";

function ThemeIcon({ theme }: { theme: "dark" | "light" }) {
  return theme === "dark" ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[17px]">
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[17px]">
      <path d="M20.2 15.1A8.7 8.7 0 0 1 8.9 3.8a8.8 8.8 0 1 0 11.3 11.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m16.5 3 .4 1.3 1.3.4-1.3.4-.4 1.3-.4-1.3-1.3-.4 1.3-.4.4-1.3Z" fill="currentColor" />
    </svg>
  );
}

export default function SiteHeader() {
  const { locale, theme, toggleLocale, toggleTheme } = usePreferences();
  const labels = getMessages(locale);
  const links = [
    { to: "/", label: labels.navHome, end: true },
    { to: "/team", label: labels.navTeam },
    { to: "/projects", label: labels.navProjects },
    { to: "/blog", label: labels.navJournal },
    { to: "/#contact", label: labels.navContact },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 pt-5 sm:px-8 sm:pt-7">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 rounded-full border border-white/[0.11] bg-[#090d14]/65 px-5 py-3 shadow-[0_16px_60px_rgba(0,0,0,.2)] backdrop-blur-xl sm:px-7 [html[data-theme=light]_&]:border-slate-300/80 [html[data-theme=light]_&]:bg-white/75">
        <Link to="/" aria-label={labels.navHome + " · NOVA"} className="group flex shrink-0 items-center gap-2.5 text-white no-underline light:text-slate-950">
          <span className="relative grid size-8 place-items-center rounded-full border border-orange-300/40 text-[11px] font-semibold tracking-[.18em] text-orange-200 transition group-hover:border-orange-200 group-hover:shadow-[0_0_22px_rgba(251,146,60,.22)]">N</span>
          <span className="nova-wordmark text-[13px]">NOVA</span>
        </Link>

        <nav aria-label={locale === "fa" ? "ناوبری اصلی" : "Main navigation"} className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `relative py-2 text-[12px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:bg-orange-300 after:transition-transform ${isActive ? "text-white after:scale-x-100 light:text-slate-900" : "text-slate-400 after:scale-x-0 hover:text-white hover:after:scale-x-100 light:text-slate-600 light:hover:text-slate-950"}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button onClick={toggleLocale} className="latin-metadata rounded-full px-2 py-2 text-[11px] text-slate-300 transition hover:text-white light:text-slate-700 light:hover:text-slate-950" aria-label={locale === "en" ? labels.switchToPersian : labels.switchToEnglish}>
            EN / FA
          </button>
          <span className="h-4 w-px bg-white/15 light:bg-slate-300" aria-hidden="true" />
          <button onClick={toggleTheme} aria-label={theme === "dark" ? labels.switchToLight : labels.switchToDark} title={theme === "dark" ? labels.switchToLight : labels.switchToDark} className="grid size-9 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white light:border-slate-300 light:text-slate-700 light:hover:border-slate-400 light:hover:text-slate-950">
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </div>
      <nav aria-label={locale === "fa" ? "ناوبری اصلی" : "Main navigation"} className="mx-auto mt-2 flex max-w-[1440px] items-center justify-center gap-5 overflow-x-auto rounded-full border border-white/[0.08] bg-[#090d14]/55 px-4 py-2 backdrop-blur-xl md:hidden [html[data-theme=light]_&]:border-slate-300/70 [html[data-theme=light]_&]:bg-white/75">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => `shrink-0 text-[10px] transition-colors ${isActive ? "text-orange-200" : "text-slate-400 hover:text-white [html[data-theme=light]_&]:text-slate-600"}`}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
