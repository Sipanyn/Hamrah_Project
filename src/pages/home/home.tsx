import { Link } from "react-router";
import { usePreferences } from "../../preferences/preferences-context";

const content = {
  en: {
    eyebrow: "INDEPENDENT CREATIVE TEAM · EST. 2026",
    title: "NOVA",
    titleSecond: "FOUR MINDS. ONE UNIVERSE.",
    description: "We bring thoughtful design and bold technology together to build digital experiences with a little more gravity.",
    explore: "Explore our universe",
    missions: "View our missions",
    scroll: "Scroll to explore",
    crew: "THE CREW",
    crewTitle: "A team of dreamers in the same galaxy.",
    crewText: "Four minds, different paths, one shared vision.",
    meetTeam: "Meet the team",
    projects: "OUR MISSIONS",
    projectsTitle: "Four projects. Infinite possibilities.",
    projectsText: "From ideas to impact — explore our creations.",
    allProjects: "View all projects",
    about: "ABOUT NOVA",
    aboutTitle: "More than a team. A constellation of ideas.",
    aboutText: "NOVA is a creative collective of developers, designers, and builders, united by a passion for technology and a love for the unknown.",
    learnMore: "Learn more",
    journal: "SPACE JOURNAL",
    journalTitle: "Stories from our journey.",
    journalText: "Insights, ideas, and thoughts from our space.",
    allPosts: "Read all posts",
    contact: "Have an idea? Let’s make it shine.",
    contactText: "Tell us what you’re imagining. We’ll meet you there.",
    contactCta: "Start a conversation",
    open: "Open",
  },
  fa: {
    eyebrow: "تیم مستقل خلاق · آغاز از ۱۴۰۵",
    title: "NOVA",
    titleSecond: "چهار ذهن، یک جهان.",
    description: "با کنار هم گذاشتن طراحی سنجیده و فناوری جسورانه، تجربه‌های دیجیتالی می‌سازیم که در ذهن می‌مانند.",
    explore: "سفر در جهان ما",
    missions: "دیدن مأموریت‌ها",
    scroll: "برای کشف بیشتر پایین بروید",
    crew: "خدمه",
    crewTitle: "تیمی از رویاپردازان در یک کهکشان.",
    crewText: "چهار ذهن، مسیرهایی متفاوت و چشم‌اندازی مشترک.",
    meetTeam: "آشنایی با تیم",
    projects: "مأموریت‌های ما",
    projectsTitle: "چهار پروژه، بی‌نهایت امکان.",
    projectsText: "از ایده تا اثرگذاری؛ ساخته‌های ما را ببینید.",
    allProjects: "دیدن همه‌ی پروژه‌ها",
    about: "درباره‌ی NOVA",
    aboutTitle: "بیش از یک تیم؛ منظومه‌ای از ایده‌ها.",
    aboutText: "NOVA گروهی خلاق از توسعه‌دهندگان، طراحان و سازندگانی است که با عشق به فناوری و ناشناخته‌ها کنار هم آمده‌اند.",
    learnMore: "بیشتر بدانید",
    journal: "دفتر سفر فضایی",
    journalTitle: "روایت‌هایی از مسیر ما.",
    journalText: "بینش‌ها، ایده‌ها و فکرهایی از جهان ما.",
    allPosts: "خواندن همه‌ی نوشته‌ها",
    contact: "ایده‌ای دارید؟ بیایید روشنش کنیم.",
    contactText: "از چیزی که در ذهن دارید برایمان بگویید؛ از همان‌جا شروع می‌کنیم.",
    contactCta: "شروع گفت‌وگو",
    open: "مشاهده",
  },
};

