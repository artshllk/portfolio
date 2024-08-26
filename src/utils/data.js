import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

// routes
export const ROUTES = Object.freeze([
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Resume",
    path: "/resume",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
]);

// social media
export const SOCIAL_MEDIA = Object.freeze([
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/art-shllaku/",
    icon: <Linkedin />,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/artshllk",
    icon: <Github />,
  },
]);

// Service Details
export const SERVICES = Object.freeze([
  {
    id: 1,
    name: "Automation Testing",
    icon: "/automation.png",
    description:
      "I can help you automate your web application testing using tools like Playwright, Cypress, and Jest. This can save you time and effort, and help to ensure that your application is working correctly.",
  },
  {
    id: 2,
    name: "Frontend Engineer",
    icon: "/assets/front-end.png",
    description:
      "I can develop and design user interfaces for your web application. I have experience with React.js and other frontend technologies.",
  },
  {
    id: 3,
    name: "Manual Testing",
    icon: "/manual.png",
    description:
      "I can also perform manual testing of your web application to identify any bugs or usability issues. This can be a valuable way to catch issues that automation may miss.",
  },
]);

export const PROJECTS = Object.freeze([
  {
    id: 1,
    title: "Website Portfolio",
    desc: "A personal portfolio website designed to showcase my skills and projects in Frontend Development. The layout is clean and professional, but I'm working on making the images stand out more from the design.",
    category: "Frontend Development",
    github: "https://github.com/artshllk/portfolio",
    preview: "https://artshllaku-portfolio.vercel.app/",
    image: "/assets/portfolio.png",
    stack: ["Next.js", "shadcn/ui", "Tailwind CSS", "Playwright"],
  },
  {
    id: 2,
    title: "Memory Game",
    desc: "A fun and challenging memory game where you match pairs of cards. The goal is to find all the matching pairs with as few tries as possible.",
    category: "Frontend Development",
    github: "https://github.com/artshllk/memory-game",
    preview: "https://memory-game-plum-eight.vercel.app/",
    image: "/assets/memory-game.png",
    stack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 3,
    title: "Invitation Party App",
    desc: "A party invitation app built with TypeScript, allowing you to effortlessly manage your guest list by adding and removing invitees.",
    category: "Frontend Development",
    github: "https://github.com/artshllk/party-invitation-app",
    preview: "https://party-invitation-app.vercel.app/",
    image: "/assets/party-invitation.png",
    stack: ["HTML", "CSS", "Javascript", "Typescript"],
  },
  {
    id: 4,
    title: "Speed Typing Game",
    desc: "A speed typing game to test and improve your typing speed. See how fast you can type the displayed text within a set time limit.",
    category: "Frontend Development",
    github: "https://github.com/artshllk/speed-typing-game-app",
    preview: "https://speed-typing-game-app.vercel.app/",
    image: "/assets/speed-typing-game.png",
    stack: ["HTML", "CSS", "Javascript"],
  },
]);
