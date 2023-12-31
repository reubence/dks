"use client";
import * as React from "react";
import { motion } from "framer-motion";
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
    value: "Discord Reaction Discord Reaction Discord Reaction",
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

let tabs = [
  { id: "tasks", label: "All Task (5)" },
  { id: "completed", label: "Completed" },
];

export function ArtDetails() {
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);

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
        <Tabs defaultValue="tasks" className="mt-9">
          <TabsList className="">
            {tabs.map((tab) => (
              <TabsTrigger
                className="relative"
                key={tab.id}
                value={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tasks"
                    className="absolute bottom-0 w-full h-0.5 z-10 bg-accent mix-blend-difference"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent className="" value="tasks">
            <ScrollArea className="lg:h-[24vh] xl:h-[35vh] ">
              {tasks.map((item, index) => (
                <div className="py-4 px-2 relative flex flex-col" key={index}>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={item.icon}
                        alt="DKS Logo"
                        className="w-6 h-6"
                        unoptimized
                      />
                      <h2 className="text-sm font-semibold">{item.value}</h2>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs xl:text-lg font-sans font-bold whitespace-nowrap">
                      <Image
                        src={SKULL_SMALL}
                        alt="SKULL Logo"
                        className="mr-2 "
                        unoptimized
                      />
                      {item.points} points
                    </div>
                  </div>
                  <p className="px-8 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="completed">
            <ScrollArea className="lg:h-[24vh] xl:h-[35vh] ">
              {completedTasks.map((item, index) => (
                <div className="py-4 px-2 relative flex flex-col" key={index}>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={item.icon}
                        alt="DKS Logo"
                        className="w-6 h-6"
                        unoptimized
                      />
                      <h2 className="text-sm font-semibold">{item.value}</h2>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs xl:text-lg font-sans font-bold whitespace-nowrap">
                      <Image
                        src={SKULL_SMALL}
                        alt="SKULL Logo"
                        className="mr-2 "
                        unoptimized
                      />
                      {item.points} points
                    </div>
                  </div>
                  <p className="px-8 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