function AstronautIllustration() {
  return (
    <svg viewBox="0 0 380 430" role="img" aria-label="Illustration of an astronaut exploring space" className="h-full w-full overflow-visible drop-shadow-[0_35px_55px_rgba(0,0,0,.55)]">
      <defs>
        <linearGradient id="suit" x1=".1" y1="0" x2=".9" y2="1">
          <stop stopColor="#fff" />
          <stop offset=".55" stopColor="#cbd4e2" />
          <stop offset="1" stopColor="#7c899b" />
        </linearGradient>
        <linearGradient id="visor" x1=".1" y1="0" x2=".9" y2="1">
          <stop stopColor="#24364d" />
          <stop offset=".48" stopColor="#07111f" />
          <stop offset="1" stopColor="#02050b" />
        </linearGradient>
        <linearGradient id="orange" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffc083" />
          <stop offset="1" stopColor="#ed642c" />
        </linearGradient>
      </defs>
      <g stroke="#77869a" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <path d="m111 173-42 24-22 68 23 10 35-54 28-10" fill="url(#suit)" />
        <path d="m256 170 41 22 33 61-20 15-43-45-34-12" fill="url(#suit)" />
        <path d="m121 250-12 72 34 40 28-9-12-49 15-44" fill="url(#suit)" />
        <path d="m220 250 15 61-10 47 31 12 22-55-16-76" fill="url(#suit)" />
        <path d="m145 166-32 27-8 77c25 24 89 34 138 4l17-73-35-37Z" fill="url(#suit)" />
        <path d="m112 188-24 13-5 29 22 5 21-31m111-16 25 12 8 29-21 7-19-29" fill="url(#suit)" />
        <path d="m151 145-26 14 20 30 38-8 32 9 26-30-29-17" fill="#e8edf3" />
        <rect x="224" y="176" width="42" height="91" rx="15" fill="#263345" stroke="#526176" />
        <rect x="230" y="190" width="9" height="27" rx="4" fill="url(#orange)" stroke="none" />
        <path d="M142 113c0-39 24-64 57-64s58 25 58 64v29c-16 22-38 34-58 34s-42-12-57-34Z" fill="url(#suit)" />
        <path d="M153 111c0-28 18-47 46-47s47 19 47 47v21c-13 17-29 25-47 25s-35-8-46-25Z" fill="url(#visor)" stroke="#d9e2ed" strokeWidth="5" />
        <path d="M165 99c9-17 26-26 46-25" fill="none" stroke="#92bdf0" strokeWidth="5" opacity=".8" />
        <path d="m148 80-19 10 9 31 17-4m99-37 18 10-9 31-17-4" fill="url(#orange)" stroke="#c75a2e" />
        <path d="m152 286 34 5-5 24-32-3m57-26 34-4 13 25-35 8" fill="#edf1f6" />
        <path d="m106 269-27 12-12-7-8-14 8-17 21 5m177 6 25 15 15-8 7-14-9-16-20 8" fill="url(#suit)" />
        <path d="m143 211 20 11m63-12-19 12" fill="none" stroke="#f17d3b" strokeWidth="7" />
        <circle cx="183" cy="246" r="5" fill="#ed7737" stroke="none" />
        <circle cx="207" cy="246" r="5" fill="#7ba7dc" stroke="none" />
      </g>
    </svg>
  );
}

