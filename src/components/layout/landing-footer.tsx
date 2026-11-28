import { Link } from "react-router";
import BrandLogo from "../shared/brand-logo";
import { usePreferences } from "../../preferences/preferences-context";

const copy = {
  en: {
    heading: "Have an idea?",
    subheading: "Let’s make it shine.",
    contact: "Get in touch",
    home: "Home",
    team: "Team",
    projects: "Projects",
    journal: "Journal",
    about: "About",
    copyright: "FOUR MINDS. ONE UNIVERSE.",
  },
  fa: {
    heading: "ایده‌ای داری؟",
    subheading: "بیا با هم بهش نور بدیم.",
    contact: "با ما در تماس باش",
    home: "خانه",
    team: "تیم",
    projects: "پروژه‌ها",
    journal: "یادداشت‌ها",
    about: "درباره‌ی ما",
    copyright: "چهار ذهن، یک جهان.",
  },
};

function SocialGlyphs() {
  return (
    <div aria-hidden="true" className="flex items-center gap-4 text-[var(--text-secondary)]">
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.23-5.09 5.51.4.35.75 1.03.75 2.08V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" /></svg>
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.9 5.8 22H2.7l7.3-8.4L2.2 2h6.5l4.4 6.5L18.9 2Zm-1.1 18h1.7L7.7 3.9H5.9L17.8 20Z" /></svg>
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" /></svg>
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.56 12 3.56 12 3.56s-7.55 0-9.4.52A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.52 9.4.52 9.4.52s7.55 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.55 15.56V8.44L15.82 12l-6.27 3.56Z" /></svg>
    </div>
  );
}

export default function SiteFooter() {
  const { locale, direction } = usePreferences();
  const t = copy[locale];

  return (
    <footer dir={direction} className="text-[var(--text)]">
      <section id="contact" className="footer-horizon relative isolate overflow-hidden border-t border-[var(--border)] px-6 py-14 text-center sm:px-10 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(1px_1px_at_12%_52%,rgba(255,255,255,.7)_50%,transparent),radial-gradient(1px_1px_at_74%_32%,rgba(255,255,255,.6)_50%,transparent),radial-gradient(1px_1px_at_91%_68%,rgba(255,255,255,.55)_50%,transparent)]" />
        <div aria-hidden="true" className="footer-planet absolute -bottom-[15rem] left-1/2 -z-10 h-[22rem] w-[150%] -translate-x-1/2 rounded-[50%] border-t border-cosmic-blue/60" />
        <p className="text-xl font-medium text-[var(--text)] sm:text-2xl" dir={direction}>{t.heading}</p>
        <p className="mt-1 text-base text-[var(--text-secondary)] sm:text-lg" dir={direction}>{t.subheading}</p>
        <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-4 py-2 text-[10px] text-[var(--text)] no-underline transition hover:border-nova-orange hover:text-nova-orange sm:text-[11px]">
          {t.contact}<span aria-hidden="true">→</span>
        </a>
      </section>

      <div className="border-t border-[var(--border)] px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1720px] flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <div className="flex min-w-[190px] flex-col gap-2">
            <BrandLogo />
            <span className="text-[8px] text-[var(--text-muted)]">© 2026 NOVA. {t.copyright}</span>
          </div>
          <nav aria-label={locale === "fa" ? "ناوبری پابرگ" : "Footer navigation"} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-[var(--text-secondary)]">
            <Link to="/" className="no-underline hover:text-[var(--text)]">{t.home}</Link>
            <Link to="/team" className="no-underline hover:text-[var(--text)]">{t.team}</Link>
            <Link to="/projects" className="no-underline hover:text-[var(--text)]">{t.projects}</Link>
            <Link to="/blog" className="no-underline hover:text-[var(--text)]">{t.journal}</Link>
            <Link to="/#about" className="no-underline hover:text-[var(--text)]">{t.about}</Link>
          </nav>
          <div className="hidden sm:block"><SocialGlyphs /></div>
        </div>
      </div>
    </footer>
  );
}
