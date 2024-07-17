import React, { useState } from "react";
import Link from "next/link";

interface MainHeaderProps {
  logoSrc: string;
  menuItems: { label: string; path: string }[];
}

const MainHeader: React.FC<MainHeaderProps> = ({ menuItems, logoSrc }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-500 py-4 px-2">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <div className="">
            <img src={logoSrc} alt="logo" className="py-[.3125rem] w-20" />
          </div>
          <div className="lg:hidden">
            <button
              className="block text-orange-600 text-xl px-3 py-1 focus:outline-none bg-white rounded-[3px] "
              onClick={toggleMenu}
            >
              <img
                src="/img/download.svg"
                alt="toggle navbar"
                className="w-10"
              />
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              {menuItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-white font-medium font-sans hover:text-orange-500 mr-14"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="mt-2 text-center">
              {menuItems.map((item, index) => (
                <li
                  className="text-mainWhite py-2 px-4 transition duration-1000 hover:text-primary1 cursor-pointer"
                  key={index}
                >
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// MainHeader.propTypes = {
//   menuItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       path: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   logoSrc: PropTypes.string.isRequired,
// };

export default MainHeader;
