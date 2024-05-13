"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className=" Welcome-box py-[8px] px-[8px] border-[#7042f88b] border opacity-[0.9]"
        >
          <SparklesIcon className=" text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] ">Solana Bot</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Solana
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Trading Bot
            </span>{" "}
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className=" text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Automate your Solana trading with our advanced Solana trading bot. Say
          goodbye to manual trading errors and hours spent monitoring charts.
          Our Solana (SOL) bot executes trades automatically, streamlining your
          trading process and maximizing your efficiency.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className=" py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/botsol.png"
          alt="Work Icon"
          height={750}
          width={750}
        ></Image>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
