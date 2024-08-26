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
    title: "Speed Typing Game",
    desc: "This is a speed typing game where you can test how fast you can type the word",
    category: "Frontend Developement",
    github: "https://github.com/artshllk/speed-typing-game-app",
    preview: "https://speed-typing-game-app.vercel.app/",
    image: "/assets/speed-typing-game.png",
    stack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Memory game",
    desc: "This is a memory game when you need to pick two card together",
    category: "Frontend Developement",
    github: "https://github.com/artshllk/memory-game",
    preview: "https://memory-game-plum-eight.vercel.app/",
    image: "/assets/memory-game.png",
    stack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 3,
    title: "Invitation party",
    desc: "This is an invitation party build with Typescript where you can add and remove people that you want to invite",
    category: "Frontend Developement",
    github: "https://github.com/artshllk/party-invitation-app",
    preview: "https://party-invitation-app.vercel.app/",
    image: "/assets/party-invitation.png",
    stack: ["HTML", "CSS", "Javascript", "Typescript"],
  },
  // {
  //   id: 4,
  //   title: "Restaurant site",
  //   desc: "Simple resturant site",
  //   category: "Frontend Developement",
  //   image: "/photo1.png",
  //   stack: ["React.js"],
  // },
  // {
  //   id: 5,
  //   title: "Characters app",
  //   desc: "Basic characters up which was build using apollo graphql and with react",
  //   category: "FullStack Developement",
  //   image: "/photo1.png",
  //   stack: ["React.js", "Graphql", "Apollo"],
  // },
]);
