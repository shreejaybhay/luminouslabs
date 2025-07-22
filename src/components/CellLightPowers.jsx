import { ArrowRight } from "lucide-react";
import React from "react";

const CellLightPowers = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-around bg-[#FCF8F1] sm:px-12 flex-col ">
      <div className="sm:w-screen sm:h-[500px]  md:w-[1133px] md:h-[600px] w-[299px] h-[451px] rounded-[40px] overflow-hidden relative">
        <div className="flex flex-col absolute items-start md:gap-[120px] gap-6  md:w-[60%] left-0 pl-[24px] pt-[24px] md:pl-[60px] md:py-[131px] ">
          <h1 className="sm:text-[26px] md:text-[36px] text-[17px] font-medium text-white leading-5  md:leading-10 sm:leading-8">
            Learn how CellLight powers your health. Innovative,
            <span className="text-[#FFA19D]">
              science-backed technology created to fuel cellular energy and
              longevity.
            </span>
          </h1>
          <button className="md:py-[18px] md:px-[40px] sm:py-[14px] sm:px-[32px] py-3 px-4 bg-white rounded-full text-black flex items-center gap-2  group">
            <span className="transition-transform duration-200 group-hover:-translate-x-2 text-center text-[11px] md:text-[15px] font-medium">
              Explore
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-2" />
          </button>
        </div>
        <img
          className="object-cover w-full h-full"
          src="CellLightPowers.webp"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] text-center px-4 sm:px-0 mb-8 sm:mb-0">
        <h1 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#0000004d]">
          We believe in meaningful conversations. To help you out, we provide
          <span className="text-black">
            {" "}
            a free 20-minute call to answer your questions.
          </span>
        </h1>
        <button className="group bg-black text-[#FCF8F1] text-[12px] sm:text-[14px] rounded-full py-[14px] sm:py-[18px] px-[24px] sm:px-[34px] flex items-center gap-2 overflow-hidden cursor-pointer max-w-fit mt-2">
          <span className="text-center transition-transform duration-200 group-hover:-translate-x-2">
            Book a free call
          </span>
          <ArrowRight className="w-3 h-3 transition-transform duration-200 sm:w-4 sm:h-4 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default CellLightPowers;
