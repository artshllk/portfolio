"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function Menu() {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "fixed z-50 left-0 right-0 bg-background border-b border-border/25"
      )}
    >
      <nav className="container py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image alt="logo" width={60} height={45} />
        </Link>
        <ul className="md:flex hidden items-center text-[17px] gap-6 font-medium">
          {ROUTES.map((route) => {
            return (
              <li key={route.id}>
                <Link
                  href={route.path}
                  className={cn(
                    "hover:text-primary",
                    pathname === route.path && "text-primary"
                  )}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button variant>Get in Touch</Button>
      </nav>
    </header>
  );
}
