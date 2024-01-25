import React from "react";
import PropTypes from "prop-types";

interface AboutUsProps {
  img:string;
  title1:string;
  title2:string;
  description:string;
  buttonText:string;
}

const AboutUs = ({ img, title1, title2, description, buttonText }:AboutUsProps) => {
  return (
    <div className="py-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-3 px-[15px]">
          <div className="mt-10">
            <img src={img} alt="aboutImg" className="" />
          </div>
          <div className="">
            <h2 className="text-black text-5xl font-semibold uppercase">
              {title1} <span className="text-orange-500">{title2}</span>
            </h2>
            <p className="font-medium text-base mt-[30px] text-black">
              {description}
            </p>
            <div className="mt-10 flex justify-start items-center">
              <a
                href="#"
                className="bg-orange-500 p-[10px] font-medium text-white hover:bg-black rounded-[3px]"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  img: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
};

export default AboutUs;
