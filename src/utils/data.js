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
      "I can help automate your web application testing using tools like Playwright, Cypress, Selenium, and Jest. By automating tests, I help save time and ensure your application works correctly across different environments.",
  },
  {
    id: 2,
    name: "Frontend Development",
    icon: "/assets/front-end.png",
    description: 
      "I specialize in building user-friendly web interfaces. Using technologies like JavaScript, React.js, TypeScript, and Next.js, I can bring your ideas to life with responsive and clean designs that enhance user experience.",
  },
  {
    id: 3,
    name: "Manual Testing",
    icon: "/manual.png",
    description:
      "I also perform thorough manual testing to find bugs and usability issues that automated tests may miss. This can help ensure a better user experience and catch edge cases in your web app.",
  },
  {
    id: 4,
    name: "Mobile Testing",
    icon: "/assets/beta-testing.png",
    description:
      "I test websites and apps on multiple devices to ensure they work well on both mobile and desktop. This helps make sure that your users have a great experience, regardless of the device they use.",
  },
  {
    id: 5,
    name: "CI/CD Setup with GitHub Actions",
    icon: "/assets/cicd.png",
    description:
      "I set up continuous integration and continuous delivery (CI/CD) pipelines using GitHub Actions. This automates testing and deployment, improving the speed and reliability of your workflow.",
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
    stack: [
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
      "Playwright",
      "Github Actions",
    ],
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
