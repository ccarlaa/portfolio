"use client"

import { useLocale } from "@/lib/locale-context"

export function About() {
  const { t } = useLocale()

  return (
    <section id="sobre" className="py-16 lg:py-24 scroll-mt-24">
      <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-8 lg:hidden">
        {t.about.title}
      </h3>
      
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {t.about.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
