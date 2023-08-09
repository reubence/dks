"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import NFT_1 from "@/public/images/nft-1.png";
import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function ImageSlider() {
  return (
    <>
      <Swiper
        navigation={false}
        modules={[Navigation]}
        className="mySwiper text-accent relative"
      >
        <SwiperSlide>
          <Image src={NFT_1} alt="Logo" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={NFT_1} alt="Logo" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={NFT_1} alt="Logo" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={NFT_1} alt="Logo" unoptimized />
        </SwiperSlide>
        <div className="absolute flex w-full justify-between top-1/2 -translate-y-1/2 z-10">
          <div className="flex ">
            <SwiperButton nextSlide={false} />
          </div>
          <div className="flex">
            <SwiperButton nextSlide={true} />
          </div>
        </div>
      </Swiper>
    </>
  );
}

function SwiperButton({ nextSlide }) {
  const swiperInst = useSwiper();
  var content = <div></div>;

  if (nextSlide && swiperInst.slides.length - 1 !== swiperInst.activeIndex) {
    content = (
      <button
        className={`bg-black/70 h-16 shadow-2xl rounded-l-md px-3 py-[10px] hover:bg-black`}
        onClick={() => swiperInst.slideNext()}
      >
        <svg
          width="13"
          height="19"
          viewBox="0 0 13 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75 17.5L9.75 9.5L1.75 1.5"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </button>
    );
  } else {
    content = (
      <button
        className={`bg-black/70 h-16 shadow-2xl rounded-r-md px-3 py-[10px] hover:bg-black`}
        onClick={() => swiperInst.slidePrev()}
      >
        <svg
          width="13"
          height="19"
          viewBox="0 0 13 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 17.5L3.25 9.5L11.25 1.5"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </button>
    );
  }
  return content;
}
