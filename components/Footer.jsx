import React from 'react';
import { SiConstruct3 } from 'react-icons/si';

const Footer = () => {
  return (
    <div>
      <div className="p-4 shadow-2xl shadow-pink-300 ">
        <div className=" text-center">
          <div className="  cursor-pointer flex items-center font-[Poppins] text-pink-700">
            <span className="md:text-4xl text-3xl text-purple-700 mr-1 mb-1 pt-2">
              <SiConstruct3 name="logo" href="/" />
            </span>
            <p className="font-bold text-base"> Brainy Dictionary</p>
            <span className="text-slate-500">@ 2022 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
