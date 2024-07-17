import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSliderData } from "./swiperSlider.mock"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={60}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {swiperSliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center pt-10">
                <h2 className="text-5xl text-primary1 font-md font-ralewayBold">{slide.title}</h2>
              </div>
              <div className="">
                <img src={slide.imageSrc} alt={`Car${index + 1}`} className="w-full" />
              </div>
            </SwiperSlide>
          ))}
          <div
            className="autoplay-progress w-20 relative  z-10  "
            slot="container-end"
          >
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span
              ref={progressContent}
              className=" absolute top-[23px] left-8 text-primary1 text-xl font-md"
            ></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
