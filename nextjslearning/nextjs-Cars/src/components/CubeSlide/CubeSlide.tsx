import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CubeSlideData } from "./CubeSlide.mock";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

interface CubeSlideProps {
  title: string;
  imageSrc: string;
}

const CubeSlide = ({title,imageSrc}:CubeSlideProps) => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {CubeSlideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src="./Image/bgCar.png" alt="bgCar" className="w-full" />
            </div>
            <div className="absolute inset-0 pt-2 md:pt-20">
              <div className="flex justify-center items-center  w-full">
                <h2 className=" text-md md:text-6xl text-orange-500 font-md font-ralewayBold">
                  {slide.title}
                </h2>
              </div>
              <div className="flex justify-center items-center pt-8 md:pt-10">
                <img
                  src={slide.imageSrc}
                  alt={`Car${index + 1}`}
                  className="md:w-[425px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CubeSlide;
