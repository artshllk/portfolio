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
          Discover a <span>gateway</span> to unparalleled <br />
          <span>design</span> creativity.
        </h3>
      </div>
      {/* Copyright content */}
      <div className="bg-accent text-center py-8 text-accent-foreground">
        <p>Copyright @ 2024. All right reserved.</p>
      </div>
    </footer>
  );
}
