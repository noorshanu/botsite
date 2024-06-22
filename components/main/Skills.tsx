import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
  } from "@/constants";
  import React from "react";
  import SkillDataProvider from "../sub/SkillData";
import SkillText from "../sub/SkillText";
import Image from "next/image";

  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-50"
        style={{ transform: "scale(0.9" }}
      >
      <SkillText/>
  
        <div className="flex flex-col sm:flex-row justify-between  mt-4  items-center relative z-40 border-2 border-[#7601b1] rounded-lg py-4 px-6 drop-shadow-xl bg-[#0000006c]">
    
            <div className=" w-1/2">
            <Image src="/img3.jpeg" alt="c" height={300} width={600}  className=" rounded-lg border-2 border-[#7601b1]" />
            </div>

            <div className=" w-1/2">
              <p className="text-[30px] text-white font-medium mt-[10px]  mb-[15px]">
              PFSuite-20
              </p>

              <p className="text-[20px] text-white font-medium mt-[10px] mb-[15px]">
              It Generates 19wallets and bundle buys with the 19 wallets along with 1 Dev wallet, so total 20,
              </p>


              <div>
                <p className="text-[16px] text-white font-medium mt-[10px]  mb-[15px]">
                Its not just a single task bot, but a suite of utilities, Like 
                </p>


                <p className="text-[16px] text-white font-medium mt-[10px]  mb-[15px]">
                ❇️Vanity Token Named <br />
❇️Contract Generator, <br />
❇️PFbooster, <br />
❇️Raydium Dumper, <br />
❇️Wallet Manager, <br />
❇️Solana Recovery etc.
                </p>

                
              </div>
            </div>
        </div>
  
  
   

  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;