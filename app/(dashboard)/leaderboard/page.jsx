import Image from "next/image";
import React from "react";
import SIGIL from "@/public/images/icons/sigil-icon.svg";
import BG_BANNER from "@/public/images/background-banner.png";
import NFT_1 from "@/public/images/nft-1.png";
import NFT_2 from "@/public/images/nft-2.png";
import NFT_3 from "@/public/images/nft-3.png";
import NFT_4 from "@/public/images/nft-4.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const data = [
  {
    image: NFT_1,
  },
  {
    image: NFT_2,
  },
  {
    image: NFT_3,
  },
  {
    image: NFT_4,
  },
];

const invoices = [
  {
    rank: "1",
    name: "Paid",
    points: "2500",
    type: "Noble",
  },
  {
    rank: "2",
    name: "Pending",
    points: "1500",
    type: "King",
  },
  {
    rank: "3",
    name: "Unpaid",
    points: "3500",
    type: "Noble",
  },
  {
    rank: "4",
    name: "Paid",
    points: "4500",
    type: "Noble",
  },
  {
    rank: "5",
    name: "Paid",
    points: "5500",
    type: "King",
  },
  {
    rank: "6",
    name: "Pending",
    points: "2000",
    type: "Noble",
  },
  {
    rank: "7",
    name: "Unpaid",
    points: "3000",
    type: "Noble",
  },
];

export default function Leaderboard() {
  return (
    <div className="flex flex-col gap-5">
      {/* BANNER SECTION */}
      <section className="w-fit lg:w-full xl:h-32  flex flex-col xl:flex-row justify-between items-center border rounded-lg py-3 px-3.5 xl:px-6 gap-6 overflow-clip relative">
        <Image
          src={BG_BANNER}
          alt="Background Banner"
          fill
          className="absolute object-cover"
          unoptimized
        />
        <div className="flex flex-col w-full gap-1.5 z-10">
          <h1 className="text-[22px] leading-7 xl:text-[28px] text-center xl:leading-9 xl:text-left xl:text-4xl whitespace-nowrap font-waves w-full mx-auto">
            Top Earning King Lineage{" "}
          </h1>
          <div className="flex gap-2 items-center justify-center xl:justify-normal">
            <Image
              src={SIGIL}
              alt="Skull Logo"
              className="w-9 h-9 xl:w-12 xl:h-12"
            />
            <div className="flex flex-col">
              <span className="text-lg xl:text-[22px] font-gilroy font-medium">
                Cyberpunk
              </span>
              <span className="text-sm xl:text-[15px] uppercase font-gilroy font-medium">
                200 total points
              </span>
            </div>
          </div>
        </div>
        <div className="z-10 flex gap-2 w-full justify-center xl:justify-end">
          {data.map((item, i) => (
            <Image
              src={item.image}
              alt="nft-1"
              unoptimized
              className="border rounded-md w-[77px] h-[77px] xl:w-[106px] xl:h-[106px]"
              key={i}
            />
          ))}
        </div>
      </section>
      {/* LEADERBOARD SECTION */}
      <main className="w-full border rounded-lg bg-primary px-6">
        <Tabs defaultValue="all" className="mt-9">
          <TabsList className="">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="kings">Kings</TabsTrigger>
            <TabsTrigger value="nobles">Nobles</TabsTrigger>
          </TabsList>
          <TabsContent className="" value="all">
            <ScrollArea className="lg:h-full tallXL:h-72 tallXS:h-56 ">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.rank}>
                      <TableCell className="font-bold">
                        {invoice.rank}
                      </TableCell>
                      <TableCell>{invoice.name}</TableCell>
                      <TableCell>{invoice.type}</TableCell>
                      <TableCell className="text-right">
                        {invoice.points}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="kings">
            <ScrollArea className="lg:h-[30vh] tallXL:h-72 tallXS:h-56 "></ScrollArea>
          </TabsContent>
          <TabsContent value="nobles">
            <ScrollArea className="lg:h-[30vh] tallXL:h-72 tallXS:h-56 "></ScrollArea>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
