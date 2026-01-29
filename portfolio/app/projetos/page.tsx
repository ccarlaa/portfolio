"use client"

import { ExternalLink, ArrowLeft, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { LocaleToggle } from "@/components/portfolio/locale-toggle"
import { ThemeToggle } from "@/components/portfolio/theme-toggle"
import { AccentColorPicker } from "@/components/portfolio/accent-color-picker"
import Link from "next/link"

type Project = {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  liveUrl?: string
  hasCode: boolean
  type: "switch-dreams" | "freelance" | "personal"
  year: string
}

const projects: Record<string, Project[]> = {
  pt: [
    {
      title: "EduQ Brasil",
      description: "Plataforma educacional para alunos e professores",
      longDescription:
        "Atuei na criação de protótipos no Figma e na atualização da interface para torná-la mais atrativa e intuitiva para os alunos. Realizei integrações com APIs e refatoração do código existente para melhorar a manutenibilidade e performance do sistema.",
      technologies: ["React", "TypeScript", "Figma", "REST APIs", "Ruby on Rails"],
      liveUrl: "https://eduqbrasil.com.br/",
      hasCode: false,
      type: "switch-dreams",
      year: "2023-atualmente",
    },
    {
      title: "Geedee",
      description: "Sistema de gestão empresarial",
      longDescription:
        "Desenvolvi a interface do sistema seguindo fielmente o design do Figma, com foco especial em melhorar a usabilidade e a experiência do usuário. Trabalhei na criação de componentes reutilizáveis e na implementação de fluxos de navegação intuitivos.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      liveUrl: "https://geedee.com.br/new_users/login",
      hasCode: false,
      type: "switch-dreams",
      year: "2023",
    },
    {
      title: "Scalador",
      description: "Plataforma de escalabilidade de negócios",
      longDescription:
        "Responsável pela implementação da interface fiel ao Figma, focando em melhorias de usabilidade. Trabalhei na otimização da experiência do usuário e na criação de interfaces responsivas e acessíveis.",
      technologies: ["React", "TypeScript", "Styled Components", "Figma"],
      hasCode: false,
      type: "switch-dreams",
      year: "2025",
    },
    {
      title: "ZenMobi",
      description: "Plataforma de mobilidade",
      longDescription:
        "Fui responsável pela execução completa do frontend do projeto, desde a definição dos design patterns até a implementação final. Estruturei a arquitetura do código, defini padrões de componentização e garanti a qualidade e consistência de toda a interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Styled Components"],
      liveUrl: "https://zenmobi.com.br/sign_in",
      hasCode: false,
      type: "switch-dreams",
      year: "2024",
    },
    {
      title: "Amigo Roy",
      description: "Aplicativo mobile de assistência",
      longDescription:
        "Desenvolvi todo o frontend deste aplicativo React Native, desde a definição dos design patterns até a implementação das interfaces com base no Figma. Realizei integrações com APIs e garanti uma experiência fluida e consistente em dispositivos iOS e Android.",
      technologies: ["React Native", "TypeScript", "Styled Components", "REST APIs", "Figma"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.switchdreams.amigoroy&hl=pt_BR",
      hasCode: false,
      type: "switch-dreams",
      year: "2025",
    },
    {
      title: "Switch-UI",
      description: "Biblioteca de componentes reutilizáveis",
      longDescription:
        "Participei da criação de uma biblioteca de componentes em TypeScript para uso interno na Switch Dreams. A biblioteca inclui componentes de UI padronizados, documentados e testados, facilitando o desenvolvimento de novos projetos com consistência visual.",
      technologies: ["TypeScript", "Tailwind CSS", "Storybook", "Jest"],
      hasCode: false,
      type: "switch-dreams",
      year: "2024",
    },
    {
      title: "Landing Pages Freelance",
      description: "Páginas institucionais para clientes diversos",
      longDescription:
        "Desenvolvi duas landing pages como freelancer, sendo responsável tanto pelo design quanto pela implementação. Criei layouts modernos e responsivos, com foco em conversão e experiência do usuário, utilizando boas práticas de SEO e performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      hasCode: true,
      type: "freelance",
      year: "2024",
    },
  ],
  en: [
    {
      title: "EduQ Brasil",
      description: "Educational platform for students and teachers",
      longDescription:
        "I worked on creating prototypes in Figma and updating the interface to make it more attractive and intuitive for students. Performed API integrations and refactored existing code to improve maintainability and system performance.",
      technologies: ["React", "TypeScript", "Figma", "REST APIs", "Ruby on Rails"],
      liveUrl: "https://eduqbrasil.com.br/",
      hasCode: false,
      type: "switch-dreams",
      year: "2023-atualmente",
    },
    {
      title: "Geedee",
      description: "Business management system",
      longDescription:
        "Developed the system interface following the Figma design faithfully, with special focus on improving usability and user experience. Worked on creating reusable components and implementing intuitive navigation flows.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      liveUrl: "https://geedee.com.br/new_users/login",
      hasCode: false,
      type: "switch-dreams",
      year: "2023",
    },
    {
      title: "Scalador",
      description: "Business scalability platform",
      longDescription:
        "Responsible for implementing the interface faithful to Figma, focusing on usability improvements. Worked on optimizing user experience and creating responsive and accessible interfaces.",
      technologies: ["React", "TypeScript", "Styled Components", "Figma"],
      hasCode: false,
      type: "switch-dreams",
      year: "2025",
    },
    {
      title: "ZenMobi",
      description: "Mobility platform",
      longDescription:
        "I was responsible for the complete frontend execution of the project, from defining design patterns to final implementation. I structured the code architecture, defined componentization standards and ensured the quality and consistency of the entire interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Styled Components"],
      liveUrl: "https://zenmobi.com.br/sign_in",
      hasCode: false,
      type: "switch-dreams",
      year: "2024",
    },
    {
      title: "Amigo Roy",
      description: "Mobile assistance application",
      longDescription:
        "I developed the entire frontend of this React Native application, from defining design patterns to implementing interfaces based on Figma. Performed API integrations and ensured a smooth and consistent experience on iOS and Android devices.",
      technologies: ["React Native", "TypeScript", "Styled Components", "REST APIs", "Figma"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.switchdreams.amigoroy&hl=pt_BR",
      hasCode: false,
      type: "switch-dreams",
      year: "2023",
    },
    {
      title: "Switch-UI",
      description: "Reusable component library",
      longDescription:
        "Participated in creating a TypeScript component library for internal use at Switch Dreams. The library includes standardized, documented and tested UI components, facilitating the development of new projects with visual consistency.",
      technologies: ["TypeScript", "Tailwind CSS", "Storybook", "Jest"],
      hasCode: false,
      type: "switch-dreams",
      year: "2023",
    },
    {
      title: "Freelance Landing Pages",
      description: "Institutional pages for various clients",
      longDescription:
        "I developed two landing pages as a freelancer, being responsible for both design and implementation. Created modern and responsive layouts, focused on conversion and user experience, using SEO and performance best practices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      hasCode: true,
      type: "freelance",
      year: "2023-atualmente",
    },
  ],
}

const typeLabels = {
  pt: {
    "switch-dreams": "Switch Dreams",
    freelance: "Freelance",
    personal: "Pessoal",
  },
  en: {
    "switch-dreams": "Switch Dreams",
    freelance: "Freelance",
    personal: "Personal",
  },
}

export default function ProjectsPage() {
  const { locale, t } = useLocale()
  const projectList = projects[locale]
  const labels = typeLabels[locale]

  const pageText = {
    pt: {
      title: "Projetos",
      subtitle: "Uma seleção dos projetos que participei ao longo da minha carreira",
      back: "Voltar",
      codeNotAvailable: "Código não disponível (projeto privado)",
      viewProject: "Ver projeto",
    },
    en: {
      title: "Projects",
      subtitle: "A selection of projects I participated in throughout my career",
      back: "Back",
      codeNotAvailable: "Code not available (private project)",
      viewProject: "View project",
    },
  }

  const text = pageText[locale]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-screen-lg px-6 py-12 md:px-12 md:py-20">
        <header className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                {text.back}
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <AccentColorPicker />
              <ThemeToggle />
              <LocaleToggle />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {text.title}
          </h1>
          <p className="text-muted-foreground text-lg">{text.subtitle}</p>
        </header>

        <main className="space-y-8">
          {projectList.map((project, index) => (
            <article
              key={index}
              className="group p-6 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <Badge
                      variant="outline"
                      className="text-xs border-border text-muted-foreground"
                    >
                      {labels[project.type]}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {project.year}
                </span>
              </div>

              {project.longDescription && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.longDescription}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target={project.liveUrl === "/" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {text.viewProject}
                  </a>
                )}
                {!project.hasCode && (
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Lock className="w-3.5 h-3.5" />
                    {text.codeNotAvailable}
                  </span>
                )}
              </div>
            </article>
          ))}
        </main>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background:
            "radial-gradient(600px at 50% 200px, rgba(45, 212, 191, 0.05), transparent 80%)",
        }}
      />
    </div>
  )
}
