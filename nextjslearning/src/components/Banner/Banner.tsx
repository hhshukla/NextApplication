import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import  { Pagination, EffectFlip, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import PropTypes from "prop-types";

interface BannerProps {
  img: string;
  title1: string;
  title2: string;
  description: string;
  buttonText1: string;
  buttonText2: string;
}

const Banner = ({
  img,
  title1,
  title2,
  description,
  buttonText1,
  buttonText2,
}:BannerProps) => {
  return (
    <>
      <div className="hidden md:block">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={false}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white md:bg-transparent relative">
              <div className="relative">
                <img src={img} alt="carImage" className="hidden md:block" />
              </div>
              <div className="container mx-auto">
                <div className="md:absolute inset-0 flex flex-col justify-center  w-96 m-4">
                  <h2 className="font-sans text-6xl font-semibold text-black text-center">
                    {title1}
                    <br />
                    <span className="text-orange-500 font-semibold">{title2}</span>
                  </h2>
                  <p className="text-center mt-5 text-black text-base font-medium font-sans">
                    {description}
                  </p>
                  <div className="pt-10 flex justify-center items-center">
                    <a
                      href="#"
                      className="bg-orange-500 p-[10px] font-normal text-white hover:bg-black"
                    >
                      {buttonText1}
                    </a>
                    <a
                      href="#"
                      className="bg-orange-500 p-[10px] font-normal text-white ml-[10px] hover:bg-black"
                    >
                      {buttonText2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white md:bg-transparent relative">
              <div className="container mx-auto">
                <div className="md:absolute top-28 right-20 flex flex-col justify-center items-center w-96 m-4">
                  <h2 className="font-ralewayBold text-6xl font-semibold text-black text-center">
                    {title1}
                    <br />
                    <span className="text-orange-500 font-semibold">{title2}</span>
                  </h2>
                  <p className="text-center mt-5 text-black text-base font-medium font-raleway">
                    {description}
                  </p>
                  <div className="pt-10 flex justify-center items-center">
                    <a
                      href="#"
                      className="bg-orange-500 p-[10px] font-medium text-white hover:bg-black"
                    >
                      {buttonText1}
                    </a>
                    <a
                      href="#"
                      className="bg-orange-500 p-[10px] font-medium text-white ml-[10px] hover:bg-black"
                    >
                      {buttonText2}
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src="./Image/flipCar.png"
                  alt="carImage"
                  className="hidden md:block"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden">
        <div className="container mx-auto">
          <div className="md:absolute inset-0 flex flex-col justify-center  w-96 m-4">
            <h2 className="font-ralewayBold text-6xl font-md text-black2 text-center">
              {title1}
              <br />
              <span className="text-primary1">{title2}</span>
            </h2>
            <p className="text-center mt-5 text-black3 text-base font-light font-raleway">
              {description}
            </p>
            <div className="pt-10 flex justify-center items-center">
              <a
                href="#"
                className="bg-primary1 p-[10px] font-normal text-white hover:bg-hover"
              >
                {buttonText1}
              </a>
              <a
                href="#"
                className="bg-hover p-[10px] font-normal text-white ml-[10px]"
              >
                {buttonText2}
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

Banner.propTypes = {
  img: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

export default Banner;
