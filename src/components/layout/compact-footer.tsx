import { Link } from "react-router";
import BrandLogo from "../shared/brand-logo";
import { usePreferences } from "../../preferences/preferences-context";

const labels = {
  en: { copyright: "FOUR MINDS. ONE UNIVERSE.", home: "Home", team: "Team", projects: "Projects", journal: "Journal", about: "About" },
  fa: { copyright: "چهار ذهن، یک جهان.", home: "خانه", team: "تیم", projects: "پروژه‌ها", journal: "یادداشت‌ها", about: "درباره‌ی ما" },
};

function SocialLinks() {
  return (
    <div aria-label="Social links" className="flex items-center gap-4 text-[var(--text-secondary)]">
      <a href="https://github.com" aria-label="GitHub" className="transition hover:text-[var(--text)]"><svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.23-5.09 5.51.4.35.75 1.03.75 2.08V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" /></svg></a>
      <a href="https://x.com" aria-label="X" className="transition hover:text-[var(--text)]"><svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.9 5.8 22H2.7l7.3-8.4L2.2 2h6.5l4.4 6.5L18.9 2Zm-1.1 18h1.7L7.7 3.9H5.9L17.8 20Z" /></svg></a>
      <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-[var(--text)]"><svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" /></svg></a>
      <a href="https://youtube.com" aria-label="YouTube" className="transition hover:text-[var(--text)]"><svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.56 12 3.56 12 3.56s-7.55 0-9.4.52A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.52 9.4.52 9.4.52s7.55 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.55 15.56V8.44L15.82 12l-6.27 3.56Z" /></svg></a>
    </div>
  );
}

export default function CompactFooter() {
  const { locale, direction } = usePreferences();
  const t = labels[locale];
  return (
    <footer dir={direction} className="border-t border-[var(--border)] bg-[var(--bg)] px-5 py-6 text-[var(--text)] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1720px] flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <div className="flex min-w-[210px] flex-col gap-2">
          <BrandLogo />
          <span className="text-[10px] text-[var(--text-muted)]">© 2026 NOVA. {t.copyright}</span>
        </div>
        <nav aria-label={locale === "fa" ? "ناوبری پابرگ" : "Footer navigation"} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--text-secondary)]">
          <Link to="/" className="no-underline hover:text-[var(--text)]">{t.home}</Link>
          <Link to="/team" className="no-underline hover:text-[var(--text)]">{t.team}</Link>
          <Link to="/projects" className="no-underline hover:text-[var(--text)]">{t.projects}</Link>
          <Link to="/blog" className="no-underline hover:text-[var(--text)]">{t.journal}</Link>
          <Link to="/#about" className="no-underline hover:text-[var(--text)]">{t.about}</Link>
        </nav>
        <SocialLinks />
      </div>
    </footer>
  );
}
