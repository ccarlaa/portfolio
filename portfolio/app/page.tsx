"use client"

import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Footer } from "@/components/portfolio/footer"
import { LocaleProvider } from "@/lib/locale-context"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"

function ProjectsPreview() {
  const { t } = useLocale()
  
  return (
    <section className="py-16 lg:py-24">
      <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-8">
        {t.projects.title}
      </h3>
      
      <p className="text-muted-foreground mb-6">
        {t.projects.title === "Projetos" 
          ? "Confira os projetos que participei durante minha carreira na Switch Dreams e como freelancer."
          : "Check out the projects I contributed to during my career at Switch Dreams and as a freelancer."
        }
      </p>
      
      <Link 
        href="/projetos"
        className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
      >
        {t.projects.viewAll}
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </section>
  )
}

function PortfolioContent() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
          </header>

          <main className="lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <ProjectsPreview />
            <Skills />
            <Footer />
          </main>
        </div>
      </div>

      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: "radial-gradient(600px at 50% 200px, rgba(45, 212, 191, 0.05), transparent 80%)"
        }}
      />
    </div>
  )
}

export default function Home() {
  return (
    <LocaleProvider>
      <PortfolioContent />
    </LocaleProvider>
  )
}
