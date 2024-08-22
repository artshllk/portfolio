"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return pathname === "/" ? null : (
    <footer className="border-t">
      <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 justify-between container py-3">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h3 className="sm:text-2xl text-xl">
          Bringing your ideas to life through <span>code</span> and <br />
          <span>creativity</span>.
        </h3>
      </div>
      {/* Copyright content */}
      <div className="bg-accent text-center py-8 text-accent-foreground">
        <p>Copyright @ 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
