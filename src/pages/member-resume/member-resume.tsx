import { Link, useParams } from "react-router";
import { getMessages } from "../../i18n/messages";
import { usePreferences } from "../../preferences/preferences-context";

const members = {
  "ali-ahmadi": {
    name: "Ali Ahmadi",
    role: { en: "UI/UX Designer", fa: "طراح رابط و تجربه‌ی کاربری" },
    bio: {
      en: "Passionate about creating intuitive user experiences with a focus on accessibility and visual hierarchy.",
      fa: "علاقه‌مند به طراحی تجربه‌های کاربری ساده و قابل‌دسترس، با تمرکز بر سلسله‌مراتب بصری.",
    },
  },
  "sara-hosseini": {
    name: "Sara Hosseini",
    role: { en: "Frontend Developer", fa: "توسعه‌دهنده‌ی فرانت‌اند" },
    bio: {
      en: "Specializes in React and TypeScript, building scalable web applications with clean code.",
      fa: "متخصص React و TypeScript؛ سازنده‌ی برنامه‌های وب مقیاس‌پذیر با کدی خوانا.",
    },
  },
  "reza-karimi": {
    name: "Reza Karimi",
    role: { en: "Product Manager", fa: "مدیر محصول" },
    bio: {
      en: "Bridges the gap between design, engineering, and business to deliver great products.",
      fa: "هماهنگ‌کننده‌ی طراحی، مهندسی و کسب‌وکار برای ساخت محصولاتی ارزشمند.",
    },
  },
} as const;

export default function MemberResume() {
  const { slug } = useParams();
  const { locale, direction } = usePreferences();
  const t = getMessages(locale);
  const member = members[slug as keyof typeof members];

  if (!member) {
    return <main dir={direction} className="min-h-screen px-6 pb-20 pt-40 text-center text-[var(--nova-fg)]"><h1 className="text-3xl">{t.memberNotFound}</h1><Link to="/team" className="mt-6 inline-block text-nova-orange">{t.backToTeam}</Link></main>;
  }

  return (
    <main dir={direction} className="min-h-screen px-6 pb-20 pt-36 text-[var(--nova-fg)] sm:px-10">
      <article className="mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-12">
        <Link to="/team" className="text-sm text-nova-orange no-underline">← {t.backToTeam}</Link>
        <div className="mt-8 grid gap-8 sm:grid-cols-[180px_1fr] sm:items-center">
          <div aria-hidden="true" className="grid aspect-square place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-5xl text-cosmic-blue">✦</div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[.2em] text-nova-orange">NOVA / CREW PROFILE</p>
            <h1 className="text-4xl font-light sm:text-6xl">{member.name}</h1>
            <p className="mt-3 font-medium text-cosmic-blue">{member.role[locale]}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">{member.bio[locale]}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
