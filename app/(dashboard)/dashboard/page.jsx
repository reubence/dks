import React from "react";

import NFT_1 from "@/public/images/nft-1.png";
import Image from "next/image";
import { ArtDetails } from "@/components/art-details";
import ImageSlider from "@/components/image-slider";

export default function Dashboard() {
  return (
    <div className="py-6 px-8 w-full h-full flex flex-col items-start">
      <header>
        <div className="mx-auto w-full">
          <h1 className="text-4xl font-waves">Turnt Up Dylan</h1>
        </div>
      </header>
      <main className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row mx-auto w-full border mt-4 bg-primary rounded-2xl">
          <section className="flex flex-col p-5">
            <div className="flex relative w-[75vw] max-w-[400px] mx-auto lg:mr-0">
              {/* <Image src={NFT_1} alt="Logo" className="w-[50vw]" /> */}
              <ImageSlider />
            </div>
            <span className="text-center mt-5 font-gilroy font-normal leading-5">
              98 points
            </span>
          </section>
          <ArtDetails />
        </div>
      </main>
    </div>
  );
}
