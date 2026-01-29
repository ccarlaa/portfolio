"use client"

import { useLocale } from "@/lib/locale-context"

const skillCategories = {
  pt: [
    {
      title: "Frontend",
      skills: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Styled Components", "Bootstrap"],
    },
    {
      title: "Ferramentas",
      skills: ["Git (GitFlow)", "Figma", "Storybook", "Lookbook", "Jest", "Cypress", "React Testing Library"],
    },
    {
      title: "Backend",
      skills: ["Ruby on Rails", "Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      title: "Outros",
      skills: ["Clean Architecture", "Design Systems", "Axios", "React Router", "Context API", "Hooks"],
    },
  ],
  en: [
    {
      title: "Frontend",
      skills: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Styled Components", "Bootstrap"],
    },
    {
      title: "Tools",
      skills: ["Git (GitFlow)", "Figma", "Storybook", "Lookbook", "Jest", "Cypress", "React Testing Library"],
    },
    {
      title: "Backend",
      skills: ["Ruby on Rails", "Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      title: "Other",
      skills: ["Clean Architecture", "Design Systems", "Axios", "React Router", "Context API", "Hooks"],
    },
  ],
}

export function Skills() {
  const { locale, t } = useLocale()
  const categories = skillCategories[locale]

  return (
    <section className="py-16 lg:py-24">
      <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-8">
        {t.skills.title}
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category.title} className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs text-muted-foreground bg-secondary rounded-full hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
