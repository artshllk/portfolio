import { cn } from "@/lib/utils";
import { SOCIAL_MEDIA } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionButton, MotionDiv, MotionImage } from "@/utils/motionTags";
import { DownloadIcon } from "lucide-react";
import { Luckiest_Guy } from "next/font/google";

const luck = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});

export default function page() {
  return (
    <div className="h-dvh flex overflow-hidden md:flex-row flex-col items-center justify-between pt-5 w-full">
      <div className="flex-1 flex flex-col h-full justify-center space-y-6 md:items-end items-center relative max-w-xl md:ml-auto">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.rise}
          transition={transition.rise}
          className="absolute flex items-center gap-x-4 -rotate-90 md:-left-8 -left-28 md:top-auto top-96 text-accent-foreground"
        >
          <MotionDiv
            className="border-4 size-14 rounded-full grid place-items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
          >
            <div className="size-3 rounded-full bg-accent-foreground"></div>
          </MotionDiv>
          <h4 className="text-2xl">Automation Engineer</h4>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveRight}
          transition={transition.moveRight}
          className={cn("md:text-right text-center", luck.className)}
        >
          <h1>
            Art <br />
            <span>Shllaku.</span>
          </h1>
        </MotionDiv>
        <br />
        <MotionButton
          whileHover={{ scale: 0.95 }}
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
        >
          <DownloadIcon className="mr-2" />
          Download CV
        </MotionButton>

        <div className="flex items-center gap-x-3 md:absolute bottom-6 left-2">
          {SOCIAL_MEDIA.map((item, index) => {
            return (
              <MotionImage
                key={item.id}
                src={item.icon}
                alt={item.name}
                height={25}
                width={25}
                whileHover={{ scale: 1.1 }}
                variants={variants.moveUp}
                transition={{
                  ...transition.moveUp,
                  duration: index * 0.4,
                }}
                initial="initial"
                animate="animate"
                className="object-cover cursor-pointer max-h-full"
              />
            );
          })}
        </div>
      </div>
      <div className="flex md:max-w-[50%] max-w-lg items-end self-end">
        <MotionImage
          alt="art"
          height={720}
          width={720}
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={{
            ...transition.moveLeft,
            duration: 1.2,
          }}
          className="object-cover max-h-full "
        />
      </div>
    </div>
  );
}
