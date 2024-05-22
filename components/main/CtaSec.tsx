import React from "react";



const CtaSec = () => {
  return (
    <div className=" w-full h-full mx-auto pt-8">
      <div className=" justify-center flex items-center flex-col">
        <h1 className=" text-white text-center text-xl sm:text-5xl font-bold">
          Join 2K+ people who <br />
          try our product
        </h1>

        <p className=" text-wrap text-xl text-center text-white py-4">
          Accuracy Pays Off: Elevate Your Strategy, <br /> Gain the Edge, and Boost
          Your Performance.{" "}
        </p>

        <a

          href="#projects"
          className=" py-2 button-primary px-8 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
         JOIN US!
        </a>
      </div>
    </div>
  );
}

export default CtaSec;
