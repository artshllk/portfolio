const ExperienceSection = () => (
  <>
    <h6>Professional Experience</h6>

    <p className="text-accent-foreground mt-2">
      <strong>Automation Engineer - Fresha (London, UK) - Remote</strong> <br />
      <em>Dec 2023 - Present</em>
    </p>
    <ul className="list-disc list-inside mt-2">
      <li>
        Successfully led the migration of ~2000 E2E tests from Cypress to
        Playwright, reducing test flakes by 15% and increasing overall pipeline
        reliability.
      </li>
      <li>
        Refactored CI/CD pipelines by creating reusable actions for GitHub
        Actions, improving maintainability and increasing the deployment
        velocity of the whole engineering team.
      </li>
      <li>
        Optimized Playwright test suite efficiency and improved overall coverage
        by streamlining test logic, refining selectors, and eliminating
        unnecessary waits.
      </li>
      <li>
        Authored comprehensive documentation on Playwright best practices,
        providing guidance and hands-on support to product teams.
      </li>
      <li>
        Continuously refined and adjusted linting rules to help maintain a clean
        and consistent test codebase with minimal impact to developer
        experience.
      </li>
      <li>
        Collaborated closely with development teams, conducted thorough code
        reviews, and championed testing best practices across the organization,
        fostering a culture of quality and reliability.
      </li>
    </ul>

    <p className="text-accent-foreground mt-4">
      <strong>
        Front-End Engineer & Cypress Lead - Pabau Clinic Software (London, UK) -
        Remote
      </strong>{" "}
      <br />
      <em>Oct 2022 - Dec 2023</em>
    </p>
    <ul className="list-disc list-inside mt-2">
      <li>
        Developed reusable components and addressed critical bugs in the product
        during the initial phase as a React Engineer.
      </li>
      <li>
        Transitioned to Cypress Lead, managing a team of three, and took
        ownership of the entire E2E testing module.
      </li>
      <li>
        Implemented and maintained comprehensive test suites, ensuring robust
        test coverage and reliability.
      </li>
      <li>
        Led the transition to mock testing by successfully disconnecting Cypress
        from the database, minimizing flakiness and enhancing test stability.
      </li>
      <li>
        Streamlined the testing process by mocking necessary responses,
        significantly improving the efficiency of the testing framework.
      </li>
    </ul>

    <p className="text-accent-foreground mt-4">
      <strong>
        Junior Front-End Developer - KosovoOutSource LLC (Pristina, Kosovo)
      </strong>{" "}
      <br />
      <em>Jan 2022 - Sep 2022</em>
    </p>
    <ul className="list-disc list-inside mt-2">
      <li>
        Began learning React and its core principles, gaining hands-on
        experience with the framework.
      </li>
      <li>
        Developed simple UI components by translating Figma designs into code,
        focusing on building visually accurate and functional elements.
      </li>
      <li>
        Executed straightforward tasks, contributing to the overall UI
        development while enhancing React skills.
      </li>
    </ul>
  </>
);

export default ExperienceSection;
