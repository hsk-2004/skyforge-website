import React from "react";
import { motion } from "framer-motion";
import FlowDiagram from "./FlowDiagram";

const Hero = () => {
  return (
    <section
      className="
        relative
        bg-[#d6e8f8]
        pt-20 sm:pt-24 md:pt-28
        overflow-visible
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10">

          {/* LEFT - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-4 sm:pt-8 pb-10 md:pb-20"
          >
            <h1
              className="
                text-[26px]
                sm:text-[34px]
                md:text-[40px]
                lg:text-[46px]
                font-semibold
                leading-tight
                text-[#0B0F14]
                mt-8 sm:mt-20 md:mt-32
              "
            >
              We Bring Your <br />
              Unstructured <br />
              Data…
            </h1>

            
          </motion.div>

          {/* RIGHT - FlowDiagram */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              flex justify-center
              mt-[-40px] sm:mt-0
              scale-[0.9] sm:scale-[0.95] md:scale-100
              md:relative md:left-[-120px]
            "
          >
            <FlowDiagram />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
