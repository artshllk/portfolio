import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ExperienceSection = () => {
  return (
    <>
      <CarouselContent>
        <CarouselItem>
          <h6>Work Experience</h6>
          <p className="text-accent-foreground mt-2">
            <strong>QA Engineer – Ritech AG (Client: Advantage Solutions, US)</strong>
            <br />
            <em>Oct 2024 – Present</em>
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Built a new Playwright automation framework from scratch – covering both API and UI tests with
              scalable structure and tagging system.
            </li>
            <li>
              Automated key regression and functional flows, helping the QA team cut manual effort and
              improve release confidence.
            </li>
            <li>
              Integrated Playwright tests into CI/CD pipelines and added environment-specific configurations
              for smooth runs.
            </li>
            <li>
              Collaborated directly with developers and PMs to validate business logic and backend data
              using Postman and database checks.
            </li>
            <li>
              Created onboarding documentation and internal test guidelines to help new engineers ramp up
              quickly.
            </li>
          </ul>
        </CarouselItem>

        <CarouselItem>
          <h6>Work Experience</h6>
          <p className="text-accent-foreground mt-2">
            <strong>Automation Engineer – Fresha (London, UK) – Remote</strong>
            <br />
            <em>Aug 2023 – Oct 2024</em>
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Moved ~2000 tests from Cypress to Playwright, making tests more stable and reducing random
              failures.
            </li>
            <li>
              Improved CI/CD setup by creating reusable GitHub Actions, which helped the team deploy faster.
            </li>
            <li>
              Made Playwright tests run better by cleaning up the code and removing unnecessary waits.
            </li>
            <li>
              Wrote easy-to-follow docs for Playwright to help other teams understand and use it well.
            </li>
            <li>
              Updated linting rules to keep test code clean and consistent without making things harder for
              developers.
            </li>
            <li>
              Worked closely with developers, did code reviews, and helped bring better testing habits to the
              team.
            </li>
          </ul>
        </CarouselItem>

        <CarouselItem>
          <h6>Work Experience</h6>
          <p className="text-accent-foreground mt-4">
            <strong>
              Front-End Engineer & Cypress Lead – Pabau Clinic Software (London, UK) – Remote
            </strong>
            <br />
            <em>Apr 2022 – Jul 2023</em>
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Built reusable components and fixed important bugs while working as a React developer.
            </li>
            <li>
              Promoted to Cypress Lead, managed a team of 3, and handled all end-to-end testing.
            </li>
            <li>
              Created and maintained reliable test suites with good test coverage.
            </li>
            <li>
              Disconnected Cypress from the database by using mock data, which made tests faster and more
              stable.
            </li>
            <li>
              Improved the whole testing setup by mocking only what was needed, making the process quicker.
            </li>
          </ul>
        </CarouselItem>

        <CarouselItem>
          <h6>Work Experience</h6>
          <p className="text-accent-foreground mt-4">
            <strong>
              Junior Front-End Developer – KosovoOutSource LLC (Pristina, Kosovo)
            </strong>
            <br />
            <em>Sep 2021 – Mar 2022</em>
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Started learning React by building small projects and getting hands-on experience.
            </li>
            <li>
              Turned Figma designs into working UI components, focusing on looks and functionality.
            </li>
            <li>
              Worked on simple tasks to support the team and improve my skills in front-end development.
            </li>
          </ul>
        </CarouselItem>
      </CarouselContent>

      {/* Show buttons only on desktop */}
      <div className="hidden md:flex justify-between mt-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>

      {/* Show swipe message only on mobile */}
      <div className="flex md:hidden justify-center mt-4">
        <p className="text-sm text-yellow-400">
          Swipe right to see more experience
        </p>
      </div>
    </>
  );
};

export default ExperienceSection;