import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "fa";
export type Theme = "dark" | "light";

type PreferencesContextValue = {
  locale: Locale;
  theme: Theme;
  direction: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);
const STORAGE_KEY = "nova-preferences";

function getInitialPreferences(): { locale: Locale; theme: Theme } {
  if (typeof window === "undefined") return { locale: "en", theme: "light" };

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Partial<{ locale: Locale; theme: Theme }>;
      return {
        locale: parsed.locale === "fa" ? "fa" : "en",
        theme: parsed.theme === "dark" ? "dark" : "light",
      };
    }
  } catch {
    // Ignore unavailable storage and use the default preferences.
  }

  return { locale: "en", theme: "light" };
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState(getInitialPreferences);
  const { locale, theme } = preferences;

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "fa" ? "rtl" : "ltr";
    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    document.getElementById("theme-color")?.setAttribute("content", theme === "dark" ? "#08090C" : "#F5F5F2");

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // The controls remain usable when storage is unavailable.
    }
  }, [locale, preferences, theme]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setPreferences((current) => ({ ...current, locale: nextLocale }));
  }, []);

  const toggleLocale = useCallback(() => {
    setPreferences((current) => ({ ...current, locale: current.locale === "en" ? "fa" : "en" }));
  }, []);

  const toggleTheme = useCallback(() => {
    setPreferences((current) => ({ ...current, theme: current.theme === "dark" ? "light" : "dark" }));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      theme,
      direction: locale === "fa" ? "rtl" as const : "ltr" as const,
      setLocale,
      toggleLocale,
      toggleTheme,
    }),
    [locale, setLocale, theme, toggleLocale, toggleTheme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used inside PreferencesProvider");
  return context;
}
