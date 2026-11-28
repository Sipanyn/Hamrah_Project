import { Link } from "react-router";
import { getMessages } from "../../i18n/messages";
import { usePreferences } from "../../preferences/preferences-context";

const posts = [
  { slug: "hello-world", title: { en: "Hello World", fa: "سلام دنیا" }, excerpt: { en: "Welcome to our journal. We share thoughts on design, development, and creativity.", fa: "به دفتر یادداشت ما خوش آمدید؛ جایی برای فکرهایی درباره‌ی طراحی، توسعه و خلاقیت." }, date: { en: "Nov 20, 2026", fa: "۲۹ آبان ۱۴۰۵" } },
  { slug: "react-router-guide", title: { en: "React Router v7 Guide", fa: "راهنمای React Router نسخه‌ی ۷" }, excerpt: { en: "A practical guide to setting up routes, dynamic params, and navigation.", fa: "راهنمایی کاربردی برای ساخت مسیرها، پارامترهای پویا و ناوبری." }, date: { en: "Nov 18, 2026", fa: "۲۷ آبان ۱۴۰۵" } },
  { slug: "rtl-layout-tips", title: { en: "RTL Layout Tips", fa: "نکته‌هایی برای چیدمان راست‌به‌چپ" }, excerpt: { en: "A few principles for building interfaces that read naturally from right to left.", fa: "چند اصل برای ساخت رابط‌هایی که از راست به چپ روان و طبیعی خوانده می‌شوند." }, date: { en: "Nov 15, 2026", fa: "۲۴ آبان ۱۴۰۵" } },
];

export default function BlogPosts() {
  const { locale, direction } = usePreferences();
  const t = getMessages(locale);

  return (
    <main dir={direction} className="min-h-screen px-6 pb-20 pt-36 text-[var(--nova-fg)] sm:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-[10px] uppercase tracking-[.22em] text-nova-orange">NOVA / JOURNAL</p>
        <h1 className="mb-8 text-4xl font-light sm:text-6xl">{t.blogTitle}</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
              <p className="text-xs text-[var(--text-muted)]">{post.date[locale]}</p>
              <h2 className="mt-2 text-2xl font-medium">{post.title[locale]}</h2>
              <p className="mt-3 leading-7 text-[var(--text-secondary)]">{post.excerpt[locale]}</p>
              <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm text-nova-orange no-underline hover:underline">{t.readMore}<span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
