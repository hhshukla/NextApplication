import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

interface ImageDataProps {
  MainTitle: string;
  slides: any;
  className: string[];
  onClick: any;
  img: string;
  title: string;
}

const ImageSlider = ({ MainTitle, slides }: ImageDataProps) => {
  const SampleNextArrow = ({ className, onClick }: ImageDataProps) => {
    return (
      <div
        className={`${className} hidden md:block  cursor-pointer `}
        onClick={onClick}
      >
        <img
          src="./Image/right-arrow.png"
          alt="rightArrow"
          className="hidden md:block"
        />
      </div>
    );
  };

  const SamplePrevArrow = ({ className, onClick }: ImageDataProps) => {
    return (
      <div className={`${className}   cursor-pointer`} onClick={onClick}>
        <img
          src="./Image/left-arrow.png"
          alt="leftArrow"
          className="hidden md:block"
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    nextArrow: (
      <SampleNextArrow
        MainTitle={""}
        slides={""}
        className={[]}
        onClick={undefined}
        img={""}
        title={""}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        MainTitle={""}
        slides={""}
        className={[]}
        onClick={undefined}
        img={""}
        title={""}
      />
    ),
    responsive: [
      // {
      //   breakpoint: 1728,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: false,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="pt-[100px]  ">
      <div className="container mx-auto">
        <div className="px-6 ">
          <h2 className="mb-10 text-5xl text-orange-500 font-md font-ralewayBold text-center">
            {MainTitle}
          </h2>

          <Slider {...settings}>
            {slides.map(
              (
                slide: {
                  opinion: ReactNode;
                  img: string | undefined;
                  title: string;
                },
                index: React.Key | null | undefined
              ) => (
                <div key={index} className="pt-[90px] relative w-full">
                  <div className="flex flex-col justify-center items-center w-full px-2 md:px-4">
                    <div className="absolute top-0 ">
                      <img
                        src={slide.img}
                        alt={`clientImg-${index}`}
                        className="mx-auto rounded-md"
                      />
                    </div>
                    <div className="text-center px-5 pb-[30px] shadow shadow-orange-500 w-full bg-orange-50">
                      <h2 className="text-3xl font-md font-ralewayBold text-black mt-20">
                        {slide.title}
                      </h2>
                      <p className="text-black text-base font-ralewayBold break-words pt-5  text-center">
                        {slide.opinion}
                      </p>
                    </div>
                    <div className="">
                      <img
                        src="./img/quick-icon.png"
                        alt=""
                        className="mt-[50px]"
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  MainTitle: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.object,

  slides: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      opinion: PropTypes.string.isRequired,
    })
  ),
};

export default ImageSlider;
