"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Applications = () => {
  return (
    <div className="w-full xl:h-screen flex flex-col items-center xl:justify-between bg-[#FCF8F1] text-black py-6 lg:gap-[55px] md:gap-[110px] sm:gap-[33px] gap-[55px]">
      {/* above text */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, scale: 0.8 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="px-4 text-center sm:px-6 md:px-12"
      >
        <h1 className="text-[17px] sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug text-[#B0ADA8]">
          In 2050, material wealth will not be
        </h1>
        <h1 className="text-[17px] sm:text-xl md:text-2xl lg:text-3xl font-medium flex items-center gap-2 justify-center flex-wrap leading-snug text-[#B0ADA8]">
          impressive. Your <span className="text-black">VO₂Max</span>
          <img
            className="w-[28px] h-[18px] sm:w-[32px] sm:h-[22px] md:w-[39px] md:h-[26px] hidden lg:block"
            src="/1per.webp"
            alt="1%"
          />
          <span className="text-black">speed of aging,</span>
        </h1>
        <h1 className="text-[17px] sm:text-xl md:text-2xl lg:text-3xl font-medium flex items-center gap-2 justify-center flex-wrap leading-snug">
          HRV
          <img
            className="w-[28px] h-[18px] sm:w-[32px] sm:h-[22px] md:w-[39px] md:h-[26px]"
            src="/2per.webp"
            alt="2%"
          />
          <span className="text-[#B0ADA8]">
            and body fat percentage will be.
          </span>
          <img
            className="w-[28px] h-[18px] sm:w-[32px] sm:h-[22px] md:w-[39px] md:h-[26px] hidden lg:block"
            src="/3per.webp"
            alt="3%"
          />
        </h1>
      </motion.div>

      {/* Applications section */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, scale: 0.8 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[55px] bg-[#FCF8F1]"
      >
        {/* text  */}
        <div className="text-center">
          <h2 className="text-[14px] text-[#B0ADA8]">Applications</h2>
          <h1 className="text-[24px] font-medium text-[#000000">
            Start shaping your tomorrow
          </h1>
        </div>

        {/* cards */}
        <div className=" flex gap-2 rounded-[40px] flex-wrap items-center justify-center">
          <div className="bg-[#FAF2EB] rounded-[40px] p-1 w-[315px]">
            <div className="bg-[#FCF8F1] rounded-[40px]  ">
              <img
                className="w-[313px] rounded-[40px]"
                src="/cardPer1.webp"
                alt=""
              />
              <div className="flex flex-col gap-1 p-5 lg:gap-16 md:gap-3">
                <h1 className="text-[18px] text-[#000000] font-medium lg:hidden">
                  Wellbeing
                </h1>
                <h1 className="text-[14px] text-[B0ADA8]  font-medium">
                  Stay your best self, always
                </h1>
                {/* hide button below lg */}

                <button className="relative hidden lg:flex items-center justify-start group overflow-hidden rounded-[40px] border border-[#D9D4CD] bg-[#FAF6EF] px-10 py-4 hover:px-5 transition-all duration-300 ease-in-out">
                  {/* Expanding Background Gradient */}
                  <div className="absolute inset-0 flex items-center justify-start w-full h-full">
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-3 transition-all duration-300 ease-in-out w-5 h-5 group-hover:w-[100%] group-hover:h-[610%] group-hover:rotate-90 group-hover:left-0  origin-center"
                    >
                      <defs>
                        <radialGradient
                          id="circleGrad"
                          cx="0.2"
                          cy="0.8"
                          r="1"
                          gradientUnits="objectBoundingBox"
                          gradientTransform="translate(0.25 0.95) rotate(-54.2933) scale(0.985 0.728)"
                        >
                          <stop offset="0%" stopColor="#FF9A2B" />
                          <stop offset="61.6%" stopColor="#FFDFCF" />
                          <stop offset="100%" stopColor="#FFAD37" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="50" fill="url(#circleGrad)" />
                    </svg>
                  </div>

                  {/* Button Content */}
                  <span className="relative z-10 font-normal text-black ">
                    Wellbeing
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF2EB] rounded-[40px] p-1 w-[315px]">
            <div className="bg-[#FCF8F1] rounded-[40px]  ">
              <img
                className="w-[313px] rounded-[40px]"
                src="/cardPer2.webp"
                alt=""
              />
              <div className="flex flex-col gap-3 p-5 lg:gap-16">
                <h1 className="text-[18px] text-[#000000] font-medium lg:hidden">
                  Women’s health
                </h1>
                <h1 className="text-[14px] text-[B0ADA8]  font-medium w-2/3 ">
                  Optimize your fertility, cycle and menopause naturally
                </h1>
                <button className="relative hidden lg:flex items-center justify-start group overflow-hidden rounded-[40px] border border-[#D9D4CD] bg-[#FAF6EF] px-10 py-4 hover:px-5 transition-all duration-300 ease-in-out">
                  {/* Expanding Background Gradient */}
                  <div className="absolute inset-0 flex items-center justify-start w-full h-full">
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-3 transition-all duration-300 ease-in-out w-5 h-5 group-hover:w-[100%] group-hover:h-[610%] group-hover:rotate-90 group-hover:left-0 origin-center"
                    >
                      <defs>
                        <radialGradient
                          id="grad1"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(70 20) rotate(132.797) scale(80)"
                        >
                          <stop stopColor="#FF97E7" />
                          <stop offset="1" stopColor="#FF66B9" />
                        </radialGradient>
                        <radialGradient
                          id="grad2"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(30 75) rotate(-47.7263) scale(100)"
                        >
                          <stop stopColor="#FF8FE1" />
                          <stop offset="0.45" stopColor="#FFDDFE" />
                          <stop offset="1" stopColor="#FF9DE5" />
                        </radialGradient>
                      </defs>

                      <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="url(#grad2)"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </div>

                  {/* Button Content */}
                  <span className="relative z-10 font-normal text-black">
                    Women’s health
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF2EB] rounded-[40px] p-1 w-[315px]">
            <div className="bg-[#FCF8F1] rounded-[40px]  ">
              <img
                className="w-[313px] rounded-[40px]"
                src="/cardPer3.webp"
                alt=""
              />
              <div className="flex flex-col gap-3 p-5 lg:gap-16">
                <h1 className="text-[18px] text-[#000000] font-medium lg:hidden">
                  Longevity
                </h1>
                <h1 className="text-[14px] text-[B0ADA8]  font-medium">
                  Fuel your cells for a supercharged life
                </h1>
                <button className="relative hidden lg:flex items-center justify-start group overflow-hidden rounded-[40px] border border-[#D9D4CD] bg-[#FAF6EF] px-10 py-4 hover:px-5 transition-all duration-300 ease-in-out">
                  {/* Expanding Background Gradient */}
                  <div className="absolute inset-0 flex items-center justify-start w-full h-full">
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-3 transition-all duration-300 ease-in-out w-5 h-5 group-hover:w-[100%] group-hover:h-[610%] group-hover:rotate-90 group-hover:left-0 origin-center"
                    >
                      <defs>
                        <radialGradient
                          id="paint0_radial_820_342"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(75 25) rotate(132.879) scale(85)"
                        >
                          <stop stopColor="#FF783F" />
                          <stop offset="1" stopColor="#FF3232" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_820_342"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(25 80) rotate(-52.0013) scale(100)"
                        >
                          <stop offset="0.106621" stopColor="#FF3124" />
                          <stop offset="0.6147" stopColor="#FF8A35" />
                          <stop offset="0.922649" stopColor="#FF3124" />
                        </radialGradient>
                      </defs>

                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="url(#paint0_radial_820_342)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="url(#paint1_radial_820_342)"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </div>

                  {/* Button Content */}
                  <span className="relative z-10 font-normal text-black">
                    Longevity
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, scale: 0.8 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <button className="group bg-black text-[#FCF8F1] text-[14px] rounded-full py-[22px] px-[40px] flex items-center gap-2 overflow-hidden cursor-pointer max-w-fit ">
            <span className="text-center transition-transform duration-200 group-hover:-translate-x-2">
              All Products
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-2" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Applications;
