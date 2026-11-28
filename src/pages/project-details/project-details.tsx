import { Link, useParams } from "react-router";
import { getMessages } from "../../i18n/messages";
import { usePreferences } from "../../preferences/preferences-context";

const projects = {
  "1": {
    title: { en: "Modern Living Room", fa: "اتاق نشیمن مدرن" },
    category: { en: "Interior Design", fa: "طراحی داخلی" },
    description: { en: "A spacious living room with natural light, wooden accents, and comfortable seating for relaxation.", fa: "اتاق نشیمنی دلباز با نور طبیعی، جزئیات چوبی و فضایی راحت برای استراحت." },
  },
  "2": {
    title: { en: "Office Workspace", fa: "فضای کار اداری" },
    category: { en: "Office Design", fa: "طراحی محیط کار" },
    description: { en: "An ergonomic office space designed for productivity with standing desks and collaborative zones.", fa: "فضایی ارگونومیک برای کار و تمرکز، با میزهای ایستاده و بخش‌هایی برای همکاری تیمی." },
  },
  "3": {
    title: { en: "Cafe Interior", fa: "طراحی داخلی کافه" },
    category: { en: "Commercial Design", fa: "طراحی تجاری" },
    description: { en: "A cozy cafe interior with warm lighting, rustic tables, and an inviting atmosphere.", fa: "فضای دنج کافه با نور گرم، میزهای روستیک و حال‌وهوایی صمیمی." },
  },
  "4": {
    title: { en: "Bedroom Retreat", fa: "اتاق‌خواب آرامش‌بخش" },
    category: { en: "Residential Design", fa: "طراحی مسکونی" },
    description: { en: "A serene bedroom design with soft textures, a neutral palette, and a calming ambiance.", fa: "طراحی اتاق‌خوابی آرام با بافت‌های لطیف، رنگ‌های خنثی و فضایی دلنشین." },
  },
} as const;

export default function ProjectDetails() {
  const { id } = useParams();
  const { locale, direction } = usePreferences();
  const t = getMessages(locale);
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <main dir={direction} className="min-h-screen px-6 pb-20 pt-40 text-center text-[var(--text)]"><h1 className="text-3xl">{t.projectNotFound}</h1><Link to="/projects" className="mt-6 inline-block text-nova-orange">{t.backToProjects}</Link></main>;
  }

  return (
    <main dir={direction} className="min-h-screen px-6 pb-20 pt-36 text-[var(--text)] sm:px-10">
      <article className="mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-12">
        <Link to="/projects" className="text-sm text-nova-orange no-underline">← {t.backToProjects}</Link>
        <p className="mt-9 text-xs uppercase tracking-[.2em] text-cosmic-blue">{project.category[locale]}</p>
        <h1 className="mt-3 text-4xl font-light sm:text-6xl">{project.title[locale]}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">{project.description[locale]}</p>
      </article>
    </main>
  );
}
