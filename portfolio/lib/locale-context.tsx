"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, getTranslations } from "./i18n"
import { ThemeProvider } from "./theme-context"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved && (saved === "pt" || saved === "en")) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = getTranslations(locale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
