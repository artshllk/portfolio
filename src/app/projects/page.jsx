"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0]);
  const [swiper, setSwiper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSlideChange = (item) => {
    setCurrentProject(PROJECTS[item?.activeIndex]);
  };

  const index =
    PROJECTS.findIndex((project) => project.title === currentProject.title) + 1;

  const nextTo = () => {
    swiper.slideNext();
  };

  const prev = () => {
    swiper.slidePrev();
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen container">
      <div className="mt-12">
        <MotionDiv
          animate="animate"
          initial="initial"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-10"
        >
          <h3>
            My <span>Projects</span>
          </h3>
        </MotionDiv>

        <MotionDiv
          animate="animate"
          initial="initial"
          variants={variants.moveDown}
          transition={transition.moveDown}
          className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center w-full"
        >
          <div className="flex-1 space-y-3">
            <h2 className="text-6xl font-semibold text-primary">
              {index < 10 ? `0${index}` : index}
            </h2>
            <h3>{currentProject?.title}</h3>
            <p className="w-10/12 text-accent-foreground">
              {currentProject?.desc}
            </p>
            <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
              {currentProject?.stack?.map((item) => (
                <Badge
                  key={item}
                  variant={"outline"}
                  className={"text-primary text-base"}
                >
                  {item}
                </Badge>
              ))}
            </div>
            <br />
            <div className="flex gap-x-3">
              <TooltipProvider delayDuration={200}>
                {currentProject?.github && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-200 p-2.5 rounded-full"
                      >
                        <Image
                          src="/github.png"
                          alt="GitHub"
                          width={40}
                          height={40}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {currentProject?.preview && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={currentProject.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-200 p-2.5 rounded-full"
                      >
                        <Image
                          src="/open.png"
                          alt="Live Preview"
                          width={40}
                          height={40}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Preview</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
          </div>
          {/* swiper */}
          <div className="flex-1 flex items-center flex-col">
            <Swiper
              breakpoints={{
                499: {
                  slidesPerView: 1,
                },
                999: {
                  slidesPerView: 1.4,
                },
              }}
              spaceBetween={20}
              className="w-full md:max-w-lg max-w-[250px]"
              onSlideChange={onSlideChange}
              onSwiper={(s) => setSwiper(s)}
            >
              {PROJECTS.map((project, i) => (
                <SwiperSlide
                  key={project.id}
                  className={cn(index - 1 !== i && "opacity-45")}
                  onClick={() => openModal(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={800}
                    className="rounded-2xl shadow-2xl cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex ml-6 mt-4 gap-x-4">
              <button onClick={prev} disabled={index === 1}>
                <ChevronLeft
                  width={55}
                  height={55}
                  className="cursor-pointer"
                />
              </button>

              <button onClick={nextTo} disabled={index === PROJECTS.length}>
                <ChevronRight
                  width={60}
                  height={60}
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
        </MotionDiv>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected Project"
                width={1000}
                height={800}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
