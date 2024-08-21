import { TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { transition, variants } from "@/utils/framer_variants";
import {
  MotionButton,
  MotionDiv,
  MotionImage,
  MotionTabs,
} from "@/utils/motionTags";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-60 pb-4">
      <div className="flex md:flex-row flex-col items-center justify-between gap-7 md:gap-0 w-full">
        {/* Profile */}
        <div className="flex md:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center">
          <MotionImage
            src="/images/dddresume/profile.jpg"
            alt="profile"
            width={155}
            height={155}
            variants={variants.scale}
            transition={transition.scale}
            animate="animate"
            initial="initial"
            className="md:w-36 w-28"
          />
          <MotionDiv
            variants={variants.moveDown}
            transition={transition.moveDown}
            animate="animate"
            initial="initial"
            className="sm:text-left text-center"
          >
            <h3 className="mb-2">
              Art <span>Shllaku.</span>
            </h3>
            <h5>Kosovo</h5>
          </MotionDiv>
        </div>
        <MotionButton
          variants={variants.moveDown}
          transition={transition.moveDown}
          animate="animate"
          initial="initial"
          variant="outline"
          size="lg"
        >
          Automation Engineer
        </MotionButton>
      </div>
      {/* profile details */}
      <MotionTabs
        variants={variants.moveUp}
        transition={transition.moveUp}
        animate="animate"
        initial="initial"
        className="leading-7 mt-10"
        defaultValue="about"
      >
        {/* Tabs Menu */}
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        {/* Tabs Content */}
        <TabsContent value="about">
          <h6>Who I&apos;m</h6>
          <p className="text-accent-foreground mt-2">
            Highly motivated Automation Engineer with a Frontend background and
            extensive experience working remotely for international companies.
          </p>
          <p className="text-accent-foreground mt-2">
            Proven ability to collaborate effectively with cross-functional
            teams and contribute to innovative solutions. Expertise in testing
            methodologies and best practices using Playwright, Cypress, and
            Jest.
          </p>
        </TabsContent>

        <TabsContent value="skills">
          <h6>What I can do</h6>
          <p className="text-accent-foreground mt-2">
            <strong>JavaScript:</strong> Proficient in writing clean, efficient,
            and maintainable code using JavaScript. Experience in building
            interactive front-end applications, implementing complex logic, and
            handling asynchronous operations.
          </p>
          <p className="text-accent-foreground mt-2">
            <strong>React.js:</strong> Skilled in developing responsive and
            user-friendly web interfaces using React.js. Familiar with React
            hooks, state management, and component-based architecture.
          </p>
          <p className="text-accent-foreground mt-2">
            <strong>TypeScript:</strong> Experienced in utilizing TypeScript for
            building robust and type-safe applications. Strong understanding of
            type annotations, interfaces, and generics to enhance code quality.
          </p>
          <p className="text-accent-foreground mt-2">
            <strong>Cypress:</strong> Expertise in end-to-end testing with
            Cypress, ensuring high test coverage and reliability. Led successful
            test migrations and optimized test suites to improve performance and
            reduce flakiness.
          </p>
          <p className="text-accent-foreground mt-2">
            <strong>Playwright:</strong> Specialized in using Playwright for
            automated browser testing. Proven track record of enhancing test
            efficiency, streamlining test logic, and improving pipeline
            reliability.
          </p>
          <p className="text-accent-foreground mt-2">
            <strong>GitHub Actions:</strong> Proficient in automating CI/CD
            pipelines with GitHub Actions. Created reusable workflows to
            optimize deployment processes and enhance maintainability across
            engineering teams.
          </p>
        </TabsContent>

        <TabsContent value="experience">
          <h6>Proffesional experience</h6>
          <p className="text-accent-foreground mt-2">
            LOREM oajsdioajd
            iokmammxxmxmxcmlakmdklsmdkamkamsdksladkasdsaklsdksad
          </p>
          <p className="text-accent-foreground mt-2">
            LOREM oajsdioajd
            iokmammxxmxmxcmlakmdklsmdkamkamsdksladkasdsaklsdksad
          </p>
        </TabsContent>
      </MotionTabs>
    </div>
  );
}
