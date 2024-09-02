import { SERVICES } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import Image from "next/image";

export default function page() {
  return (
    <div
      className="container min-h-screen grid place-items-center pb-7 pt-32"
      data-qa="services-container"
    >
      <div>
        <MotionDiv
          className="text-center"
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          data-qa="services-header"
        >
          <h2>
            What I <span>Offer</span>
          </h2>
        </MotionDiv>

        <div
          className="flex flex-wrap justify-center gap-8 mt-11"
          data-qa="services-list"
        >
          {SERVICES.map(({ id, icon, name, description }, index) => (
            <MotionDiv
              key={id}
              className="bg-accent p-5 cursor-pointer overflow-hidden group h-[20rem] rounded-3xl sm:w-64 md:w-80 lg:w-[300px] flex flex-col justify-between w-80"
              initial="initial"
              animate="animate"
              variants={variants.moveRight}
              transition={{
                ...transition.moveRight,
                delay: index * 0.6,
              }}
              data-qa={`service-item-${id}`}
            >
              <div
                className="flex flex-col justify-center items-center text-center"
                data-qa={`service-content-${id}`}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={55}
                  height={55}
                  data-qa={`service-icon-${id}`}
                />
                <h3
                  className="text-2xl font-semibold mt-4 break-words"
                  data-qa={`service-name-${id}`}
                >
                  <span>{name.split(" ")[0]}</span>
                  &nbsp;
                  {name.split(" ")[1]}
                </h3>
                <small
                  className="text-accent-foreground mt-6 text-base text-center"
                  data-qa={`service-description-${id}`}
                >
                  {description}
                </small>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
