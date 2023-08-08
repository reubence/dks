import React from "react";

import NFT_1 from "@/public/images/nft-1.png";
import Image from "next/image";
import { ArtDetails } from "@/components/art-details";
import ImageSlider from "@/components/image-slider";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";

export default function Dashboard() {
  return (
    <>
      <header>
        <div className="mx-auto w-full lg:flex lg:justify-between">
          <h1 className="text-[28px] text-center lg:text-left lg:text-4xl font-waves w-full mx-auto">
            Turnt Up Dylan
          </h1>
          <div className="hidden lg:flex w-full gap-2 whitespace-nowrap items-center justify-end">
            Owns 1 DKS NFT
            <Image
              src={LOGO_MAIN}
              alt=" Logo"
              className="w-8 h-8 mb-2"
              unoptimized
            />
          </div>
          <div className="lg:hidden text-lg font-gilroy flex items-center justify-center gap-2 w-full mx-auto mt-2 mb-6">
            <Image
              src={LOGO_MAIN}
              alt=" Logo"
              className="w-8 h-8"
              unoptimized
            />
            Owns 1 DKS NFT
          </div>
        </div>
      </header>
      <main className="w-full">
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
    </>
  );
}
