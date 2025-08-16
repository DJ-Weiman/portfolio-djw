import dema from '../public/dema_library.png'
import spaceRep from '../public/space_rep.png'
import portfolio from '../public/portfolio.png'


export const projectsData = [
  {
    image: dema.src,
    title: "Dema Library",
    description: "A full-stack library management system built with React and SpringBoot. It allows users to search for books, manage their accounts, and track borrowed items.",
    techs: ["React", "SpringBoot", "NextJS", "Tailwind", "Typescript", "Java", "PostgreSQL"],
    githubUrl: "https://github.com/DJ-Weiman/DemaLibrary.git",
    liveUrl: "https://dema-library-fe-git-prod-dion-weimans-projects.vercel.app/",
  },
  {
    image: spaceRep.src,
    title: "SpaceRep",
    description: "Full-stack interview prep & Learning platform. Allows users to create cards containing questions with personal as well as AI-generated answers for quick reference.",
    techs: ["SpringBoot", "React", "Java", "PostgreSQL", "MongoDB", "RabbitMQ", "Docker"],
    githubUrl: "https://github.com/DJ-Weiman/Space_Rep_BE.git",
  },
  {
    image: portfolio.src,
    title: "Personal Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experience.", 
    techs: ["React", "NextJS", "TailwindCSS", "Typescript"],
    githubUrl: "https://github.com/DJ-Weiman/portfolio-djw.git"
  },
];

export const CVLink = "https://drive.google.com/file/d/1fr1hUp71jZhrWr5Cx-qqudTO1OKZ2KG_/view?usp=sharing"