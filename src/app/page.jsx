"use client";

import { cn } from "@/lib/utils";
import { SOCIAL_MEDIA } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionButton, MotionDiv, MotionImage } from "@/utils/motionTags";
import { DownloadIcon } from "lucide-react";
import { Luckiest_Guy } from "next/font/google";
import CV from "../../public/assets/CV.pdf";
import Script from "next/script";

const font = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});

export default function page() {
  return (
    <div
      className="h-dvh flex overflow-hidden md:flex-row flex-col items-center justify-between pt-5 w-full"
      data-qa="page-container"
    >
      <div
        className="flex-1 flex flex-col h-full justify-center space-y-6 md:items-end items-center relative max-w-xl md:ml-auto"
        data-qa="main-content"
      >
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.rise}
          transition={transition.rise}
          className="absolute flex items-center gap-x-4 md:-rotate-90 md:-left-8 -left-28 md:top-auto md:shrink-0 shrink-0 mt-[22rem] text-accent-foreground"
          data-qa="motion-div"
        >
          <MotionDiv
            className="border-4 size-14 rounded-full grid place-items-center ml-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            data-qa="animated-circle"
          >
            <div className="size-3 rounded-full bg-accent-foreground"></div>
          </MotionDiv>
          <h4 className="text-2xl w-[20rem]" data-qa="title">
            Automation Engineer
          </h4>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveRight}
          transition={transition.moveRight}
          data-qa="header"
          className={cn("md:text-right text-center", font.className)}
        >
          <h1>
            Art <br />
            <span data-qa="name">Shllaku.</span>
          </h1>
        </MotionDiv>
        <br />
        <a href={CV} download="CV" target="_blank" data-qa="download-link">
          <MotionButton
            whileHover={{ scale: 0.95 }}
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={transition.moveUp}
            data-qa="download-button"
          >
            <DownloadIcon className="mr-2" />
            Download CV
          </MotionButton>
        </a>
        <div
          className="flex items-center gap-x-4 bottom-6 left-2"
          data-qa="social-media"
        >
          {SOCIAL_MEDIA.map((item, index) => {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                data-qa={`social-media-link-${index}`}
              >
                <MotionDiv
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  variants={variants.moveUp}
                  transition={{
                    ...transition.moveUp,
                    duration: index * 0.3,
                  }}
                  initial="initial"
                  animate="animate"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                  data-qa={`social-media-icon-${index}`}
                >
                  {item.icon}
                </MotionDiv>
              </a>
            );
          })}
        </div>
      </div>
      <div
        className="flex md:max-w-[50%] max-w-lg items-end self-end justify-center w-[100%]"
        data-qa="lottie-container"
      >
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
        <lottie-player
          src="/assets/lotties/lottie.json"
          background="transparent"
          speed="1"
          direction="1"
          mode="normal"
          loop
          autoplay
          data-qa="lottie-player"
        ></lottie-player>
      </div>
    </div>
  );
}
