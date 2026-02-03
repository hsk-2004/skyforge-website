import React from "react";
import { motion } from "framer-motion";
import { Search, Database, FileText, Zap } from "lucide-react";

const Hero2 = () => {
  return (
    <section className="
  relative
  bg-[#d6e8f8]
  pt-24 md:pt-28
  pb-0
  overflow-visible
"
>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* LEFT TEXT */}
          <motion.div
  initial={{ opacity: 0, x: -32 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="
    mt-[-90px] ml-10         /* 📱 Mobile: down + right */
    sm:mt-4 sm:ml-2   /* 📲 Tablet */
    lg:mt-0 lg:ml-0   /* 💻 Desktop (UNCHANGED) */
  "
>
  <h2 className="text-[34px] sm:text-[40px] lg:text-[46px] font-semibold leading-tight text-[#0B0F14]">
    ...into a centralised,<br />
    intelligent asset
  </h2>
</motion.div>


          {/* RIGHT FLOW */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* FLOW WRAPPER */}
            <div className="relative flex flex-col items-center lg:-ml-24">

              {/* TOP NODE */}
              <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.98 }}
  transition={{ delay: 0.3, duration: 0 }}
  className="
    z-10
    mt-[-50px] ml-6          /* 📱 Mobile: down + right */
    sm:mt-4 sm:ml-4   /* 📲 Tablet */
    lg:mt-0 lg:ml-0   /* 💻 Desktop (UNTOUCHED) */
    cursor-pointer
  "
>
  <div
    className="
      bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 max-w-xs
      lg:translate-x-[-80px] lg:translate-y-[-115px]
      hover:shadow-2xl transition-shadow duration-0
    "
  >
    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
      <Search className="w-5 h-5 text-white" />
    </div>

    <p className="text-xs font-medium text-gray-700">
      Extract text & scraping from unstructured data
    </p>
  </div>
</motion.div>

<motion.img
  src="/line1.svg"
  alt="connector-mobile"
  className="
    h-[100px] w-auto my-2 pointer-events-none opacity-80
    block lg:hidden        /* 📱 show on mobile, hide on laptop */
    mt-[100px] ml-[150px]              /* 📱 mobile positioning */
  "
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, x: -80, y: -90 }}
  transition={{ delay: 0.4, duration: 0.3 }}
/>



              {/* CONNECTOR LINE (FROM PUBLIC FOLDER) */}
           <motion.img
  src="/line1.svg"
  alt="connector-desktop"
  className="
    h-[100px] w-auto my-2 pointer-events-none opacity-80
    hidden lg:block        /* 💻 show on laptop, hide on mobile */
  "
  initial={{ opacity: 0, x: 0, y: 0 }}
  animate={{ opacity: 1, x: -85, y: -125 }}
  transition={{ delay: 0.4, duration: 0.3 }}
/>


              {/* MIDDLE NODE */}
              <motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.98 }}
  transition={{ delay: 0.6, duration: 0 }}
  className="relative z-10 cursor-pointer"
>
  <div
    className="
      relative
      bg-white rounded-2xl shadow-lg p-4
      flex items-center gap-3 max-w-xs

      top-[-100px] left-[1px]          /* 📱 MOBILE: move box */
      lg:top-[-40px] lg:left-0              /* 💻 DESKTOP unchanged */
      lg:translate-x-[-80px] lg:translate-y-[-100px]
      hover:shadow-2xl transition-shadow duration-0
    "
  >
    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
      <Database className="w-5 h-5 text-white" />
    </div>

    <p className="text-xs font-medium text-gray-700">
      Centralised Knowledge index
    </p>
  </div>
</motion.div>


            </div>
           <motion.img
  src="/line2.svg"
  alt="connector-mobile"
  className="
    h-[80px] w-auto my-2
    pointer-events-none opacity-80
    block lg:hidden        /* 📱 show on mobile only */
  "
  initial={{ opacity: 0, x: 0, y: 0 }}
  animate={{ opacity: 1, x: 95, y: -110 }}   // mobile-specific movement
  transition={{ delay: 0.3, duration: 0.3 }}
/>

<motion.img
  src="/line2.svg"
  alt="connector-desktop"
  className="
    h-[100px] w-auto my-2
    pointer-events-none opacity-80
    hidden lg:block        /* 💻 show on desktop only */
    lg:-ml-24
  "
  initial={{ opacity: 0, x: 0, y: 0 }}
  animate={{ opacity: 1, x: 120, y: -150}} // desktop-specific movement
  transition={{ delay: 0.4, duration: 0.3 }}
/>




            {/* BOTTOM ROW */}
            <div className="grid grid-cols-2 gap-4 mt-10 lg:-ml-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, y: -4 }}
    whileTap={{ scale: 0.98 }}
    transition={{ delay: 0.8, duration: 0 }}
    className="cursor-pointer"
  >
    <div
      className="
    relative
    bg-white rounded-xl shadow-lg
    p-3
    lg:p-4
    text-center

    -mt-[150px]          /* 📱 mobile SAME */
    lg:-top-[40px]      /* 💻 desktop UP */
    lg:-left-[60px]      /* 💻 desktop LEFT */
    hover:shadow-2xl transition-shadow duration-0
  "

    >
      <div
        className="
          w-8 h-8           /* 📱 smaller icon */
          lg:w-10 lg:h-10   /* 💻 desktop */
          bg-pink-500 rounded-lg mx-auto
          flex items-center justify-center mb-1
          lg:mb-2
        "
      >
        <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
      </div>

      <p className="text-[11px] lg:text-xs font-medium text-gray-700">
        Intelligent Search
      </p>

      <p className="text-[9px] lg:text-[10px] text-gray-500 mt-0.5 lg:mt-1">
        Enterprise-grade semantic search
      </p>
    </div>
  </motion.div>

              <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.98 }}
  transition={{ delay: 1, duration: 0 }}
  className="cursor-pointer"
>
  <div
    className="
    relative
    bg-white rounded-xl shadow-lg
    p-3
    lg:p-4
    text-center

    -mt-[150px]          /* 📱 mobile SAME */
    lg:-top-[40px]      /* 💻 desktop UP */
    lg:-left-[60px]      /* 💻 desktop LEFT */
    hover:shadow-2xl transition-shadow duration-0
  "
  >
    <div
      className="
        w-8 h-8           /* 📱 smaller icon */
        lg:w-10 lg:h-10   /* 💻 desktop */
        bg-orange-500 rounded-lg mx-auto
        flex items-center justify-center mb-1
        lg:mb-2
      "
    >
      <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
    </div>

    <p className="text-[11px] lg:text-xs font-medium text-gray-700">
      Workflow Automation
    </p>

    <p className="text-[9px] lg:text-[10px] text-gray-500 mt-0.5 lg:mt-1">
      Automate complex workflows
    </p>
  </div>
</motion.div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;