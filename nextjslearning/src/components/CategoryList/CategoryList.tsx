import React from "react";
import PropTypes from "prop-types";
import { CategoryListData } from "./CategoryList.mock";

interface CategoryListDataProps {
  title: string;
  description: string;
  options: any;
  buttonText: string;
}

const CategoryList = ({
  title,
  description,
  options,
  buttonText,
}: CategoryListDataProps) => {
  return (
    <div className="bg-secondary py-10">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-start pt-10 px-[15px]">
          <h2 className="text-lightWhite text-5xl font-md font-ralewayBold">
            {title}
          </h2>
          <p className="font-light text-lightWhite text-base font-ralewayBold">
            {description}
          </p>
          <div className="pt-10 grid  w-full md:grid-cols-4 px-[15px]">
            {Object.keys(options).map((category) => (
              <select
                key={category}
                name={`car-${category}`}
                id={`car-${category}`}
                className="md:mr-5 mt-5 pl-5 pr-[35px]  text-md font-light text-black4 font-ralewayBold"
              >
                {options[category].map(
                  (
                    item:string,
                    index: React.Key | null | undefined
                  ) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  )
                )}
              </select>
            ))}
            <button className="bg-primary1 p-[10px] uppercase text-lightWhite rounded-[3px] font-ralewayBold font-md hover:bg-mainWhite hover:text-hover mt-5 w-1/2">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.shape({
    brands: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.arrayOf(PropTypes.string),
    prices: PropTypes.arrayOf(PropTypes.string),
  }),
  buttonText: PropTypes.string,
};

export default CategoryList;
