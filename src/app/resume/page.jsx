import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
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
            src="/art.jpeg"
            alt="profile"
            width={155}
            height={155}
            variants={variants.scale}
            transition={transition.scale}
            animate="animate"
            initial="initial"
            className="md:w-36 w-28 rounded-full"
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
            <h5>Pristina, Kosovo</h5>
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
          <AboutSection />
        </TabsContent>

        <TabsContent value="skills">
          <SkillsSection />
        </TabsContent>

        {/* Feature: Experience section can be better to make as carosel */}
        <TabsContent value="experience">
          <ExperienceSection />
        </TabsContent>
      </MotionTabs>
    </div>
  );
}
