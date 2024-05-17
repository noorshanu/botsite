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
          title="Jito bundle multi wallet bundle"
          description="Create token  + Add Liquidity: The program allows you to enter desired amount of base tokens(COIN) and quote tokens(SOL), upon which it will create the liquidity pool.
          this uses JITO Bundles to add liquidity to your token and makes the first swap (first txn)."
        />
        <ProjectCard
          src="/CardImage.png"
          title="⁠jito freez bundle"
          description="Create token  + Add Liquidity: The program allows you to enter desired amount of base tokens(COIN) and quote tokens(SOL), upon which it will create the liquidity pool.
          this uses JITO Bundles to add liquidity to your token and makes the first swap (first txn). you can also freeze tnx "
        />
       
       
        <ProjectCard
          src="/NextWebsite.png"
          title="Random volume and MC generator"
          description="our cutting-edge Random Volume and Market Cap Generator! This powerful tool is designed to simulate market conditions by using multiple wallets to generate random trading volumes and market capitalizations."
        />
     
      </div>



      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-4">
      <ProjectCard
          src="/CardImage.png"
          title="Multi wallet volume generator"
          description="Our multi wallet Volume Generator! This powerful tool is designed to simulate market conditions by using multiple wallets to generate random trading volume."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Pump.fun booster volume"
          description="Our Bot  generates random trading volume, ensuring an exhilarating and immersive experience for traders. Get ready to amplify your trading potential like never before!"
        />
       
       
        
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AirDrop Bundler"
          description="Simplify your token distribution process with AirDrop Bundler! Our platform empowers you to seamlessly airdrop your tokens to multiple wallets with ease and efficiency. Say goodbye to manual distribution hassles and embrace a streamlined approach to reaching your audience."
        />
      </div>
    </div>
  );
};

export default Projects;