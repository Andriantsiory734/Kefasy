import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    
    <div id="Projects" className="p-10 md:p-24 text-white  ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Pricing</h1>
      <div className="flex justify-center">
      <div className="py-12 px-8 flex gap-5 justify-center">
        <ProjectCard
        price= "1 M"
          title="Starter pack"
          main="Discover our Starter Pack for electric tricycles! Enjoy eco-friendly and economical rides with our subscription. Includes: regular maintenance, 24/7 assistance, and access to charging stations. Ideal for urban commutes, this pack offers you comfort and peace of mind. 🚲⚡"
        />
        <ProjectCard
        price= "1M"
          title="Professional pack"
          main="Elevate your business with our Professional Pack for electric tricycles! This premium subscription includes advanced maintenance, priority 24/7 support, and exclusive access to high-speed charging stations. Perfect for daily business operations, this pack ensures reliability, efficiency, and superior performance. 🚲⚡"
        />
        <ProjectCard
        price= "1 M"
          title="Premium pack"
          main="Experience the ultimate in electric tricycle performance with our Premium Pack! This top-tier subscription offers comprehensive maintenance, VIP 24/7 support, and unlimited access to ultra-fast charging stations. Designed for the most demanding users, this pack ensures maximum efficiency, reliability, and luxury. 🚲⚡"
        />
      </div>
      </div>
      
    </div>
  );
};

export default Projects;
