# Art Shllaku's Portfolio

This is the source code for my personal portfolio website built using Next.js, Shadcn UI, Tailwind CSS, Playwright, and GitHub Actions. This portfolio showcases my projects, skills, and experiences in web development and automation engineering.

## 🚀 Features

- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.
- **Project Showcase**: Displays various projects with descriptions, technology stacks, and live previews.
- **Animations**: Utilizes Framer Motion for smooth and engaging animations.
- **Interactive Components**: Features like tooltips, modals, and Swiper carousel for enhanced user experience.
- **CV Download**: Allows visitors to download my CV directly from the website.
- **Social Media Links**: Quick access to my social media profiles.
- **Playwright Tests**: Automated end-to-end tests using Playwright.
- **Continuous Integration**: Set up with GitHub Actions for automated testing and deployment.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Shadcn](https://shadcn.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Swiper Carousel**: [Swiper](https://swiperjs.com/)
- **Testing**: [Playwright](https://playwright.dev/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)

## 📂 Project Structure

```bash
├── .github/
    ├── workflows
        ├── playwright.yml  # Github action  
├── components/             # Reusable UI components
├── pages/                  # Next.js pages
│   ├── index.tsx           # Main page of the portfolio
│   ├── _app.tsx            # Application wrapper
│   └── _document.tsx       # Custom document for overriding default behavior
├── public/                 # Public assets such as images, icons, etc.
├── styles/                 # Tailwind CSS configuration
├── utils/                  # Utility to store functions, data, and configurations
└── testing/                # Testing folder
    ├── playwright          # Playwright tests
    │   ├── pageHelpers     # Page object helpers
    │   └── tests           # Test files
    └── package.json        # Playwright dependencies
```

## 🚀 Getting Started

### Clone the repository:

- **git clone https://github.com/ArtShllaku/portfolio.git**

### Install dependencies:

- **cd portfolio**
- **pnpm install**

### Run the development server:

- **pnpm dev**

### Open the website in your browser:

- **http://localhost:3000**


## 🧪 Running Tests

### Install Playwright browsers:

- **pnpm exec playwright install --with-deps**

### Run Playwright tests:

- **pnpm exec playwright test**

### View the test report:

- **pnpm exec playwright show-report**

## 🚀 Deployment

This portfolio is set up with GitHub Actions for continuous integration and deployment. Every push to the main branch will trigger a GitHub Actions workflow that runs Playwright tests and deploys the website to Vercel.

