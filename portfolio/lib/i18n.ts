export type Locale = "pt" | "en"

export const translations = {
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      role: "Estudante de Engenharia de Software e Sistemas Embarcados",
      description:
        "Engenheira de software em formação que gosta de transformar problemas do mundo real em software funcional. Mais de 3 anos de experiência em desenvolvimento web e sistemas embarcados, com TypeScript, Python e Ruby on Rails. Disponível para estágio a partir de abril de 2027.",
      location: "Caen, França",
      university:
        "Estudante de Sistemas Embarcados no ENSICAEN e de Engenharia de Software na UnB (dupla diplomação)",
    },
    nav: {
      about: "SOBRE",
      experience: "EXPERIÊNCIA",
      projects: "PROJETOS",
    },
    about: {
      title: "Sobre",
      content: [
        "Sou engenheira de software com mais de 3 anos de experiência na criação de interfaces web responsivas e acessíveis. Na Switch Dreams, comecei como estagiária e fui promovida a desenvolvedora júnior, trabalhando com React.js, TypeScript e Ruby on Rails, planejando arquiteturas de design systems e colaborando em times ágeis.",
        "Curso dupla diplomação em Engenharia de Software na Universidade de Brasília (UnB) e em Engenharia Física e Sistemas Embarcados no ENSICAEN, na França. Essa combinação me permite atuar com confiança na fronteira entre software e hardware.",
        "Além das disciplinas, liderei a parte de software de um sistema de monitoramento de qualidade da água em tempo real e desenvolvi o AURORA, um software de automação do posicionamento de antenas com sensores em tempo real, no LabTelecom da UnB. Também atuei como monitora de Cálculo 1 e 2.",
        "Atualmente busco um estágio de 4 meses em desenvolvimento de software a partir de abril de 2027.",
      ],
    },
    experience: {
      title: "Experiência",
      viewResume: "Ver currículo completo",
      present: "2026",
    },
    projects: {
      title: "Projetos",
      viewAll: "Ver todos os projetos",
      codeNotAvailable: "Código não disponível",
    },
    skills: {
      title: "Habilidades",
    },
    footer: {
      builtWith: "Construído com",
      and: "e",
      deployedOn: "Publicado na",
      copyright: "Todos os direitos reservados.",
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      role: "Software & Embedded Engineering Student",
      description:
        "Software engineer in training who enjoys turning real-world problems into working software. 3+ years of experience across web development and embedded systems, with TypeScript, Python and Ruby on Rails. Available for an internship from April 2027.",
      location: "Caen, France",
      university:
        "Embedded Systems student at ENSICAEN & Software Engineering student at UnB (double degree)",
    },
    nav: {
      about: "ABOUT",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
    },
    about: {
      title: "About",
      content: [
        "I’m a software engineer with 3+ years of experience building responsive, accessible web interfaces. At Switch Dreams, I started as an intern and was promoted to junior developer, working with React.js, TypeScript and Ruby on Rails, planning design system architectures and collaborating in Agile teams.",
        "I’m pursuing a double degree in Software Engineering at the University of Brasília (UnB) and in Physics Engineering and Embedded Systems at ENSICAEN, in France. This combination lets me work comfortably where software meets hardware.",
        "Beyond coursework, I led the software side of a real-time water quality monitoring system and developed AURORA, an antenna positioning automation software with real-time sensors, at UnB’s LabTelecom. I’ve also worked as a Calculus 1 and 2 tutor.",
        "I’m currently looking for a 4-month software development internship starting April 2027.",
      ],
    },
    experience: {
      title: "Experience",
      viewResume: "View full resume",
      present: "2026",
    },
    projects: {
      title: "Projects",
      viewAll: "View all projects",
      codeNotAvailable: "Code not available",
    },
    skills: {
      title: "Skills",
    },
    footer: {
      builtWith: "Built with",
      and: "and",
      deployedOn: "Deployed on",
      copyright: "All rights reserved.",
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}