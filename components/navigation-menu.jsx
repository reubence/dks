"use client";

import Image from "next/image";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import AVATAR from "@/public/images/avatar.png";
import DISCONNECT from "@/public/images/icons/disconnect-icon.svg";
import HOME from "@/public/images/icons/home-icon.svg";
import LEADERBOARD from "@/public/images/icons/leaderboard-icon.svg";

import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames() {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationMenu({ isLoggedIn }) {
  const pathname = usePathname();
  const [active, setActive] = React.useState(
    pathname === "/dashboard" ? "dashboard" : "leaderboard"
  );

  React.useEffect(() => {
    if (pathname === "/dashboard") {
      setActive("dashboard");
    } else if (pathname === "/leaderboard") {
      setActive("leaderboard");
    }
  }, [pathname]);

  return (
    <nav className="w-full bg-primary">
      <div className="absolute h-3 w-full bg-accent z-10" />
      <div className="h-[70px] px-6 pb-3 pt-[22px] relative justify-between flex">
        <div className="flex items-center text-2xl gap-2 font-waves">
          <Image
            src={LOGO_MAIN}
            alt="DKS Logo"
            className="w-8 h-8"
            unoptimized
          />
          <span className="pt-2">DKS</span>
        </div>
        {isLoggedIn ? (
          <div className="relative flex items-center leading-none gap-2 text-xl font-wavesTiny">
            Alex
            <Popover>
              <PopoverTrigger>
                <Image
                  src={AVATAR}
                  alt="DKS Logo"
                  className="w-9 h-9 relative"
                  unoptimized
                />
              </PopoverTrigger>
              <PopoverContent className="inline-flex items-center">
                <Image
                  src={DISCONNECT}
                  alt={"Disconnect"}
                  className="mr-2.5"
                  unoptimized
                />
                <span className="pb-2">Disconnect</span>
              </PopoverContent>
            </Popover>
            <div className="ml-4 lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_105_130)">
                      <path
                        d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_105_130">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col h-full pt-14">
                    <Link
                      href="/dashboard"
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        `justify-normal capitalize my-2 py-2 px-6 !text-3xl font-normal text-primary-foreground/40 font-wavesTiny hover:bg-background/30`,
                        {
                          "text-primary-foreground": active === "dashboard",
                        }
                      )}
                    >
                      <Image
                        src={HOME}
                        alt="DKS Logo"
                        className="w-6 h-6 mr-3"
                        unoptimized
                      />
                      <span className="mb-1.5">Dashboard</span>
                    </Link>

                    <Link
                      href="/leaderboard"
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        `justify-normal capitalize my-2 py-2 px-6 !text-3xl font-normal text-primary-foreground/40 font-wavesTiny hover:bg-background/30`,
                        {
                          "text-primary-foreground": active === "leaderboard",
                        }
                      )}
                    >
                      <Image
                        src={LEADERBOARD}
                        alt="DKS Logo"
                        className="w-6 h-6 mr-3"
                        unoptimized
                      />
                      <span className="mb-1.5">Leaderboard</span>
                    </Link>

                    <Button
                      variant="ghost"
                      className={cn(
                        `justify-normal capitalize my-2 py-2 px-6 !text-3xl font-normal text-primary-foreground/40 font-wavesTiny hover:bg-background/30`,
                        {
                          "text-primary-foreground": active === "disconnect",
                        }
                      )}
                    >
                      <Image
                        src={DISCONNECT}
                        alt="DKS Logo"
                        className="w-6 h-6 mr-3"
                        unoptimized
                      />
                      <span className="mb-1.5">Disconnect</span>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
