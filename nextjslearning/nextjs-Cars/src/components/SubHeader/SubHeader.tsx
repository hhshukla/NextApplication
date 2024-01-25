import React from "react";
import PropTypes from 'prop-types'

interface subHeaderProps {
  location: string;
  phone:string|number;
  email:string;
}



const SubHeader = ({ location, phone, email }:subHeaderProps) => {
  return (
    <div className="bg-orange-600">
      <div className="container mx-auto">
        <div className="">
          <ul className="flex py-2.5 justify-around">
            <div className="flex justify-center items-center text-white font-semibold cursor-pointer hover:text-black">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <li className="pl-2.5">{location}</li>
            </div>
            <div className="flex justify-center items-center text-white font-semibold cursor-pointer hover:text-black">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <li className="pl-2.5">{phone}</li>
            </div>
            <div className="flex justify-center items-center text-white font-semibold cursor-pointer hover:text-black">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <li className="pl-2.5">{email}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

SubHeader.propTypes = {
    location: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  
}

export default SubHeader;
