import { usePreferences } from "../../preferences/preferences-context";

export default function PreferencesControls() {
  const { locale, theme, toggleLocale, toggleTheme } = usePreferences();
  const labels = locale === "en"
    ? { light: "Light", dark: "Dark", switchToLight: "Switch to light mode", switchToDark: "Switch to dark mode" }
    : { light: "روشن", dark: "تاریک", switchToLight: "رفتن به حالت روشن", switchToDark: "رفتن به حالت تاریک" };

  return (
    <div className="flex items-center justify-end gap-2 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[var(--text)]">
      <button
        type="button"
        onClick={toggleLocale}
        aria-label={locale === "en" ? "Switch to Persian" : "Switch to English"}
        className="latin-metadata rounded-md border border-[var(--border)] px-3 py-1.5 text-sm"
      >
        EN / FA
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "light" ? labels.switchToDark : labels.switchToLight}
        className="rounded-md border border-[var(--border)] px-3 py-1.5 text-sm"
      >
        {theme === "light" ? labels.dark : labels.light}
      </button>
    </div>
  );
}
