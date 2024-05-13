import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
       Our Solana Bots
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Random volume and MC generator"
          description="our cutting-edge Random Volume and Market Cap Generator! This powerful tool is designed to simulate market conditions by using multiple wallets to generate random trading volumes and market capitalizations."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Multi wallet volume generator"
          description="our cutting-edge Multi wallet Volume Generator! This powerful tool is designed to simulate market conditions by using multiple wallets to generate random trading volume."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Pump.fun booster volume"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>



      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-4">
        <ProjectCard
          src="/NextWebsite.png"
          title="Jito bundle multi wallet bundle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="⁠jito freez bundle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AirDrop Bundler"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;