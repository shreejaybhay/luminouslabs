"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <div className="w-screen h-screen bg-[#FCF8F1] py-12 px-6 flex items-center justify-center ">
      {/* card */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, width: "100%" }}
        whileInView={{ filter: "blur(0px)", opacity: 1, width: "1280px" }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.25 }}
        className="w-full h-full lg:w-[1280px] lg:h-[708px] relative rounded-[40px] overflow-hidden"
      >
        <h1 className="text-[17px] sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug absolute text-center top-12 left-1/2 -translate-x-1/2 text-[#fff9] w-3/4 lg:w-[45%] lg:font-semibold mt-[32px]">
          <span className="text-[#fcf8f1]">Meet Kini,</span>the first wearable
          using non-invasive light technology to support and improve female
          longevity
        </h1>

        <img
          className="object-cover w-full h-full"
          src="/productBg.webp"
          alt=""
        />
        <img
          className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          src="/product.webp"
          alt=""
        />

        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[85%] max-w-[722px]">
          <div className="px-4 py-4 border shadow-2xl bg-black/40 backdrop-blur-sm rounded-2xl md:rounded-full sm:px-6 lg:px-8 sm:py-5 md:py-4 lg:py-4 border-white/10">
            {/* Mobile/Small screens - Stacked layout */}
            <div className="block md:hidden">
              <div className="mb-3 sm:mb-4">
                <h2 className="text-sm font-medium text-white sm:text-base">
                  Get to know Kini now!
                </h2>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white sm:text-2xl">
                  $149,00
                </span>
                <button className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl ml-4">
                  Buy now
                </button>
              </div>
            </div>

            {/* MD screens and up - Horizontal layout */}
            <div className="items-center justify-between hidden md:flex">
              <div className="flex-1">
                <h2 className="text-base font-medium text-white lg:text-lg">
                  Get to know Kini now!
                </h2>
              </div>

              <div className="flex-shrink-0 mx-6 lg:mx-8">
                <span className="text-2xl font-bold text-white lg:text-3xl">
                  $149,00
                </span>
              </div>

              <div className="flex-shrink-0">
                <button className="bg-white hover:bg-gray-100 text-black px-6 lg:px-8 py-3 lg:py-3.5 rounded-full text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
