import React from "react";
import BG_BANNER from "@/public/images/no-holdings-banner.png";
import BG_BANNER_MOBILE from "@/public/images/no-holdings-banner-mobile.png";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NoHoldings() {
  return (
    <div className="flex flex-col gap-5 w-full h-full pb-20 mb-1.5">
      <main className="h-[calc(100vh-130px)] w-full flex flex-col border rounded-lg bg-primary p-4 lg:p-6 relative">
        <Image
          src={BG_BANNER}
          alt="Background Banner"
          className="hidden lg:block w-full"
          unoptimized
        />
        <Image
          src={BG_BANNER_MOBILE}
          alt="Background Banner"
          className="lg:hidden w-full"
          unoptimized
        />

        <Image
          src={LOGO_MAIN}
          alt="Background Banner"
          className="-mt-4 mx-auto"
          unoptimized
        />
        <h1 className="text-center text-3xl lg:text-5xl font-waves mt-4 lg:mt-11">
          No Holdings
        </h1>
        <Button className="max-w-xs lg:max-w-sm text-sm lg:text-lg mx-auto mt-24">
          Join DKS
        </Button>
      </main>
    </div>
  );
}
