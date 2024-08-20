import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/containers/Menu";

const anek = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Art Shllaku - Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-background", anek.className)}>
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
}
