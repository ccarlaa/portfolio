"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type AccentColor = {
  name: string
  primary: string
  accent: string
  hue: number
}

type AccentColorContextType = {
  accentColor: AccentColor
  setAccentColor: (color: AccentColor) => void
}

const accentColors: AccentColor[] = [
  {
    name: "Teal",
    primary: "oklch(0.55 0.15 180)",
    accent: "oklch(0.55 0.15 180)",
    hue: 180,
  },
  {
    name: "Purple",
    primary: "oklch(0.55 0.15 280)",
    accent: "oklch(0.55 0.15 280)",
    hue: 280,
  },
  {
    name: "Pink",
    primary: "oklch(0.55 0.15 340)",
    accent: "oklch(0.55 0.15 340)",
    hue: 340,
  },
  {
    name: "Orange",
    primary: "oklch(0.55 0.15 50)",
    accent: "oklch(0.55 0.15 50)",
    hue: 50,
  },
  {
    name: "Blue",
    primary: "oklch(0.55 0.15 240)",
    accent: "oklch(0.55 0.15 240)",
    hue: 240,
  },
  {
    name: "Green",
    primary: "oklch(0.55 0.15 140)",
    accent: "oklch(0.55 0.15 140)",
    hue: 140,
  },
]

const AccentColorContext = createContext<AccentColorContextType | undefined>(undefined)

export function AccentColorProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColorState] = useState<AccentColor>(accentColors[0])

  useEffect(() => {
    const saved = localStorage.getItem("accentColor")
    if (saved) {
      const parsed = JSON.parse(saved)
      const found = accentColors.find((c) => c.name === parsed.name)
      if (found) {
        setAccentColorState(found)
      }
    }
  }, [])

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color)
    localStorage.setItem("accentColor", JSON.stringify(color))

    // Update CSS variables
    const root = document.documentElement
    root.style.setProperty("--primary", color.primary)
    root.style.setProperty("--accent", color.accent)
    root.style.setProperty("--ring", color.primary)
    root.style.setProperty("--sidebar-primary", color.primary)
    root.style.setProperty("--sidebar-ring", color.primary)
  }

  // Apply initial color
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--primary", accentColor.primary)
    root.style.setProperty("--accent", accentColor.accent)
    root.style.setProperty("--ring", accentColor.primary)
    root.style.setProperty("--sidebar-primary", accentColor.primary)
    root.style.setProperty("--sidebar-ring", accentColor.primary)
  }, [accentColor])

  return (
    <AccentColorContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </AccentColorContext.Provider>
  )
}

export function useAccentColor() {
  const context = useContext(AccentColorContext)
  if (context === undefined) {
    throw new Error("useAccentColor must be used within an AccentColorProvider")
  }
  return context
}

export { accentColors }
