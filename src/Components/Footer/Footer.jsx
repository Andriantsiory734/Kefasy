import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#000000] text-white p-1 md:p-1 items-center"
    >
      <div>
        <h1 className="text-md md:text-xl font-bold"></h1>
        <h3 className="text-sm md:text-sm font-normal">
          Designed by Sonate Code
        </h3>
      </div>

      <ul className="text-sm md:text-md flex justify-between gap-5">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          kefasy@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/username
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/username
        </li>
      </ul>
    </div>
  );
};

export default Footer;
