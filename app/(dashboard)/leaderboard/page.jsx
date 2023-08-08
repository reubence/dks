import Image from "next/image";
import React from "react";
import SIGIL from "@/public/images/icons/sigil-icon.svg";
import BG_BANNER from "@/public/images/background-banner.png";
import NFT_1 from "@/public/images/nft-1.png";
import NFT_2 from "@/public/images/nft-2.png";
import NFT_3 from "@/public/images/nft-3.png";
import NFT_4 from "@/public/images/nft-4.png";
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

export default function Leaderboard() {
  return (
    <>
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
    </>
  );
}
