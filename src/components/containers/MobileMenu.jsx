import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";

export default function MobileMenu({ pathname }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <Drawer open={open}>
      <DrawerTrigger asChild className="md:hidden" onClick={handleOpen}>
        <Button variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>

      {/* Menu List */}
      <DrawerContent>
        <DrawerClose
          onClick={handleOpen}
          className="flex justify-end px-10 text-lg text-center w-full text-accent-foreground"
        >
          <Button variant="outline">X</Button>
        </DrawerClose>
        <div className="max-w-sm mx-auto w-full">
          <DrawerHeader className={"list-none space-y-6"}>
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
          </DrawerHeader>

          <DrawerFooter className={"pb-10"}>
            <Button variant="outline" className="md:hidden mx-auto">
              Get in Touch
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
