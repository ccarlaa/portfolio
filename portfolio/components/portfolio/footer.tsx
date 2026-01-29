"use client"

import { useLocale } from "@/lib/locale-context"
import { AccentColorPicker } from "@/components/portfolio/accent-color-picker"
import { ThemeToggle } from "@/components/portfolio/theme-toggle"
import { LocaleToggle } from "@/components/portfolio/locale-toggle"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="py-12 border-t border-border">
      <div className="space-y-6 text-sm text-muted-foreground">
        {/* Color picker and theme controls */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium">✨ Personalize:</span>
          <AccentColorPicker />
          <ThemeToggle />
          <LocaleToggle />
        </div>

        <div className="space-y-4">
          <p className="leading-relaxed max-w-lg">
            {t.footer.builtWith}{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Next.js
            </a>{" "}
            {t.footer.and}{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tailwind CSS
            </a>
            . {t.footer.deployedOn}{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Vercel
            </a>
            .
          </p>

          <p>
            © {new Date().getFullYear()} Carla Clementino. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
