"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-accent"
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
      </Swiper>
    </>
  );
}
