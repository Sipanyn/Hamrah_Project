import { useState } from "react";
import { Link } from "react-router";
import { getMessages } from "../../i18n/messages";
import { usePreferences } from "../../preferences/preferences-context";

const members = [
  { id: 1, name: "Ali Ahmadi", slug: "ali-ahmadi", role: { en: "UI/UX Designer", fa: "طراح رابط و تجربه‌ی کاربری" }, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali" },
  { id: 2, name: "Sara Hosseini", slug: "sara-hosseini", role: { en: "Frontend Developer", fa: "توسعه‌دهنده‌ی فرانت‌اند" }, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" },
  { id: 3, name: "Reza Karimi", slug: "reza-karimi", role: { en: "Product Manager", fa: "مدیر محصول" }, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza" },
];

export default function TeamMembers() {
  const { locale, direction } = usePreferences();
  const t = getMessages(locale);
  const [search, setSearch] = useState("");
  const filtered = members.filter((member) => member.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main dir={direction} className="min-h-screen px-6 pb-20 pt-36 text-[var(--nova-fg)] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[.22em] text-orange-400">NOVA / THE CREW</p>
            <h1 className="text-4xl font-light sm:text-6xl">{t.teamTitle}</h1>
          </div>
          <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder={t.searchMembers} aria-label={t.searchMembers} className="w-full max-w-sm rounded-full border border-[var(--nova-border)] bg-[var(--nova-control-bg)] px-5 py-3 text-sm text-[var(--nova-fg)] outline-none placeholder:text-[var(--nova-muted)] focus:border-orange-300/60" />
        </div>
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((member) => (
              <article key={member.id} className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-card)] p-5">
                <img src={member.avatar} alt="" className="size-20 rounded-full border border-[var(--nova-border)] bg-[var(--nova-control-bg)]" />
                <h2 className="mt-5 text-xl font-medium">{member.name}</h2>
                <p className="mt-1 text-sm text-[var(--nova-muted)]">{member.role[locale]}</p>
                <Link to={`/team/${member.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm text-orange-400 no-underline hover:text-orange-300">{t.viewResume}<span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        ) : <p className="py-16 text-center text-[var(--nova-muted)]">{t.noMembers}</p>}
      </div>
    </main>
  );
}
