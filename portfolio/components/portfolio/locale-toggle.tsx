"use client"

import { useLocale } from "@/lib/locale-context"

export function LocaleToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <button
      onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border hover:border-muted-foreground"
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <span className={locale === "pt" ? "text-foreground" : ""}>PT</span>
      <span className="text-muted-foreground/50">/</span>
      <span className={locale === "en" ? "text-foreground" : ""}>EN</span>
    </button>
  )
}
