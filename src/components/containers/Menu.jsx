"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
import { MotionButton, MotionImage, MotionList } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framer_variants";

export default function Menu() {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "fixed z-50 left-0 right-0",
        pathname !== "/" && "bg-background border-b border-border/25"
      )}
    >
      <nav className="container py-4 flex justify-between items-center">
        <Link href={"/"}>
          <MotionImage
            src="/logo.png"
            alt="logo"
            width={60}
            height={45}
            variants={variants.scale}
            transition={transition.scale}
            animate="animate"
            initial="initial"
          />
        </Link>
        <ul className="md:flex hidden items-center text-[17px] gap-6 font-medium">
          {ROUTES.map((route, index) => {
            return (
              <MotionList
                key={route.id}
                variants={variants.moveDown}
                animate="animate"
                initial="initial"
                transition={{
                  ...transition.moveDown,
                  delay: index * 0.3,
                }}
              >
                <Link
                  href={route.path}
                  className={cn(
                    "hover:text-primary",
                    pathname === route.path && "text-primary"
                  )}
                >
                  {route.name}
                </Link>
              </MotionList>
            );
          })}
        </ul>
        <Link href="/contact">
          <MotionButton
            variant="outline"
            className="md:inline-block hidden"
            variants={variants.moveLeft}
            transition={transition.moveLeft}
            animate="animate"
            initial="initial"
          >
            Get in Touch
          </MotionButton>
        </Link>
        <MobileMenu pathname={pathname} />
      </nav>
    </header>
  );
}
