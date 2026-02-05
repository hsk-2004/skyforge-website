import React from "react";
import { motion } from "framer-motion";

const UseCases = () => {
  const cards = Array(6).fill({
    category: "Manufacturing",
    title: "Accelerating RFQ Processes for a Leading Metals Manufacturer",
    date: "Jul 28, 2025",
  });

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Individual word animation
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="bg-[#e9e7e4] py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] font-medium text-black mb-10 md:mb-14"
        >
          <motion.span variants={wordVariants} className="inline-block mr-2">
            Explore
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-2 relative">
            Use-Cases
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.7,
                ease: "easeOut" 
              }}
              className="
                absolute bottom-0 left-0 w-full h-[2px] origin-left
                bg-gradient-to-r from-indigo-500 to-purple-500
              "
            />
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block">
            Insights
          </motion.span>
        </motion.h2>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {cards.map((item, index) => (
              <motion.div
                key={index}
                className="snap-center min-w-[280px] bg-white rounded-[28px] p-6 flex flex-col justify-between min-h-[260px] cursor-pointer shadow-md"
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                {/* Top */}
                <div>
                  <p className="text-sm text-gray-500 mb-4">
                    {item.category}
                  </p>

                  <div className="h-px w-full bg-gray-200 mb-6" />

                  <h3 className="text-base font-medium text-black leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <button className="bg-[#f2f2f2] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    Read story <span>↗</span>
                  </button>

                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[28px] p-8 flex flex-col justify-between min-h-[260px] cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
            >
              {/* Top */}
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  {item.category}
                </p>

                <div className="h-px w-full bg-gray-200 mb-6" />

                <h3 className="text-lg font-medium text-black leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between">
                <motion.button 
                  className="bg-[#f2f2f2] text-sm px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-200"
                  whileHover={{ 
                    backgroundColor: "#d9d9d9", 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  Read story <span>↗</span>
                </motion.button>

                <p className="text-sm text-gray-400">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;