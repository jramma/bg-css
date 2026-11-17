import { ui, defaultLang, showDefaultLang } from "./ui";
// utils.ts

export function getLangFromPathname(pathname: string): keyof typeof ui {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLang = segments[0];
  return maybeLang in ui ? (maybeLang as keyof typeof ui) : defaultLang;
}
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const translations = ui[lang] as Record<string, string>;
    const defaultTranslations = ui[defaultLang] as Record<string, string>;
    return (
      translations[key] ||
      defaultTranslations[key] ||
      `Missing translation for ${key}`
    );
  };
}

const langCodes = Object.keys(ui);
export function useTranslatedPath(currentLang: keyof typeof ui) {
  return function translatePath(
    path: string,
    targetLang: string = currentLang
  ) {
    const segments = path.split("/").filter(Boolean);

    // Si el primer segmento es un idioma, lo eliminamos
    if (segments.length && langCodes.includes(segments[0])) {
      segments.shift();
    }

    // Agregamos el idioma solo si no es el idioma por defecto o si se muestra por config
    const prefix =
      !showDefaultLang && targetLang === defaultLang ? "" : `/${targetLang}`;

    return `${prefix}/${segments.join("/")}`;
  };
}
