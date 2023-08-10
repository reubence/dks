import React from "react";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import SKULL_SMALL from "@/public/images/icons/skull-logo-small.svg";
import Image from "next/image";

function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center align-middle">
      <Image
        src={SKULL_SMALL}
        alt="DKS Logo"
        className="-mt-20 w-[7vw] h-[7vw] animate-pulse absolute"
      />
    </div>
  );
}

export default Loading;
