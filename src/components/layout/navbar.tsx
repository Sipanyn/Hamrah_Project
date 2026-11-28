import { useState } from "react";
import { Link, NavLink } from "react-router";
import BrandLogo from "../shared/brand-logo";
import { usePreferences } from "../../preferences/preferences-context";

const labels = {
  en: { home: "Home", team: "Team", projects: "Projects", journal: "Journal", contact: "Contact", light: "Switch to light mode", dark: "Switch to dark mode", menu: "Toggle navigation", english: "Switch to English", persian: "Switch to Persian" },
  fa: { home: "خانه", team: "تیم", projects: "پروژه‌ها", journal: "یادداشت‌ها", contact: "تماس", light: "رفتن به حالت روشن", dark: "رفتن به حالت تاریک", menu: "نمایش منو", english: "تغییر زبان به انگلیسی", persian: "تغییر زبان به فارسی" },
};

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
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

export default function Navbar() {
  const { locale, theme, direction, setLocale, toggleTheme } = usePreferences();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = labels[locale];
  const links = [
    { to: "/", label: t.home, end: true },
    { to: "/team", label: t.team },
    { to: "/projects", label: t.projects },
    { to: "/blog", label: t.journal },
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap py-2 text-[12px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:bg-nova-orange after:transition-transform ${isActive ? "text-[var(--text)] after:scale-x-100" : "text-[var(--text-secondary)] after:scale-x-0 hover:text-[var(--text)] hover:after:scale-x-100"}`;

  const navItems = (mobile = false) => (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={navLinkClass}
          onClick={() => mobile && setMobileOpen(false)}
        >
          {link.label}
        </NavLink>
      ))}
      <Link to="/#contact" onClick={() => mobile && setMobileOpen(false)} className="whitespace-nowrap py-2 text-[12px] text-[var(--text-secondary)] no-underline transition-colors hover:text-[var(--text)]">
        {t.contact}
      </Link>
    </>
  );

  return (
    <header dir={direction} className="nova-navbar fixed inset-x-3 top-3 z-50 mx-auto max-w-[1720px] rounded-full bg-[var(--bg)]/55 text-[var(--text)] shadow-lg shadow-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--bg)]/40 sm:inset-x-6 lg:inset-x-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 dark:opacity-20 light:opacity-10 [background-image:radial-gradient(1px_1px_at_8%_40%,rgba(255,255,255,.7)_50%,transparent),radial-gradient(1px_1px_at_42%_22%,rgba(255,255,255,.55)_50%,transparent),radial-gradient(1px_1px_at_82%_68%,rgba(255,255,255,.65)_50%,transparent)]" />
      <div className="relative mx-auto flex min-h-[64px] max-w-[1720px] items-center gap-4 px-5 sm:px-8 lg:gap-7 lg:px-10">
        <BrandLogo />
        <span aria-hidden="true" className="hidden h-px min-w-6 flex-1 bg-[var(--border)] md:block" />
        <nav aria-label={locale === "fa" ? "ناوبری اصلی" : "Main navigation"} className="hidden items-center gap-5 md:flex lg:gap-8">
          {navItems()}
        </nav>
        <span aria-hidden="true" className="hidden h-px min-w-6 flex-1 bg-[var(--border)] md:block" />

        <div className="ms-auto flex shrink-0 items-center gap-2 sm:gap-3 md:ms-0">
          <div aria-label={locale === "fa" ? "انتخاب زبان" : "Language selection"} className="flex items-center gap-0.5 text-[12px]">
            <button type="button" onClick={() => setLocale("en")} aria-label={t.english} aria-pressed={locale === "en"} className={`rounded-full px-1 py-2 transition-colors hover:text-[var(--text)] ${locale === "en" ? "text-[var(--text)]" : "text-[var(--text-secondary)]"}`}>EN</button>
            <span aria-hidden="true" className="text-[var(--text-muted)]">/</span>
            <button type="button" onClick={() => setLocale("fa")} aria-label={t.persian} aria-pressed={locale === "fa"} className={`rounded-full px-1 py-2 transition-colors hover:text-[var(--text)] ${locale === "fa" ? "text-[var(--text)]" : "text-[var(--text-secondary)]"}`}>FA</button>
          </div>
          <span aria-hidden="true" className="h-4 w-px bg-[var(--border)]" />
          <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? t.light : t.dark} title={theme === "dark" ? t.light : t.dark} className="grid size-8 place-items-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition hover:text-[var(--text)]">
            <ThemeIcon theme={theme} />
          </button>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={t.menu} aria-expanded={mobileOpen} className="grid size-8 place-items-center rounded-full border border-[var(--border)] text-[var(--text)] md:hidden">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4"><path d={mobileOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav aria-label={locale === "fa" ? "ناوبری اصلی" : "Main navigation"} className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-1 border-t border-[var(--border)] px-5 py-3 md:hidden">
          {navItems(true)}
        </nav>
      )}
    </header>
  );
}
