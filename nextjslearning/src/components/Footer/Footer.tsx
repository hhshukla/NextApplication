import React from "react";
import { FooterData } from "./Footer.mock";

interface FooterProps {
  data: {
    key: string;
    title: string;
    content: string;
    Placeholder?: string;
    buttonText?: string;
    items?: { icon: string; text: string }[];
  }[];
}

const Footer = ({ data }:FooterProps) => {
  return (
    <div className="bg-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center py-[50px]">
          <img src="./Image/images.png" alt="footerLogo" className="" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 pt-[50px]">
            {data?.map((section) => {
              return (
                <div key={section.key} className="px-[15px]">
                  <h2 className="text-2xl text-white">{section.title}</h2>
                  <p className="text-base text-white">{section.content}</p>
                  {section.key === "subscribe" && section.Placeholder && section.buttonText && (
                    <>
                      <div className="pt-2.5 pr-5 flex flex-col">
                        <input
                          type="email"
                          placeholder={section.Placeholder}
                          className="w-full outline-0 border-b border-white text-white bg-gray-500 capitalize text-base"
                        />
                        <div>
                          <button className="uppercase font-medium bg-orange-500 text-white hover:bg-white rounded-[3px] mt-5 hover:text-orange-500 p-2">
                            {section.buttonText}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {section.items && (
                    <ul>
                      {section.items.map((item, index) => (
                        <li key={index} className="text-base text-white pl-2.5">
                          <div className="flex items-center">
                            <i className={`fa ${item.icon} text-white`} aria-hidden="true"></i>
                            {item.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
