import { Link } from "react-router";
import { getMessages } from "../../i18n/messages";
import { usePreferences } from "../../preferences/preferences-context";

export default function NotFound() {
  const { locale, direction } = usePreferences();
  const t = getMessages(locale);

  return (
    <main dir={direction} className="grid min-h-screen place-content-center px-6 pt-24 text-center text-[var(--text)]">
      <p className="text-sm uppercase tracking-[.22em] text-nova-orange">NOVA / 404</p>
      <h1 className="mt-4 text-7xl font-light">404</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">{t.pageNotFound}</p>
      <Link to="/" className="mx-auto mt-8 inline-flex rounded-full bg-nova-orange px-6 py-3 text-sm font-medium text-white no-underline">{t.goHome}</Link>
    </main>
  );
}
