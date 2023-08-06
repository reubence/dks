"use client";

import Image from "next/image";

import * as React from "react";
import { Check, ChevronsUpDown, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import AVATAR from "@/public/images/avatar.png";
import DISCONNECT from "@/public/images/icons/disconnect-icon.svg";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function classNames() {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationMenu() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <nav className="absolute w-full bg-primary">
      <div className="absolute h-3 w-full bg-accent z-10" />
      <div className="h-[70px] px-6 pb-3 pt-[22px] relative justify-between flex">
        <div className="flex items-center text-2xl gap-2 font-waves">
          <Image src={LOGO_MAIN} alt="DKS Logo" className="w-8 h-8" />
          <span className="pt-2">DKS</span>
        </div>
        {loggedIn ? (
          <div className="relative flex items-center leading-none gap-2 text-xl font-wavesTiny">
            Alex
            <Popover>
              <PopoverTrigger>
                <Image
                  src={AVATAR}
                  alt="DKS Logo"
                  className="w-9 h-9 relative"
                />
              </PopoverTrigger>
              <PopoverContent className="inline-flex items-center">
                <Image src={DISCONNECT} alt={"Disconnect"} className="mr-2.5" />
                <span className="pb-2">Disconnect</span>
              </PopoverContent>
            </Popover>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
