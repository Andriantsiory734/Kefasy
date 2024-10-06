import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-blue-400">Our history</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 bg-black bg-opacity-10 rounded-3xl ">
           <p className="text-white"> KVA is an initiative of Kefasy, a malagasy enginneer who wanted to build a vehicle that can save the world</p>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
