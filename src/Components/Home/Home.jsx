import React from "react";
import avatarImg from "../../assets/tricycle.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter p-6">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight p-6 text-blue-400">
          We build the latest technology designed by Malagasy engineer to save the earth using electrics motor 
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 border border-slate-300 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#0b1438] p-6">
          Contact Us
        </button>
      </div>
      <div className="">
        <img className="rounded-full border-l-cyan-600 border-opacity-5 border-8" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
