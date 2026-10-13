"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import {
  BlueprintIcon,
  CowboyHatIcon,
  HouseLineIcon
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { Route } from "next";

type RouteKeys = "docs" | "about" | "home";

type NavItem = {
  path: Route;
  icon: Icon;
  label: RouteKeys;
};

const routeMaps: NavItem[] = [
  {
    path: "/docs",
    icon: BlueprintIcon,
    label: "docs",
  },
  {
    path: "/",
    icon: HouseLineIcon,
    label: "home"
  },
  {
    path: "/who",
    icon: CowboyHatIcon,
    label: "about",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background pt-3 flex flex-col justify-center h-9">
      <nav className="flex w-full flex-wrap center gap-10">
        {routeMaps.map(({ path, icon: IconComponent, label }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={label}
              href={path}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-col items-center justify-center",
                isActive && "text-primary",
              )}
            >
              <IconComponent weight="bold" aria-hidden="true" />
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
