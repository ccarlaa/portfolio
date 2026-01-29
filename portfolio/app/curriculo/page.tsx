"use client"

import { useLocale } from "@/lib/locale-context"
import { LocaleToggle } from "@/components/portfolio/locale-toggle"
import { ThemeToggle } from "@/components/portfolio/theme-toggle"
import { ArrowLeft, MapPin, Mail, Linkedin, Github, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const resumeData = {
  pt: {
    title: "Currículo",
    backHome: "Voltar",
    print: "Imprimir",
    contact: "Contato",
    summary: "Resumo",
    summaryText:
      "Desenvolvedora Frontend Pleno com experiência em criar interfaces web modernas, acessíveis e performáticas. Especializada em React, TypeScript, Tailwind CSS e Ruby on Rails. Estudante de Engenharia de Software na Universidade de Brasília, combinando conhecimento acadêmico com experiência prática em projetos reais.",
    experience: "Experiência Profissional",
    education: "Formação Acadêmica",
    courses: "Cursos",
    skills: "Habilidades Técnicas",
    languages: "Idiomas",
    extracurricular: "Atividades Extracurriculares",
    present: "Presente",
    experiences: [
      {
        company: "Switch Dreams Technology Development LTDA",
        role: "Desenvolvedora Frontend Pleno",
        period: "12/2024 — Presente",
        location: "Brasília, DF",
        description: [
          "Planejamento da arquitetura frontend para design systems",
          "Desenvolvimento de interfaces responsivas e acessíveis usando React.js, Ruby on Rails, TypeScript, Bootstrap, Tailwind, Styled Components, Storybook, Lookbook e Stimulus",
          "Desenvolvimento de biblioteca de componentes usando TypeScript, Tailwind e Storybook",
          "Realização de testes unitários usando Jest",
          "Integração back-end e front-end",
          "Manutenção e refatoração de código para garantir padronização, performance e escalabilidade",
          "Construção de layouts com Figma",
        ],
      },
      {
        company: "Switch Dreams Technology Development LTDA",
        role: "Estagiária Frontend",
        period: "02/2023 — 12/2024",
        location: "Brasília, DF",
        description: [
          "Desenvolvimento de interfaces responsivas e acessíveis",
          "Criação de componentes reutilizáveis",
          "Integração com APIs RESTful",
          "Participação em code reviews",
        ],
      },
    ],
    educationList: [
      {
        institution: "Universidade de Brasília (UnB)",
        degree: "Bacharelado em Engenharia de Software",
        period: "06/2022 — Presente",
        description: "",
      },
    ],
    coursesList: [
      {
        name: "Bootcamp - Desenvolvimento Web - Driven Education",
        duration: "+1000h",
        description: "Curso intensivo focado em desenvolvimento web",
      },
      {
        name: "Creating 3D for the Web with Three.js and WebGL - Udemy",
        duration: "3.5h",
        description: "Curso introdutório sobre tecnologias ThreeJS e API WebGL",
      },
      {
        name: "Green Belt Six Sigma",
        duration: "40h",
        description: "Curso focado em melhoria contínua de processos de negócios",
      },
    ],
    extracurricularList: [
      {
        title: "Desenvolvimento de Software para Posição de Antena para Recepção de Satélite",
        period: "06/2025 — Presente",
        description: "Desenvolvendo desde o design do sistema até o código",
      },
      {
        title: "Desenvolvimento de Sistema de Qualidade da Água para Piscicultura",
        period: "06/2024 — 12/2024",
        description: "Atuando como gerente da equipe de software",
      },
      {
        title: "Monitoria de Cálculo 1 e 2 - Universidade de Brasília",
        period: "+100h",
        description: "Auxílio aos estudantes na resolução de exercícios e aulas de reforço",
      },
      {
        title: "Zenit Aerospace - Empresa Júnior da UnB",
        period: "06/2018 — 12/2019",
        description: "Consultora de pesquisa e desenvolvimento, auxiliando na prestação de serviços, estudos de viabilidade e organização interna",
      },
    ],
    skillCategories: [
      {
        name: "Linguagens",
        items: ["JavaScript", "TypeScript", "Ruby on Rails"],
      },
      {
        name: "Frontend",
        items: ["React.js", "React Native", "HTML5", "CSS3", "Bootstrap", "Tailwind", "Axios", "Styled Components", "SCSS", "Storybook", "Lookbook", "React Router", "Hooks", "Context API", "Figma"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Ruby on Rails", "Arquitetura em Camadas", "Clean Architecture"],
      },
      {
        name: "Testes",
        items: ["Jest", "React Testing Library", "Cypress"],
      },
      {
        name: "Banco de Dados",
        items: ["MongoDB", "PostgreSQL", "Prisma"],
      },
      {
        name: "Controle de Versão",
        items: ["Git (GitFlow)"],
      },
    ],
    languagesList: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado (C1)" },
      { name: "Francês", level: "Básico (B1)" },
    ],
  },
  en: {
    title: "Resume",
    backHome: "Back",
    print: "Print",
    contact: "Contact",
    summary: "Summary",
    summaryText:
      "Mid-Level Frontend Developer with experience building modern, accessible, and performant web interfaces. Specialized in React, TypeScript, Tailwind CSS, and Ruby on Rails. Software Engineering student at University of Brasília, combining academic knowledge with hands-on experience in real-world projects.",
    experience: "Professional Experience",
    education: "Education",
    courses: "Courses",
    skills: "Technical Skills",
    languages: "Languages",
    extracurricular: "Extracurricular Activities",
    present: "Present",
    experiences: [
      {
        company: "Switch Dreams Technology Development LTDA",
        role: "Mid-Level Frontend Developer",
        period: "12/2024 — Present",
        location: "Brasília, Brazil",
        description: [
          "Planning frontend architecture for design systems",
          "Development of responsive and accessible interfaces using React.js, Ruby on Rails, TypeScript, Bootstrap, Tailwind, Styled Components, Storybook, Lookbook and Stimulus",
          "Development of component library using TypeScript, Tailwind and Storybook",
          "Unit testing using Jest",
          "Back-end and Front-end integration",
          "Code maintenance and refactoring to ensure standardization, performance and scalability",
          "Building layouts with Figma",
        ],
      },
      {
        company: "Switch Dreams Technology Development LTDA",
        role: "Frontend Intern",
        period: "02/2023 — 12/2024",
        location: "Brasília, Brazil",
        description: [
          "Development of responsive and accessible interfaces",
          "Creation of reusable components",
          "RESTful API integration",
          "Participation in code reviews",
        ],
      },
    ],
    educationList: [
      {
        institution: "University of Brasília (UnB)",
        degree: "Bachelor's Degree in Software Engineering",
        period: "06/2022 — Present",
        description: "",
      },
    ],
    coursesList: [
      {
        name: "Bootcamp - Web Development - Driven Education",
        duration: "+1000h",
        description: "Intensive course focused on web development",
      },
      {
        name: "Creating 3D for the Web with Three.js and WebGL - Udemy",
        duration: "3.5h",
        description: "Introductory course on ThreeJS technologies and WebGL API",
      },
      {
        name: "Green Belt Six Sigma",
        duration: "40h",
        description: "Course focused on continuous improvement of business processes",
      },
    ],
    extracurricularList: [
      {
        title: "Software Development for Antenna Position for Satellite Reception",
        period: "06/2025 — Present",
        description: "Developing from system design to code",
      },
      {
        title: "Water Quality System Development for Fish Farm",
        period: "06/2024 — 12/2024",
        description: "Working as software team manager",
      },
      {
        title: "Calculus 1 and 2 Tutoring - University of Brasília",
        period: "+100h",
        description: "Helping students solve exercises and providing reinforcement classes",
      },
      {
        title: "Zenit Aerospace - Junior Company at UnB",
        period: "06/2018 — 12/2019",
        description: "Research and development consultant, assisting in service provision, feasibility studies and internal organization",
      },
    ],
    skillCategories: [
      {
        name: "Languages",
        items: ["JavaScript", "TypeScript", "Ruby on Rails"],
      },
      {
        name: "Frontend",
        items: ["React.js", "React Native", "HTML5", "CSS3", "Bootstrap", "Tailwind", "Axios", "Styled Components", "SCSS", "Storybook", "Lookbook", "React Router", "Hooks", "Context API", "Figma"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Ruby on Rails", "Layered Architecture", "Clean Architecture"],
      },
      {
        name: "Testing",
        items: ["Jest", "React Testing Library", "Cypress"],
      },
      {
        name: "Database",
        items: ["MongoDB", "PostgreSQL", "Prisma"],
      },
      {
        name: "Version Control",
        items: ["Git (GitFlow)"],
      },
    ],
    languagesList: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced (C1)" },
      { name: "French", level: "Basic (B1)" },
    ],
  },
}

export default function ResumePage() {
  const { locale } = useLocale()
  const t = resumeData[locale]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header com navegação - esconde na impressão */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
              <ArrowLeft className="h-4 w-4" />
              {t.backHome}
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2 bg-transparent">
              <Printer className="h-4 w-4" />
              {t.print}
            </Button>
            <ThemeToggle />
            <LocaleToggle />
          </div>
        </div>
      </header>

      {/* Conteúdo do currículo */}
      <main className="max-w-4xl mx-auto px-6 py-12 print:py-0 print:px-0">
        {/* Cabeçalho do currículo */}
        <section className="mb-10 print:mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2 print:text-3xl">Carla Clementino</h1>
          <p className="text-xl text-primary mb-4 print:text-lg">
            {locale === "pt" ? "Desenvolvedora Frontend Pleno" : "Mid-Level Frontend Developer"}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Brasília, DF
            </span>
            <a href="mailto:carlacarlaclementino@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              carlacarlaclementino@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/carla-clementino-53b6441b1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href="https://github.com/ccarlaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </section>

        {/* Resumo */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3 uppercase tracking-wide border-b border-border pb-2">
            {t.summary}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t.summaryText}</p>
        </section>

        {/* Experiência */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
            {t.experience}
          </h2>
          <div className="space-y-6">
            {t.experiences.map((exp, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-1 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Formação */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
            {t.education}
          </h2>
          <div className="space-y-4">
            {t.educationList.map((edu, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
                {edu.description && <p className="text-muted-foreground">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Cursos */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
            {t.courses}
          </h2>
          <div className="space-y-4">
            {t.coursesList.map((course, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-semibold text-foreground">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.duration}</p>
                </div>
                <p className="text-muted-foreground text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
            {t.skills}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.skillCategories.map((category, index) => (
              <div key={index} className="print:break-inside-avoid">
                <h3 className="font-medium text-foreground mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Atividades Extracurriculares */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
            {t.extracurricular}
          </h2>
          <div className="space-y-4">
            {t.extracurricularList.map((activity, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-semibold text-foreground">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.period}</p>
                </div>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Idiomas */}
        <section className="print:mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
            {t.languages}
          </h2>
          <div className="flex gap-6">
            {t.languagesList.map((lang, index) => (
              <div key={index}>
                <span className="font-medium text-foreground">{lang.name}:</span>{" "}
                <span className="text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
