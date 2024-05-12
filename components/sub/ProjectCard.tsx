import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[999]">
      {/* <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      /> */}

      <div className="relative p-4 text-center z-50">
        <h1 className="text-2xl font-semibold text-white ">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className=" flex justify-center items-center my-2">

        <a href="/" className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-4 cursor-pointer"> Contact Us</a>

      </div>
    </div>
  );
};

export default ProjectCard;