import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main, price }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      
      <h1 className="flex justify-center text-5xl">{`${price} MGA`}</h1>
      <h3 className="px-4 text-xl md:text-2xl text-orange-400 font-bold leading-normal py-5 flex justify-center">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-base leading-tight py-2 text-pretty">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white md:mx-20 py-2 px-3 text-sm md:text-lg md:py-3 md:px-5 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] ">
          Contact
        </button>
        
      </div>
    </div>
  );
};

export default ProjectCard;
