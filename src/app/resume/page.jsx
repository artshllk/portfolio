import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import { Carousel } from "@/components/ui/carousel";
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
    <div
      className="max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-60 pb-4"
      data-qa="page-container"
    >
      <div
        className="flex md:flex-row flex-col items-center justify-between gap-7 md:gap-0 w-full"
        data-qa="profile-section"
      >
        {/* Profile */}
        <div
          className="flex md:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center"
          data-qa="profile-details"
        >
          <MotionImage
            src="/art.jpeg"
            alt="profile"
            width={155}
            height={155}
            variants={variants.scale}
            transition={transition.scale}
            animate="animate"
            initial="initial"
            className="md:w-36 w-28 rounded-full"
            data-qa="profile-image"
          />
          <MotionDiv
            variants={variants.moveDown}
            transition={transition.moveDown}
            animate="animate"
            initial="initial"
            className="sm:text-left text-center"
            data-qa="profile-info"
          >
            <h3 className="mb-2" data-qa="profile-name">
              Art <span>Shllaku.</span>
            </h3>
            <h5 data-qa="profile-location">Pristina, Kosovo</h5>
          </MotionDiv>
        </div>
        <div
          className="flex flex-col gap-3 lg:flex-row md:flex-row"
          data-qa="button-section"
        >
          <MotionButton
            variants={variants.moveDown}
            transition={transition.moveDown}
            animate="animate"
            initial="initial"
            variant="outline"
            size="lg"
            data-qa="automation-engineer-button"
          >
            Automation Engineer
          </MotionButton>
          <MotionButton
            variants={variants.moveUp}
            transition={transition.moveUp}
            animate="animate"
            initial="initial"
            variant="outline"
            size="lg"
            data-qa="frontend-engineer-button"
          >
            Frontend Engineer
          </MotionButton>
        </div>
      </div>
      {/* profile details */}
      <MotionTabs
        variants={variants.moveUp}
        transition={transition.moveUp}
        animate="animate"
        initial="initial"
        className="leading-7 mt-10"
        defaultValue="about"
        data-qa="tabs"
      >
        {/* Tabs Menu */}
        <TabsList data-qa="tabs-list">
          <TabsTrigger value="about" data-qa="about-tab">
            About
          </TabsTrigger>
          <TabsTrigger value="skills" data-qa="skills-tab">
            Skills
          </TabsTrigger>
          <TabsTrigger value="experience" data-qa="experience-tab">
            Experience
          </TabsTrigger>
        </TabsList>
        {/* Tabs Content */}
        <TabsContent value="about" data-qa="about-content">
          <AboutSection />
        </TabsContent>

        <TabsContent value="skills" data-qa="skills-content">
          <SkillsSection />
        </TabsContent>

        <Carousel data-qa="carousel">
          <TabsContent value="experience" data-qa="experience-content">
            <ExperienceSection />
          </TabsContent>
        </Carousel>
      </MotionTabs>
    </div>
  );
}
