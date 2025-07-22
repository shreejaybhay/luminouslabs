"use client";

import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className="bg-[#FCF8F1] py-12 lg:px-6 flex items-center justify-center flex-col gap-12">
      {/* Text */}
      <div className="w-full text-center">
        <h4 className="text-[14px] font-medium text-[#0000004d]">Benefits</h4>
        <h1 className="text-[24px] font-medium text-[#000]">
          Feel the difference in every aspect
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-2.5 p-4 lg:p-0">
        {/* card 1 */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#F2ECE2] lg:w-[960px] lg:h-[450px] rounded-[40px] flex flex-col lg:flex-row w-full"
        >
          <div className="w-full lg:w-[400px] h-[300px] lg:h-full rounded-[40px] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/Benefits1.webp"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between w-full lg:w-[560px] px-6 py-8">
            <div>
              <h1 className="text-[28px] lg:text-[36px] font-medium text-black">
                Optimized female health
              </h1>
              <p className="text-[16px] font-normal text-[#00000080] mt-2">
                Red light therapy can effectively support your fertility in the
                long-term.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <p className="text-[14px] font-normal text-[#00000080]">
                By increasing blood flow, supporting tissue regeneration and
                balancing hormones, CellLight™ supports your uterus and ovaries
                naturally.
              </p>
              <div className="flex flex-col w-full gap-4 lg:flex-row">
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Promotes healthy tissue</p>
                </div>
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Promotes healthy tissue</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* card 2 */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#F2ECE2] lg:w-[960px] lg:h-[450px] rounded-[40px] flex flex-col lg:flex-row w-full"
        >
          <div className="w-full lg:w-[400px] h-[300px] lg:h-full rounded-[40px] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/Benefits2.webp"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between w-full lg:w-[560px] px-6 py-8">
            <div>
              <h1 className="text-[28px] lg:text-[36px] font-medium text-black">
                Enhanced deep sleep
              </h1>
              <p className="text-[16px] font-normal text-[#00000080] mt-2">
                Near-infrared light enhances mitochondrial function in neurons,
                <span className="text-black">helping improve deep sleep.</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <p className="text-[14px] font-normal text-[#00000080]">
                CellLight™ will not disturb your natural sleep-wake-cycle and
                melatonin production.
              </p>

              <div className="flex flex-col w-full gap-4 lg:flex-row">
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Longer deep sleep</p>
                </div>
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Enhanced neuronal function</p>
                </div>
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Balances sleep hormone secretion</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* card 3 */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#F2ECE2] lg:w-[960px] lg:h-[450px] rounded-[40px] flex flex-col lg:flex-row w-full"
        >
          <div className="w-full lg:w-[400px] h-[300px] lg:h-full rounded-[40px] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/Benefits3.webp"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between w-full lg:w-[560px] px-6 py-8">
            <div>
              <h1 className="text-[28px] lg:text-[36px] font-medium text-black">
                Youthful skin
              </h1>
              <p className="text-[16px] font-normal text-[#00000080] mt-2">
                CellLight™ accelerates cellular repair and stem cell
                proliferation, leading to{" "}
                <span className="text-black">
                  higher natural collagen and elastin production.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <p className="text-[14px] font-normal text-[#00000080]">
                This results in youthful, glowing and clear skin, allowing you
                to look as young as you feel in your heart.
              </p>

              <div className="flex flex-col w-full gap-4 lg:flex-row">
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Accelerated cellular repair</p>
                </div>
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>More natural collagen and elastin</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* card 4 */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#F2ECE2] lg:w-[960px] lg:h-[450px] rounded-[40px] flex flex-col lg:flex-row w-full"
        >
          <div className="w-full lg:w-[400px] h-[300px] lg:h-full rounded-[40px] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/Benefits4.webp"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between w-full lg:w-[560px] px-6 py-8">
            <div>
              <h1 className="text-[28px] lg:text-[36px] font-medium text-black">
                Extended longevity
              </h1>
              <p className="text-[16px] font-normal text-[#00000080] mt-2">
                CellLight™ helps mitochondria produce more energy (ATP),
                <span className="text-black">
                  supporting long-term health and protecting against chronic
                  conditions.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <p className="text-[14px] font-normal text-[#00000080]">
                Increasing cellular energy not only adds years to your life
                (lifespan) but also
                <span className="text-black">
                  ensures those years are lived in good health (healthspan).
                </span>
              </p>

              <div className="flex flex-col w-full gap-4 lg:flex-row">
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Improved cellular energy production</p>
                </div>
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Reduced aging velocity</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* card 5 */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#F2ECE2] lg:w-[960px] lg:h-[450px] rounded-[40px] flex flex-col lg:flex-row w-full"
        >
          <div className="w-full lg:w-[400px] h-[300px] lg:h-full rounded-[40px] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/Benefits5.webp"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between w-full lg:w-[560px] px-6 py-8">
            <div>
              <h1 className="text-[28px] lg:text-[36px] font-medium text-black">
                Boosted mental & physical resilience
              </h1>
              <p className="text-[16px] font-normal text-[#00000080] mt-2">
                Studies show consistent use of CellLight™{" "}
                <span className="text-black">
                  improves heart rate variability (HRV) over time and reduces
                  oxidative stress.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <p className="text-[14px] font-normal text-[#00000080]">
                Higher HRV scores reflect{" "}
                <span className="text-black">
                  greater mental and physical resilience.
                </span>{" "}
                Lowering oxidative stress{" "}
                <span className="text-black">helps prevent conditions</span>{" "}
                like atherosclerosis, hypertension, Alzheimer's disease,
                diabetes, infertility, chronic fatigue syndrome, and{" "}
                <span className="text-black">slows the aging process.</span>
              </p>

              <div className="flex flex-col w-full gap-4 lg:flex-row">
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Reduced oxidative stress</p>
                </div>
                <div className="border border-[#D9D4CB] text-[14px] font-normal text-[#00000080] p-4 rounded-[12px] w-full">
                  <p>Higher HRV</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
