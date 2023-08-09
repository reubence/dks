"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";

import SIGIL from "@/public/images/icons/sigil-icon.svg";
import BLOODLINE from "@/public/images/icons/bloodline-icon.svg";

import TWITTER from "@/public/images/icons/twitter-icon.svg";
import SKULL_SMALL from "@/public/images/icons/skull-logo-small.svg";
import DISCORD from "@/public/images/icons/discord-icon.svg";

import Image from "next/image";

const stats = [
  {
    icon: SIGIL,
    value: "Sigil",
  },
  {
    icon: BLOODLINE,
    value: "Bloodline",
  },
];

const completedTasks = [
  {
    icon: TWITTER,
    value: "Twitter PFP",
    points: 200,
    description: "User is awarded for using NFT as Twitter",
  },
  {
    icon: DISCORD,
    value: "Discord Reaction",
    points: 240,
    description: "User is awarded for Reacting to the latest annoucement",
  },
];

const tasks = [
  {
    icon: DISCORD,
    value: "Discord Reaction",
    points: 200,
    description: "User is awarded for Reacting to the latest annoucement",
  },
  {
    icon: TWITTER,
    value: "Twitter PFP",
    points: 220,
    description: "User is awarded for using NFT as Twitter",
  },
  {
    icon: DISCORD,
    value: "Discord Reaction",
    points: 250,
    description: "User is awarded for Reacting to the latest annoucement",
  },
  {
    icon: DISCORD,
    value: "Discord Reaction",
    points: 200,
    description: "User is awarded for Reacting to the latest annoucement",
  },
  {
    icon: TWITTER,
    value: "Twitter PFP",
    points: 240,
    description: "User is awarded for using NFT as Twitter",
  },
  {
    icon: DISCORD,
    value: "Discord Reaction",
    points: 200,
    description: "User is awarded for Reacting to the latest annoucement",
  },
];
export function ArtDetails() {
  return (
    <Card className="relative border-none shadow-none bg-transparent z-10 flex-1">
      <CardHeader className="relative">
        <CardTitle>The Cyberpunk King</CardTitle>
        <CardDescription className="">
          Points <span className="text-accent font-bold">98</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="flex justify-center items-center lg:justify-normal lg:items-start gap-6">
          {stats.map((stat) => (
            <div
              className="flex flex-col items-center gap-2.5 justify-center p-2 border w-28 rounded-lg"
              key={stat.value}
            >
              <Image src={stat.icon} width={47} height={47} unoptimized />
              <span className="text-lg font-gilroy">{stat.value}</span>
            </div>
          ))}
        </div>
        <Tabs defaultValue="account" className="mt-9">
          <TabsList className="">
            <TabsTrigger value="account">All Task (5)</TabsTrigger>
            <TabsTrigger value="password">Completed</TabsTrigger>
          </TabsList>
          <TabsContent className="" value="account">
            <ScrollArea className="lg:h-[30vh] tallXL:h-72 tallXS:h-56 ">
              {tasks.map((item, index) => (
                <div className="py-4 px-2 relative" key={index}>
                  <div className="flex gap-2">
                    <Image
                      src={item.icon}
                      alt="DKS Logo"
                      className="w-6 h-6"
                      unoptimized
                    />
                    <h2 className="text-sm font-semibold">{item.value}</h2>
                  </div>
                  <p className="px-9 pt-1 text-sm font-gilroy text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="absolute right-2 top-4 flex items-center justify-center gap-2 text-xs xl:text-lg font-sans font-bold">
                    <Image
                      src={SKULL_SMALL}
                      alt="SKULL Logo"
                      className="mr-2 "
                      unoptimized
                    />
                    {item.points} points
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="password">
            <ScrollArea className="lg:h-[30vh] tallXL:h-72 tallXS:h-56 ">
              {completedTasks.map((item, index) => (
                <div className="py-4 px-2 relative" key={index}>
                  <div className="flex gap-2">
                    <Image
                      src={item.icon}
                      alt="DKS Logo"
                      className="w-6 h-6"
                      unoptimized
                    />
                    <h2 className="text-sm font-semibold">{item.value}</h2>
                  </div>
                  <p className="px-9 pt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="absolute right-2 top-4 flex items-center justify-center gap-2 text-xs xl:text-lg font-sans font-bold">
                    <Image
                      src={SKULL_SMALL}
                      alt="SKULL Logo"
                      className="mr-2 "
                      unoptimized
                    />
                    {item.points} points
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
