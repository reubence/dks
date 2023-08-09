import React from "react";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import Image from "next/image";

function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center align-middle">
      <Image
        src={LOGO_MAIN}
        alt="DKS Logo"
        className="-mt-20 w-[7vw] h-[7vw] animate-pulse absolute"
        unoptimized
      />
    </div>
  );
}

export default Loading;
