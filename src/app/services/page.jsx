import { Button } from "@/components/ui/button";
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
          <h3>
            Services <span>Offered</span>
          </h3>
        </MotionDiv>

        <div
          className="flex flex-wrap justify-center gap-8 mt-11"
          data-qa="services-list"
        >
          {SERVICES.map((service, index) => {
            return (
              <MotionDiv
                key={service.id}
                className="bg-accent p-5 cursor-pointer overflow-hidden group h-[20rem] rounded-3xl w-64 flex flex-col justify-between xl:w-[300px] lg:w-[300px]"
                initial="initial"
                animate="animate"
                variants={variants.moveRight}
                transition={{
                  ...transition.moveRight,
                  delay: index * 0.6,
                }}
                data-qa={`service-item-${service.id}`}
              >
                <div
                  className="flex flex-col justify-center items-center"
                  data-qa={`service-content-${service.id}`}
                >
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={55}
                    height={55}
                    data-qa={`service-icon-${service.id}`}
                  />
                  <h3 data-qa={`service-name-${service.id}`}>
                    <span>{service.name.split(" ")[0]}</span>
                    &nbsp;
                    {service.name.split(" ")[1]}
                  </h3>
                  <small
                    className="text-accent-foreground mt-6 text-base text-center"
                    data-qa={`service-description-${service.id}`}
                  >
                    {service.description}
                  </small>
                </div>
                {/* <div className="flex justify-end mt-2">
                  <Button
                    variant="plain"
                    className="align-self-flex-end"
                    size="sm" 
                  >
                    Learn more
                  </Button>
                </div> */}
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </div>
  );
}
