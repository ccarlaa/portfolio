"use client"

import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLocale } from "@/lib/locale-context"

const experiences = {
  pt: [
    {
      period: "12/2024 — Presente",
      title: "Engenheira de Software",
      company: "Switch Dreams",
      companyUrl: "https://switchdreams.com.br",
      description:
        "Planejamento da arquitetura frontend para design systems. Desenvolvimento de interfaces responsivas e acessíveis usando React.js, Ruby on Rails, TypeScript, Bootstrap, Tailwind, Styled Components, Storybook, Lookbook e Stimulus. Desenvolvimento de biblioteca de componentes com TypeScript, Tailwind e Storybook. Testes unitários com Jest. Integração back-end e front-end. Manutenção e refatoração de código.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Ruby on Rails", "Styled Components", "Storybook", "Jest"],
    },
    {
      period: "02/2023 — 12/2024",
      title: "Estagiária Frontend",
      company: "Switch Dreams",
      companyUrl: "https://switchdreams.com.br",
      description:
        "Desenvolvimento de interfaces responsivas e acessíveis. Criação de componentes reutilizáveis. Participação em code reviews e integração com APIs RESTful. Construção de layouts com Figma.",
      technologies: ["React", "TypeScript", "Bootstrap", "Tailwind CSS", "Figma"],
    },
  ],
  en: [
    {
      period: "12/2024 — Present",
      title: "Software Engineer · Júnior",
      company: "Switch Dreams",
      companyUrl: "https://switchdreams.com.br",
      description:
        "Planning frontend architecture for design systems. Development of responsive and accessible interfaces using React.js, Ruby on Rails, TypeScript, Bootstrap, Tailwind, Styled Components, Storybook, Lookbook and Stimulus. Development of component library with TypeScript, Tailwind and Storybook. Unit testing with Jest. Back-end and Front-end integration. Code maintenance and refactoring.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Ruby on Rails", "Styled Components", "Storybook", "Jest"],
    },
    {
      period: "02/2023 — 12/2024",
      title: "Frontend Intern",
      company: "Switch Dreams",
      companyUrl: "https://switchdreams.com.br",
      description:
        "Development of responsive and accessible interfaces. Creation of reusable components. Participation in code reviews and RESTful API integration. Building layouts with Figma.",
      technologies: ["React", "TypeScript", "Bootstrap", "Tailwind CSS", "Figma"],
    },
  ],
}

export function Experience() {
  const { locale, t } = useLocale()
  const experienceList = experiences[locale]

  return (
    <section id="experiencia" className="py-16 lg:py-24 scroll-mt-24">
      <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-8 lg:hidden">
        {t.experience.title}
      </h3>
      
      <div className="space-y-8">
        {experienceList.map((exp, index) => (
          <article
            key={index}
            className="group relative grid sm:grid-cols-[140px_1fr] gap-4 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors"
          >
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide pt-1">
              {exp.period}
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {exp.companyUrl ? (
                  <a 
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    {exp.title} · {exp.company}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span>{exp.title} · {exp.company}</span>
                )}
              </h4>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <a 
          href="/curriculo" 
          className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
        >
          {t.experience.viewResume}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  )
}
