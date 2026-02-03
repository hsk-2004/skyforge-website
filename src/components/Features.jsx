import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Data Centralisation",
      image: "/dc.png",
      bg: "bg-[#eef5fb]",
    },
    {
      title: "Text Extraction OCR",
      image: "/teo.png",
      bg: "bg-[#f3f0fb]",
    },
    {
      title: "Intelligent Search",
      image: "/is.png",
      bg: "bg-[#fbf0f5]",
    },
    {
      title: "Integration with Existing Platforms",
      image: "/iep.png",
      bg: "bg-[#f1faf3]",
    },
    {
      title: "Automation of Enterprise Workflows",
      image: "/aew.png",
      bg: "bg-[#faf4ef]",
    },
  ];

  return (
    <section className="bg-[#e9e7e4] py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* ===== TOP TEXT ===== */}
        <motion.div 
          className="max-w-3xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-black mb-3 leading-tight">
            Unlock GenAI's Efficiency for Your Organisation
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our solutions centralise, structure, and power your enterprise data
            with AI — making your workflows truly AI-native.
          </p>
        </motion.div>

        {/* ===== FEATURE CONTAINER ===== */}
        <div className="bg-[#f7f6f4] rounded-[32px] p-5 sm:p-8">

          <p className="text-xs text-gray-600 mb-6">
            Our Product Offerings
          </p>

          {/* ================= MOBILE SLIDER ================= */}
          <div className="sm:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className={`
                    ${item.bg}
                    snap-center
                    min-w-[260px]
                    rounded-[20px]
                    p-5
                    flex-shrink-0
                    text-center
                    flex flex-col items-center justify-center
                    cursor-pointer
                    shadow-md
                  `}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[150px] object-contain mb-4"
                  />
                  <h3 className="text-sm font-medium text-black leading-snug">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= DESKTOP / TABLET GRID ================= */}
          <div className="hidden sm:block">

            {/* TOP ROW */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {features.slice(0, 3).map((item, index) => (
                <motion.div
                  key={index}
                  className={`
                    ${item.bg} 
                    rounded-[20px] 
                    p-6 
                    text-center 
                    flex flex-col items-center justify-center
                    cursor-pointer
                    shadow-md
                    hover:shadow-2xl
                    transition-shadow
                    duration-0
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.06, y: -8 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[180px] object-contain mb-4"
                  />
                  <h3 className="text-sm font-medium text-black leading-snug">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM ROW CENTERED */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 max-w-2xl">
                {features.slice(3, 5).map((item, index) => (
                  <motion.div
                    key={index}
                    className={`
                      ${item.bg} 
                      rounded-[20px] 
                      p-6 
                      text-center 
                      flex flex-col items-center justify-center
                      cursor-pointer
                      shadow-md
                      hover:shadow-2xl
                      transition-shadow
                      duration-0
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                    whileHover={{ scale: 1.06, y: -8 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-h-[180px] object-contain mb-4"
                    />
                    <h3 className="text-sm font-medium text-black leading-snug">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;