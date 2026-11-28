import { Link, useParams } from "react-router";
import { getMessages } from "../../i18n/messages";
import { usePreferences } from "../../preferences/preferences-context";

const posts = {
  "hello-world": {
    title: { en: "Hello World", fa: "سلام دنیا" },
    date: { en: "Nov 20, 2026", fa: "۲۹ آبان ۱۴۰۵" },
    content: { en: "Welcome to our journal! This is our first post where we share thoughts on design, development, and creativity.", fa: "به دفتر یادداشت ما خوش آمدید! این نخستین نوشته‌ی ما درباره‌ی طراحی، توسعه و خلاقیت است." },
  },
  "react-router-guide": {
    title: { en: "React Router v7 Guide", fa: "راهنمای React Router نسخه‌ی ۷" },
    date: { en: "Nov 18, 2026", fa: "۲۷ آبان ۱۴۰۵" },
    content: { en: "React Router v7 is the LTS release. In this guide we cover how to set up routes, dynamic params, and navigation.", fa: "React Router نسخه‌ی ۷ یک انتشار بلندمدت است. در این راهنما ساخت مسیرها، پارامترهای پویا و ناوبری را مرور می‌کنیم." },
  },
  "rtl-layout-tips": {
    title: { en: "RTL Layout Tips", fa: "نکته‌هایی برای چیدمان راست‌به‌چپ" },
    date: { en: "Nov 15, 2026", fa: "۲۴ آبان ۱۴۰۵" },
    content: { en: "Building right-to-left interfaces requires attention to direction, text alignment, and mirrored layouts.", fa: "ساخت رابط راست‌به‌چپ به توجه به جهت متن، تراز نوشته‌ها و آینه‌ای‌شدن چیدمان نیاز دارد." },
  },
} as const;

export default function BlogPostDetails() {
  const { slug } = useParams();
  const { locale, direction } = usePreferences();
  const t = getMessages(locale);
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return <main dir={direction} className="min-h-screen px-6 pb-20 pt-40 text-center text-[var(--text)]"><h1 className="text-3xl">{t.postNotFound}</h1><Link to="/blog" className="mt-6 inline-block text-nova-orange">{t.backToJournal}</Link></main>;
  }

  return (
    <main dir={direction} className="min-h-screen px-6 pb-20 pt-36 text-[var(--text)] sm:px-10">
      <article className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-12">
        <Link to="/blog" className="text-sm text-nova-orange no-underline">← {t.backToJournal}</Link>
        <p className="mt-9 text-xs text-[var(--text-muted)]">{post.date[locale]}</p>
        <h1 className="mt-3 text-4xl font-light sm:text-6xl">{post.title[locale]}</h1>
        <div className="mt-7 text-base leading-8 text-[var(--text-secondary)]"><p>{post.content[locale]}</p></div>
      </article>
    </main>
  );
}
