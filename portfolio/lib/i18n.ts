export type Locale = "pt" | "en"

export const translations = {
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedora Frontend Pleno",
      description:
        "Crio interfaces acessíveis e responsivas combinando design cuidadoso com engenharia robusta. Atualmente trabalho na Switch Dreams, desenvolvendo soluções web para diversos clientes com React, TypeScript, Tailwind e Ruby on Rails.",
      location: "Brasília, DF",
      university: "Estudante de Eng. de Software na UnB",
    },
    nav: {
      about: "SOBRE",
      experience: "EXPERIÊNCIA",
      projects: "PROJETOS",
    },
    about: {
      title: "Sobre",
      content: [
        "Sou desenvolvedora frontend na Switch Dreams, onde planejo arquiteturas de design systems e desenvolvo interfaces responsivas e acessíveis usando React.js, Ruby on Rails, TypeScript e diversas outras tecnologias.",
        "Atualmente curso Engenharia de Software na Universidade de Brasília (UnB), onde combino conhecimento acadêmico com experiência prática em projetos reais.",
        "Além do trabalho, participo de projetos extracurriculares como desenvolvimento de software para antenas de satélite e sistemas de qualidade de água, e já atuei como monitora de Cálculo 1 e 2 na UnB.",
      ],
    },
    experience: {
      title: "Experiência",
      viewResume: "Ver currículo completo",
      present: "Presente",
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
      role: "Mid-Level Frontend Developer",
      description:
        "I build accessible and responsive interfaces combining thoughtful design with solid engineering. Currently working at Switch Dreams, developing web solutions for various clients with React, TypeScript, Tailwind and Ruby on Rails.",
      location: "Brasília, Brazil",
      university: "Software Engineering student at UnB",
    },
    nav: {
      about: "ABOUT",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
    },
    about: {
      title: "About",
      content: [
        "I'm a frontend developer at Switch Dreams, where I plan design system architectures and develop responsive and accessible interfaces using React.js, Ruby on Rails, TypeScript and various other technologies.",
        "I'm currently pursuing a Software Engineering degree at University of Brasília (UnB), combining academic knowledge with hands-on experience in real-world projects.",
        "Besides work, I participate in extracurricular projects such as satellite antenna software development and water quality systems, and I've worked as a Calculus 1 and 2 tutor at UnB.",
      ],
    },
    experience: {
      title: "Experience",
      viewResume: "View full resume",
      present: "Present",
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
