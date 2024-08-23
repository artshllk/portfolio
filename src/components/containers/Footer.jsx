"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  return (
    <footer>
      {/* Copyright content */}
      <div className="bg-accent text-center py-8 text-accent-foreground">
        <p>Copyright @ 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
