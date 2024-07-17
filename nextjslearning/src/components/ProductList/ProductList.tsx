import React from "react";

import { productData } from "./ProductList.mock";

interface ProductListDataProps {
  name: string;
  price: number|string;
  imageUrl: string;
}

const ProductList = ({name,price,imageUrl}:ProductListDataProps) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="pt-[90px]">
          <div className="">
            <h2 className="text-center uppercase text-black font-ralewayBold font-semibold text-5xl">
              OUR BEST OFFERS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3   pt-[30px]">
            {productData?.map((product, index) => (
              <div className="p-5 shadow  shadow-orange-500 mx-5 flex flex-col mt-5" key={index}>
                <div className="flex-grow">
                  <img
                    src={product?.imageUrl}
                    alt=""
                    className="w-full min-h-full "
                  />
                </div>
                <div className="flex flex-col text-center mt-[30px] ">
                  <h3 className="text-2xl text-black font-ralewayBold font-bold">{product?.name}</h3>
                  <h4 className="text-md font-ralewayBold font-semibold text-black">{product?.price}</h4>
                  <div className="pt-5 ">
                    <button className="bg-orange-500 p-2.5 text-white font-medium font-ralewayBold text-base w-full hover:bg-black">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
