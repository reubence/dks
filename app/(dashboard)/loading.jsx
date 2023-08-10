import React from "react";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import SKULL_SMALL from "@/public/images/icons/skull-logo-small.svg";
import Image from "next/image";

function Loading() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center align-middle animate-pulse">
      <Image
        src={LOGO_MAIN}
        alt="DKS Logo"
        className="-mt-20 mb-2.5 w-[7vw] h-[7vw] "
      />
      Loading...
    </div>
  );
}

export default Loading;
