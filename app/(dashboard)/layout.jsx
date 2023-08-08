"use client";
import React from "react";
import Image from "next/image";

import HOME from "@/public/images/icons/home-icon.svg";
import LEADERBOARD from "@/public/images/icons/leaderboard-icon.svg";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import NavigationMenu from "@/components/navigation-menu";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import INTERLACE_LOGO from "@/public/images/interlace-logo.svg";
import WEB from "@/public/images/icons/web.svg";
import TWITTER from "@/public/images/icons/twitter-icon.svg";
import DISCORD from "@/public/images/icons/discord-icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
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
    <>
      <NavigationMenu isLoggedIn={true} />
      <div className="w-fit mx-auto lg:w-full h-full flex">
        <div className="hidden h-full w-72 border-r border-r-border lg:flex lg:flex-col lg:flex-shrink-0 justify-between">
          <div className="flex flex-col h-full pt-14">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                `justify-normal capitalize my-2 py-2 px-6 !text-3xl font-normal text-primary-foreground/40 font-wavesTiny`,
                {
                  "text-primary-foreground border-r border-r-accent":
                    active === "dashboard",
                }
              )}
            >
              <Image src={HOME} alt="DKS Logo" className="w-6 h-6 mr-3" />
              <span className="mb-1.5">Dashboard</span>
            </Link>

            <Link
              href="/leaderboard"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                `justify-normal capitalize my-2 py-2 px-6 !text-3xl font-normal text-primary-foreground/40 font-wavesTiny`,
                {
                  "text-primary-foreground border-r border-r-accent":
                    active === "leaderboard",
                }
              )}
            >
              <Image
                src={LEADERBOARD}
                alt="DKS Logo"
                className="w-6 h-6 mr-3"
              />
              <span className="mb-1.5">Leaderboard</span>
            </Link>
          </div>
          <div className="flex flex-col h-full w-full items-center justify-end py-28">
            <Image
              src={LOGO_MAIN}
              alt="DKS Logo"
              className="w-10 h-10 opacity-50"
            />
            <div className="px-6 py-4">
              <p className="flex items-center gap-2 text-muted-foreground/40 font-gilroy text-[10px] whitespace-nowrap">
                Powered by:
                <Image src={INTERLACE_LOGO} alt="DKS Logo" className="w-20" />
              </p>
            </div>
            <div className="flex gap-3">
              <Image src={WEB} alt="Web Icon" className="w-6 h-6" unoptimized />
              <Image
                src={TWITTER}
                alt="Web Icon"
                className="w-6 h-6"
                unoptimized
              />
              <Image
                src={DISCORD}
                alt="Web Icon"
                className="w-6 h-6"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="py-6 px-3.5 lg:px-8 w-full h-full flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
