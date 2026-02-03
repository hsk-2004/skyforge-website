import React from "react";
import { motion } from "framer-motion";

const UseCases = () => {
  const cards = Array(6).fill({
    category: "Manufacturing",
    title: "Accelerating RFQ Processes for a Leading Metals Manufacturer",
    date: "Jul 28, 2025",
  });

  return (
    <section className="bg-[#e9e7e4] py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2 
          className="text-[32px] md:text-[40px] font-medium text-black mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore Use-Cases Insights
        </motion.h2>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {cards.map((item, index) => (
              <motion.div
                key={index}
                className="snap-center min-w-[280px] bg-white rounded-[28px] p-6 flex flex-col justify-between min-h-[260px] cursor-pointer shadow-md"
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0 }}
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
              className="bg-white rounded-[28px] p-8 flex flex-col justify-between min-h-[260px] cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.97 }}
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
                  className="bg-[#f2f2f2] text-sm px-4 py-2 rounded-full flex items-center gap-2"
                  whileHover={{ backgroundColor: "#d9d9d9", scale: 1.05 }}
                  transition={{ duration: 0 }}
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