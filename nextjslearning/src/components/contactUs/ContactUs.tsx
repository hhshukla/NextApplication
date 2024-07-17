import React from "react";
import PropTypes from "prop-types";

interface ContactUsDataProps {
  title: string;
  namePlaceholder :string,
  emailPlaceholder :string,
  phonePlaceholder :string ,
  messagePlaceholder :string,
  buttonText :string,

}

const ContactUs = ({
  title,
  
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  messagePlaceholder,
  buttonText,
}:ContactUsDataProps) => {

  return (
    <div className="pt-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-5xl font-md font-ralewayBold text-black">
            {title}
          </h2>
          <div className="w-full">
            <div
              className="pt-[110px] flex flex-col justify-center items-center bg-orange-500 px-10 pb-[50px]
              rounded-tl-[540px] rounded-tr-[540px] w-full mx-auto"
            >
              <input
                type="text"
                placeholder={namePlaceholder}
                name="Name"
                className="text-black text-base font-Poppins font-light mt-5 px-5 py-[11px] rounded-[5px] bg-mainWhite w-full md:w-[60%] text-center"
              />
              <input
                type="email"
                placeholder={emailPlaceholder}
                name="Email"
                className="text-black text-base font-Poppins font-light mt-5 px-5 py-[11px] rounded-[5px] bg-mainWhite w-full md:w-[60%] text-center"
              />
              <input
                type="number"
                placeholder={phonePlaceholder}
                name="Phone Number"
                className="text-black text-base font-Poppins font-light mt-5 px-5 py-[11px] rounded-[5px] bg-mainWhite w-full md:w-[60%] text-center"
              />
              <textarea
                placeholder={messagePlaceholder}
                name="Message"
                className="text-black text-base font-Poppins font-light mt-5 px-5 py-10 rounded-[5px] bg-mainWhite w-full md:w-[60%] text-center"
              />
              <div className="">
                <button className="p-3 mt-10 bg-purple-500 w-[170px] uppercase text-white font-md font-ralewayBold hover:text-black hover:bg-white">
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  title: PropTypes.string.isRequired,
  namePlaceholder: PropTypes.string.isRequired,
  emailPlaceholder: PropTypes.string.isRequired,
  phonePlaceholder: PropTypes.string.isRequired,
  messagePlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ContactUs;
