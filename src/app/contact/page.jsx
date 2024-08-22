import ContactForm from "@/components/ContactForm";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import Image from "next/image";

export default function page() {
  return (
    <div className="container grid place-items-center h-screen 2xl:pt-0 pt-20">
      <div className="absolute left-0 right-0 bottom-0 top-[94px] sm:bg-accent">
        <Image
          // src={"/map.png"}
          alt="map"
          width={1200}
          height={450}
          className="w-full h-full object-contain"
        />
      </div>

      <MotionDiv
        className="z-10"
        initial="initial"
        animate="animate"
        variants={variants.moveUp}
        transition={transition.moveUp}
      >
        <div className="text-center">
          <h3>
            <span>Contact</span> with me to sizzle <br /> your{" "}
            <span>project.</span>
          </h3>
          <p className="text-accent-foreground mt-5 w-3/4 mx-auto">
            Great designs, new generation ideas, user-centered projects. Let s
            work together now!
          </p>
        </div>

        <ContactForm />
      </MotionDiv>
    </div>
  );
}
