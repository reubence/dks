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
import INTERLACE_LOGO from "@/public/images/interlace-logo.svg";
import WEB from "@/public/images/icons/web.svg";
import TWITTER from "@/public/images/icons/twitter-icon.svg";
import DISCORD from "@/public/images/icons/discord-icon.svg";

import DISCONNECT from "@/public/images/icons/disconnect-icon.svg";
import HOME from "@/public/images/icons/home-icon.svg";
import LEADERBOARD from "@/public/images/icons/leaderboard-icon.svg";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames() {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationMenu({ isLoggedIn }) {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = React.useState();
  const [active, setActive] = React.useState(
    pathname === "/dashboard" ? "dashboard" : "leaderboard"
  );

  console.log(sheetOpen);
  React.useEffect(() => {
    if (pathname === "/dashboard") {
      setActive("dashboard");
    } else if (pathname === "/leaderboard") {
      setActive("leaderboard");
    }
  }, [pathname]);

  if (sheetOpen) {
    document.body.style.pointerEvents = "auto";
  }

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
                <Link href={"#"} className="pb-2">
                  Disconnect
                </Link>
              </PopoverContent>
            </Popover>
            <div className="ml-4 lg:hidden relative">
              <Sheet
                onOpenChange={() => {
                  setSheetOpen(!sheetOpen);
                }}
              >
                <SheetTrigger>
                  {!sheetOpen ? (
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
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 17H18V16H17V15H16V14H15V13H14V12H13V11H12V10H11V9H10V8H9V7H8V6H6V8H7V9H8V10H9V11H10V12H11V13H12V14H13V15H14V16H15V17H16V18H17V19H19V17Z"
                        fill="white"
                      />
                      <path
                        d="M6 17H7V16H8V15H9V14H10V13H11V12H12V11H13V10H14V9H15V8H16V7H17V6H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H11V16H10V17H9V18H8V19H6V17Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </SheetTrigger>
                <SheetContent className="h-full flex flex-col" side="left">
                  <div className="flex flex-col h-full pt-7 sm:pt-14">
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
                  <div className="flex flex-col h-full w-full items-center justify-end py-28">
                    <Image
                      src={LOGO_MAIN}
                      alt="DKS Logo"
                      className="w-10 h-10 opacity-50"
                      unoptimized
                    />
                    <div className="px-6 py-4">
                      <p className="flex items-center gap-2 text-muted-foreground/40 font-gilroy text-[10px] whitespace-nowrap">
                        Powered by:
                        <Image
                          src={INTERLACE_LOGO}
                          alt="DKS Logo"
                          className="w-20"
                          unoptimized
                        />
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Link href="#">
                        <Image
                          src={WEB}
                          alt="Web Icon"
                          className="w-6 h-6"
                          unoptimized
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          src={TWITTER}
                          alt="Web Icon"
                          className="w-6 h-6"
                          unoptimized
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          src={DISCORD}
                          alt="Web Icon"
                          className="w-6 h-6"
                          unoptimized
                        />
                      </Link>
                    </div>
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
