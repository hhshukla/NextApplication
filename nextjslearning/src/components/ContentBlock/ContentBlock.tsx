import React from "react";
// import PropTypes from 'prop-types'
import { ContentBlockData } from "./ContentBlock.mock";
interface ContentBlockProps {
  title: string;
  description: string;
  imageUrl: string;
}
const ContentBlock = ({title,description,imageUrl}:ContentBlockProps) => {
  return (
    <div className="bg-slate-500 py-20">
      <div className="container mx-auto">
        <div className="m-2.5">
          <div className="">
            <h2 className="text-white text-5xl px-2.5">WHY CHOOSE US</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-10">
            {ContentBlockData?.map((data, index) => (
              <div key={index} className="p-[15px]">
                <div className="">
                  <img src={data.imageUrl} alt="icons" className="" />
                </div>
                <div className="pt-10">
                  <h2 className="text-xl font-md font-ralewayBold text-white">{data?.title}</h2>
                  <p className=" text-base font-light font-ralewayBold text-white">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ContentBlock.propTypes = {};

export default ContentBlock;
