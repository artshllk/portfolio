import ContactForm from "@/components/ContactForm";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import Image from "next/image";

export default function page() {
  return (
    <div className="container grid place-items-center h-screen 2xl:pt-0 pt-20">
      <div className="absolute left-0 right-0 bottom-0 top-[94px] sm:bg-accent 2xl:bg-accent">
        <Image
          src={"/world.jpg"}
          alt="map"
          width={1200}
          height={450}
          className="w-full h-full opacity-5"
        />
      </div>

      <MotionDiv
        className="z-10"
        initial="initial"
        animate="animate"
        variants={variants.moveUp}
        transition={transition.moveUp}
      >
        <div className="text-center max-w-[600px] mx-auto">
          {/* Set max width */}
          <h3>
            <span className="text-yellow-500 font-bold">Let&apos;s</span>{" "}
            collaborate to elevate <br /> your{" "}
            <span className="text-yellow-500 font-bold">project.</span>
          </h3>
          <p className="text-accent-foreground mt-5 mx-auto">
            Looking for a partner who brings technical excellence and innovative
            solutions? Whether it&apos;s enhancing automation, refining user
            interfaces, or streamlining workflows, I&apos;m here to help.
            Let&apos;s create something exceptional together.
          </p>
        </div>

        <div className="w-full max-w-[40rem] mt-8">
          <ContactForm />
        </div>
      </MotionDiv>
    </div>
  );
}
