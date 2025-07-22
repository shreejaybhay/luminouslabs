"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Padding animation: from responsive values to 0
  const paddingX = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["5rem", "0rem", "0rem"]
  ); // base px-4 to px-0
  const paddingY = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["2rem", "0rem", "0rem"]
  );
  const rounded = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["40px", "0px", "0px"]
  );


  return (
    <div
      ref={containerRef}
      className="lg:h-screen w-full bg-[#FCF8F1] flex flex-col mt-[72px] sm:mt-[65px] lg:mt-0"
    >
      {/* Animated padding container */}
      <motion.div
        className="flex flex-col flex-1 w-full h-full"
        style={{
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        {/* Hero Content */}
        <div className="relative flex flex-col flex-1 w-full h-full">
          {/* Navbar */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
          </motion.div>

          {/* Hero Image Container */}
          <motion.div
            style={{ borderRadius: rounded }}
            className="relative inset-0 w-full overflow-hidden bg-gray-400 flex flex-col h-[279px] sm:h-[460px] md:h-[594px] lg:h-full transition-all duration-700 ease-in-out"
          >
            {/* Light Overlay */}
            <motion.img
              className="absolute inset-0 z-20 object-cover w-full h-full pointer-events-none"
              src="./Hero-Light.avif"
              alt="hero-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0.15, 0.1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 70%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 70%, black 100%)",
              }}
            />

            {/* Main Hero Image */}
            <motion.img
              className="absolute inset-0 z-10 object-cover object-top w-full h-full"
              src="./Hero-Image.webp"
              alt="hero-image"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Desktop Text Overlay */}
            <div className="absolute inset-x-0 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-[60px] hidden lg:flex flex-col items-center justify-center z-30 px-4">
              <motion.h2
                className="text-base lg:text-lg xl:text-xl text-[#918E88] mb-2 text-center max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Red Light Therapy: proven, safe, and non-invasive
              </motion.h2>
              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-[72px] font-medium text-[#FCF8F1] leading-tight text-center max-w-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Your cells, supercharged
              </motion.h1>
            </div>
          </motion.div>

          {/* Mobile Text */}
          <div className="w-full px-1 mt-6 lg:hidden md:mt-12">
            <div className="flex flex-col max-w-2xl gap-2 mx-auto text-center md:gap-8">
              <motion.h2
                className="text-sm sm:text-base md:text-lg text-[#918E88] mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Red Light Therapy: proven, safe, and non-invasive
              </motion.h2>
              <motion.h1
                className="text-2xl sm:text-[36px] md:text-[52px] sm:font-medium md:font-semibold text-[#000000] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your cells, supercharged
              </motion.h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
