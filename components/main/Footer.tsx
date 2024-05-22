import React from "react";
import {
  RxDiscordLogo,

  RxTwitterLogo,
  
} from "react-icons/rx";

import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  relative z-[999] ">
        <div className="w-full flex flex-col items-center justify-center m-auto border-t pt-8">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                 
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                  
                    <a href="/https://t.me/solmerd" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                    <FaTelegram />
                        <span className="text-[15px] ml-[6px]">Telegram</span>    
                    </a>
                
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <a href=" https://t.me/solmerd" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </a>
                  
                
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; SolBot 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer