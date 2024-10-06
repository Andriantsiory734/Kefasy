import React from "react";
import AboutImg from "../../assets/about.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-40">
          <img className="md:h-80 md:mx-5 rounded-full opacity-90 border-l-sky-800 border-8" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-7" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal p-6 text-blue-500">
                  Move and save the <span className="text-slate-200">planet</span> for the kids
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum! Libero aut qui
                  similique recusandae provident consectetur sed itaque alias
                  sint ipsa?
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-7" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal p-6 text-blue-500">
                  Our vehicle <span className="text-slate-200">can support</span>  a load of up to 5 tons
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-7" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal p-6 text-blue-500">
                  Never worry for <span className="text-slate-200">gas</span> again
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
