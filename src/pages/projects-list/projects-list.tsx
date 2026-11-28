import { useMemo, useState } from "react";
import { Link } from "react-router";
import { getMessages } from "../../i18n/messages";
import { usePreferences } from "../../preferences/preferences-context";

const projects = [
  { id: 1, title: { en: "Modern Living Room", fa: "اتاق نشیمن مدرن" }, category: { en: "Interior", fa: "طراحی داخلی" }, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900" },
  { id: 2, title: { en: "Office Workspace", fa: "فضای کار اداری" }, category: { en: "Office", fa: "محیط کار" }, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900" },
  { id: 3, title: { en: "Cafe Interior", fa: "طراحی داخلی کافه" }, category: { en: "Commercial", fa: "تجاری" }, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900" },
  { id: 4, title: { en: "Bedroom Retreat", fa: "اتاق‌خواب آرامش‌بخش" }, category: { en: "Residential", fa: "مسکونی" }, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900" },
];

export default function ProjectsList() {
  const { locale, direction } = usePreferences();
  const t = getMessages(locale);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const categories = [...new Set(projects.map((project) => project.category.en))];
  const filtered = useMemo(() => projects.filter((project) =>
    project.title[locale].toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
    (!category || project.category.en === category),
  ), [category, locale, search]);

  return (
    <main dir={direction} className="min-h-screen px-6 pb-20 pt-36 text-[var(--nova-fg)] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-3 text-[10px] uppercase tracking-[.22em] text-nova-orange">NOVA / MISSIONS</p>
          <h1 className="text-4xl font-light sm:text-6xl">{t.projectsTitle}</h1>
        </div>
        <div className="mb-7 flex flex-wrap gap-3">
          <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder={t.searchProjects} aria-label={t.searchProjects} className="min-w-[220px] flex-1 rounded-full border border-[var(--border)] bg-[var(--input)] px-5 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-nova-orange/60" />
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label={t.allCategories} className="rounded-full border border-[var(--border)] bg-[var(--input)] px-5 py-3 text-sm text-[var(--text)] outline-none focus:border-nova-orange/60">
            <option value="">{t.allCategories}</option>
            {categories.map((value) => <option key={value} value={value}>{projects.find((project) => project.category.en === value)?.category[locale]}</option>)}
          </select>
        </div>
        {filtered.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article key={project.id} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <img src={project.image} alt={project.title[locale]} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[.16em] text-cosmic-blue">{project.category[locale]}</p>
                  <h2 className="mt-2 text-xl font-medium">{project.title[locale]}</h2>
                  <Link to={`/projects/${project.id}`} className="mt-5 inline-flex items-center gap-2 text-sm text-nova-orange no-underline hover:underline">{t.viewDetails}<span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        ) : <p className="py-16 text-center text-[var(--text-muted)]">{t.noProjects}</p>}
      </div>
    </main>
  );
}
