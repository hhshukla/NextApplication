import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CreativeEffectSliderData } from "./CreativeEffectSlider.mock";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";
interface CreativeEffectSliderProps {
  imageSrc:string;
}
const creativeEffectSlider = ({imageSrc}:CreativeEffectSliderProps) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <div className="container mx-auto">
        {CreativeEffectSliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img src={slide.imageSrc} alt={`Car${index + 1}`} className="w-[600px]" />
              </div>
            </SwiperSlide>
          ))}

        </div>
      </Swiper>
 
    </>
  );
};

export default creativeEffectSlider;