export default function Home() {
  const { locale } = usePreferences();
  const t = content[locale];
  const crew = [
    { image: "/images/crew-01.png", role: locale === "en" ? "Frontend developer" : "توسعه‌دهنده‌ی فرانت‌اند" },
    { image: "/images/crew-02.png", role: locale === "en" ? "Backend developer" : "توسعه‌دهنده‌ی بک‌اند" },
    { image: "/images/crew-03.png", role: locale === "en" ? "Product designer" : "طراح محصول" },
    { image: "/images/crew-04.png", role: locale === "en" ? "Product strategist" : "استراتژیست محصول" },
  ];
  const missions = [
    { id: "01", title: "SuperMart", kind: locale === "en" ? "GROCERY ANALYTICS" : "تحلیل فروشگاه" },
    { id: "02", title: "MegaMart", kind: locale === "en" ? "INVENTORY SYSTEM" : "مدیریت موجودی" },
    { id: "03", title: "ShopSphere", kind: locale === "en" ? "SMART CHECKOUT" : "پرداخت هوشمند" },
    { id: "04", title: "Martify", kind: locale === "en" ? "RETAIL PLATFORM" : "پلتفرم خرده‌فروشی" },
  ];
  const journal = [
    { slug: "hello-world", title: locale === "en" ? "The Future of E-commerce in a Digital Galaxy" : "آینده‌ی تجارت الکترونیک در کهکشان دیجیتال", date: locale === "en" ? "Nov 12, 2026" : "۲۱ آبان ۱۴۰۵", art: "from-blue-300/50 via-indigo-500/20 to-slate-950" },
    { slug: "react-router-guide", title: locale === "en" ? "Building Better: Lessons from Space" : "ساختن بهتر؛ درس‌هایی از فضا", date: locale === "en" ? "Nov 8, 2026" : "۱۷ آبان ۱۴۰۵", art: "from-orange-300/50 via-rose-500/20 to-slate-950" },
    { slug: "rtl-layout-tips", title: locale === "en" ? "Designing for What’s Next" : "طراحی برای آنچه در راه است", date: locale === "en" ? "Nov 2, 2026" : "۱۱ آبان ۱۴۰۵", art: "from-fuchsia-300/50 via-violet-500/20 to-slate-950" },
  ];

  return (
    <main>
      <section className="home-hero relative isolate flex min-h-[max(760px,100svh)] items-center overflow-hidden bg-[var(--nova-bg)] px-6 pb-24 pt-32 text-[var(--nova-fg)] sm:px-10 lg:px-16">
        <div data-space-starfield="true" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 opacity-70 [background-image:radial-gradient(1px_1px_at_8%_20%,rgba(255,255,255,.8)_50%,transparent),radial-gradient(1px_1px_at_62%_16%,rgba(255,255,255,.65)_50%,transparent),radial-gradient(1px_1px_at_44%_70%,rgba(255,255,255,.55)_50%,transparent),radial-gradient(1.5px_1.5px_at_79%_44%,rgba(176,204,255,.8)_50%,transparent),radial-gradient(1px_1px_at_30%_38%,rgba(255,255,255,.6)_50%,transparent),radial-gradient(1px_1px_at_90%_82%,rgba(255,255,255,.7)_50%,transparent)]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_71%_46%,rgba(26,52,88,.33),transparent_42%),linear-gradient(110deg,transparent_20%,rgba(5,7,11,.12)_51%,rgba(5,7,11,.5))] dark:opacity-100 opacity-30" />

        <div aria-hidden="true" className="absolute -right-[22rem] top-[10%] -z-10 aspect-square w-[58rem] rounded-full border border-white/[.08] sm:-right-[19rem] sm:top-[2%] lg:-right-[13rem] lg:top-[-4%] lg:w-[70rem]">
          <div className="absolute inset-[13%] rounded-full border border-white/[.07]" />
          <div className="absolute inset-[27%] rounded-full border border-white/[.06]" />
        </div>
        <div aria-hidden="true" className="absolute -right-40 top-[19%] -z-10 aspect-square w-[36rem] rounded-full border border-orange-300/20 rotate-[-22deg]" />
        <div aria-hidden="true" className="planet-orb absolute -right-44 top-[13%] -z-10 size-[34rem] rounded-full sm:-right-36 sm:top-[10%] lg:right-[3%] lg:top-[10%] lg:size-[39rem]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_26%,#d4e0ee_0%,#798da8_13%,#26364c_32%,#121c2b_55%,#070b12_74%)] shadow-[-30px_18px_90px_rgba(90,138,202,.2),inset_-42px_-15px_70px_rgba(0,0,0,.8)]" />
          <div className="absolute inset-0 rounded-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,.07)_47%,transparent_62%)]" />
        </div>
        <div aria-hidden="true" className="astronaut-float absolute -right-16 top-[25%] z-0 h-[340px] w-[300px] sm:right-[3%] sm:top-[23%] sm:h-[420px] sm:w-[370px] lg:right-[20%] lg:top-[18%] lg:h-[520px] lg:w-[450px]">
          <AstronautIllustration />
        </div>
        <div aria-hidden="true" className="absolute bottom-[-28rem] left-[-18%] -z-10 h-[37rem] w-[140%] rounded-[50%] border-t border-blue-100/30 bg-[radial-gradient(ellipse_at_50%_0%,rgba(72,117,175,.36),rgba(19,35,56,.45)_17%,#080c13_48%,#05070b_70%)] shadow-[0_-15px_80px_rgba(70,118,184,.2)] sm:bottom-[-31rem] sm:h-[42rem]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.8fr)]">
          <div className="max-w-[720px] pt-8 lg:pt-0">
        <div className={`mb-7 flex items-center gap-3 text-[10px] font-medium tracking-[.22em] text-slate-400 sm:text-[11px] ${locale === "en" ? "latin-metadata" : ""}`}>
              <span className="h-px w-9 bg-orange-300" />
              <span>{t.eyebrow}</span>
            </div>
            <h1 className="nova-wordmark max-w-[800px] text-[clamp(5rem,13vw,12rem)] font-light leading-[.82] text-white [html[data-theme=light]_&]:text-slate-950" dir="ltr">{t.title}</h1>
            <p className={`mt-7 text-[11px] font-medium uppercase tracking-[.3em] text-slate-200 [html[data-theme=light]_&]:text-slate-700 sm:text-[13px] ${locale === "en" ? "latin-metadata" : ""}`} dir={locale === "fa" ? "rtl" : "ltr"}>{t.titleSecond}</p>
            <p className="mt-8 max-w-[480px] text-[15px] leading-7 text-slate-300 [html[data-theme=light]_&]:text-slate-600 sm:text-base sm:leading-8" dir={locale === "fa" ? "rtl" : "ltr"}>{t.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3" dir={locale === "fa" ? "rtl" : "ltr"}>
              <a href="#crew" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-orange-300 px-6 text-[13px] font-semibold text-[#17110c] transition hover:bg-orange-200 hover:shadow-[0_0_34px_rgba(253,186,116,.28)]">
                {t.explore}<span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
              <Link to="/projects" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-[13px] font-medium text-white no-underline transition hover:border-white/50 hover:bg-white/[.06] [html[data-theme=light]_&]:border-slate-400 [html[data-theme=light]_&]:text-slate-800">
                {t.missions}<span aria-hidden="true" className="text-slate-400">→</span>
              </Link>
            </div>
            <div className="mt-14 hidden items-center gap-3 text-[10px] tracking-[.16em] text-slate-400 md:flex">
              <span className="grid size-8 place-items-center rounded-full border border-white/20 text-base">↓</span>{t.scroll}
            </div>
          </div>
          <div aria-hidden="true" className="hidden min-h-[520px] lg:block" />
        </div>

        <div className="absolute inset-x-6 bottom-6 mx-auto flex max-w-[1440px] items-center justify-between border-t border-white/10 pt-4 text-[9px] tracking-[.18em] text-slate-500 sm:inset-x-10 lg:inset-x-16">
          <span className="latin-metadata">NOVA · 2026</span><span className="latin-metadata hidden sm:inline">FOUR MINDS. ONE UNIVERSE.</span><span className="latin-metadata">01 / 05</span>
        </div>
      </section>

      <section id="crew" className="relative border-t border-white/[.08] bg-[var(--nova-bg)] px-6 py-20 text-[var(--nova-fg)] sm:px-10 lg:px-16 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(1px_1px_at_14%_36%,rgba(255,255,255,.7)_50%,transparent),radial-gradient(1px_1px_at_77%_22%,rgba(255,255,255,.6)_50%,transparent),radial-gradient(1px_1px_at_92%_78%,rgba(255,255,255,.7)_50%,transparent)]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div dir={locale === "fa" ? "rtl" : "ltr"}>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[.24em] text-orange-400">02 — {t.crew}</p>
            <h2 className="max-w-xl text-3xl font-light leading-tight tracking-[-.04em] text-white [html[data-theme=light]_&]:text-slate-950 sm:text-5xl">{t.crewTitle}</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400 [html[data-theme=light]_&]:text-slate-600">{t.crewText}</p>
            <Link to="/team" className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs text-white no-underline transition hover:border-orange-200/60 hover:text-orange-100 [html[data-theme=light]_&]:border-slate-400 [html[data-theme=light]_&]:text-slate-800">{t.meetTeam}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {crew.map((member, index) => (
              <Link to="/team" key={member.image} className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1018] text-white no-underline transition hover:-translate-y-1 hover:border-orange-200/35">
                <div className="aspect-[.78] overflow-hidden bg-slate-900">
                  <img src={member.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070a10] via-[#070a10]/90 to-transparent px-3 pb-4 pt-12 sm:px-4">
                  <span className="mb-1 block text-[9px] tracking-[.18em] text-orange-200">NOVA / 0{index + 1}</span>
                  <span className="block text-[11px] leading-5 text-slate-200">{member.role}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="missions" className="relative border-t border-white/[.08] bg-[var(--nova-bg)] px-6 py-20 text-[var(--nova-fg)] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div dir={locale === "fa" ? "rtl" : "ltr"}>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[.24em] text-orange-400">03 — {t.projects}</p>
            <h2 className="max-w-lg text-3xl font-light leading-tight tracking-[-.04em] text-white [html[data-theme=light]_&]:text-slate-950 sm:text-5xl">{t.projectsTitle}</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400 [html[data-theme=light]_&]:text-slate-600">{t.projectsText}</p>
            <Link to="/projects" className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs text-white no-underline transition hover:border-orange-200/60 hover:text-orange-100 [html[data-theme=light]_&]:border-slate-400 [html[data-theme=light]_&]:text-slate-800">{t.allProjects}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {missions.map((mission, index) => (
              <Link to={`/projects/${index + 1}`} key={mission.id} className={`mission-card mission-card-${index + 1} group relative flex min-h-[116px] items-center gap-4 overflow-hidden rounded-xl border border-white/15 bg-[#0b111b] px-4 py-4 text-white no-underline transition hover:border-blue-200/40 sm:min-h-[132px] sm:px-5`}>
                <div aria-hidden="true" className="mission-planet absolute -right-3 -top-10 size-40 rounded-full opacity-80 transition-transform duration-500 group-hover:scale-110" />
                <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-white/20 bg-[#090d15]/80 text-slate-100">
                  {index === 0 ? <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 4h2l2.3 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.5L22 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg> : index === 1 ? <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9h18l-1.6 11H4.6L3 9Z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/><path d="M9 13v3m6-3v3"/></svg> : index === 2 ? <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg> : <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 2 2.1 7.9L22 12l-7.9 2.1L12 22l-2.1-7.9L2 12l7.9-2.1L12 2Z"/></svg>}
                </span>
                <span className="relative min-w-0 flex-1">
                  <span className="block text-[9px] tracking-[.18em] text-slate-400">MISSION {mission.id} · {mission.kind}</span>
                  <span className="mt-1 block text-lg font-medium">{mission.title}</span>
                </span>
                <span className="relative grid size-8 shrink-0 place-items-center rounded-full border border-white/25 text-sm text-slate-300 transition group-hover:border-orange-200/60 group-hover:text-orange-100">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden border-y border-white/[.08] bg-[#080d15] text-white">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
          <div aria-hidden="true" className="about-visual relative min-h-[260px] overflow-hidden sm:min-h-[360px]">
            <div className="absolute left-1/2 top-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/20 sm:size-[440px]" />
            <div className="absolute left-1/2 top-1/2 h-32 w-[130%] -translate-x-1/2 -translate-y-1/2 rotate-[-17deg] rounded-[50%] border border-orange-200/50 shadow-[0_0_30px_rgba(203,141,99,.16)]" />
            <div className="about-world absolute left-1/2 top-[58%] size-48 -translate-x-1/2 rounded-full sm:size-64" />
            <div className="absolute left-[23%] top-[23%] size-1 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,.4)]" />
            <div className="absolute right-[16%] top-[31%] size-1 rounded-full bg-orange-200 shadow-[0_0_12px_4px_rgba(251,146,60,.5)]" />
          </div>
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16" dir={locale === "fa" ? "rtl" : "ltr"}>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[.24em] text-orange-300">04 — {t.about}</p>
            <h2 className="max-w-xl text-3xl font-light leading-tight tracking-[-.04em] sm:text-5xl">{t.aboutTitle}</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">{t.aboutText}</p>
            <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs text-white no-underline transition hover:border-orange-200/60 hover:text-orange-100">{t.learnMore}<span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section id="journal" className="relative border-b border-white/[.08] bg-[var(--nova-bg)] px-6 py-20 text-[var(--nova-fg)] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-9 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
          <div dir={locale === "fa" ? "rtl" : "ltr"}>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[.24em] text-orange-400">05 — {t.journal}</p>
            <h2 className="max-w-sm text-3xl font-light leading-tight tracking-[-.04em] text-white [html[data-theme=light]_&]:text-slate-950 sm:text-5xl">{t.journalTitle}</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400 [html[data-theme=light]_&]:text-slate-600">{t.journalText}</p>
            <Link to="/blog" className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs text-white no-underline transition hover:border-orange-200/60 hover:text-orange-100 [html[data-theme=light]_&]:border-slate-400 [html[data-theme=light]_&]:text-slate-800">{t.allPosts}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {journal.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group overflow-hidden rounded-xl border border-white/10 bg-[var(--nova-card)] text-[var(--nova-fg)] no-underline transition hover:-translate-y-1 hover:border-blue-200/30 [html[data-theme=light]_&]:border-slate-200">
                <div className={`journal-art relative h-32 overflow-hidden bg-gradient-to-br ${post.art} sm:h-36`}>
                  <div aria-hidden="true" className="absolute -bottom-24 left-1/2 size-52 -translate-x-1/2 rounded-full border border-white/20 bg-[radial-gradient(circle_at_35%_30%,rgba(174,207,255,.75),rgba(53,83,128,.35)_35%,rgba(4,8,15,.96)_70%)] shadow-[0_0_45px_rgba(104,148,218,.3)] transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-black/20 px-2.5 py-1 text-[8px] tracking-[.18em] text-white backdrop-blur">NOVA / LOG</span>
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 min-h-10 text-sm font-medium leading-5">{post.title}</h3>
                  <p className="mt-3 text-[10px] text-slate-500">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-horizon relative isolate overflow-hidden px-6 py-20 text-center sm:px-10 lg:py-28">
        <div aria-hidden="true" className="absolute -bottom-[17rem] left-1/2 -z-10 h-[24rem] w-[150%] -translate-x-1/2 rounded-[50%] border-t border-blue-100/50 bg-[radial-gradient(ellipse_at_50%_0%,rgba(111,163,225,.45),rgba(25,48,78,.55)_18%,#070a12_55%,#05070b_75%)] shadow-[0_-18px_75px_rgba(85,143,211,.2)]" />
        <p className="text-[10px] font-medium uppercase tracking-[.25em] text-orange-200">NOVA / CONTACT</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-light tracking-[-.04em] text-white sm:text-5xl" dir={locale === "fa" ? "rtl" : "ltr"}>{t.contact}</h2>
        <p className="mt-4 text-sm text-slate-300" dir={locale === "fa" ? "rtl" : "ltr"}>{t.contactText}</p>
        <a href="mailto:hello@nova.studio" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-orange-200/50 px-6 text-sm text-orange-100 no-underline transition hover:bg-orange-200 hover:text-slate-950">{t.contactCta}<span aria-hidden="true">↗</span></a>
      </section>
      <footer id="footer" className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[.08] px-6 py-6 text-[10px] tracking-[.12em] text-slate-500 sm:px-10 lg:px-16">
        <Link to="/" className="nova-wordmark text-sm text-white no-underline">✦ NOVA</Link>
        <nav aria-label={locale === "en" ? "Footer navigation" : "ناوبری پابرگ"} className="flex flex-wrap gap-4">
          <Link to="/" className="text-slate-400 no-underline hover:text-white">{locale === "en" ? "Home" : "خانه"}</Link>
          <Link to="/team" className="text-slate-400 no-underline hover:text-white">{locale === "en" ? "Team" : "تیم"}</Link>
          <Link to="/projects" className="text-slate-400 no-underline hover:text-white">{locale === "en" ? "Projects" : "پروژه‌ها"}</Link>
          <Link to="/blog" className="text-slate-400 no-underline hover:text-white">{locale === "en" ? "Journal" : "یادداشت‌ها"}</Link>
        </nav>
        <span className="latin-metadata">© 2026 NOVA · FOUR MINDS. ONE UNIVERSE.</span>
      </footer>
    </main>
  );
}
