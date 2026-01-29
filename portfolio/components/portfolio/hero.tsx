"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { LocaleToggle } from "./locale-toggle"
import { ThemeToggle } from "./theme-toggle"
import { AccentColorPicker } from "@/components/portfolio/accent-color-picker"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/ccarlaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/carla-clementino-53b6441b1/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:carlacarlaclementino@gmail.com", label: "Email" },
]

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              Carla Clementino
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-medium">
              {t.hero.role}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <AccentColorPicker />
            <ThemeToggle />
            <LocaleToggle />
          </div>
        </div>

        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
          {t.hero.description}
        </p>

        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span>{t.hero.location}</span>
          <span className="mx-2">•</span>
          <span>{t.hero.university}</span>
        </div>

        <nav className="pt-4">
          <ul className="space-y-3 text-sm font-medium text-muted-foreground">
            <li>
              <a 
                href="#sobre" 
                className="group flex items-center gap-3 hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
                {t.nav.about}
              </a>
            </li>
            <li>
              <a 
                href="#experiencia" 
                className="group flex items-center gap-3 hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
                {t.nav.experience}
              </a>
            </li>
            <li>
              <Link 
                href="/projetos"
                className="group flex items-center gap-3 hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
                {t.nav.projects}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 pt-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
