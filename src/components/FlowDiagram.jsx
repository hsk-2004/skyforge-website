import React from "react";
import { motion } from "framer-motion";
import { FileText, File, Table, Image as ImageIcon } from "lucide-react";

const FlowDiagram = () => {
  return (
    <div className="relative w-[420px] h-[720px]">

      {/* ================= CURVES SVG (BACKGROUND) ================= */}
      <img
        src="/curves.svg"
        alt="Data Flow Curves"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* ================= ICONS (POSITIONED ON CURVES) ================= */}

      {/* PDF */}
      <motion.div
        className="absolute top-[210px] left-[110px] cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.15, y: -8, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      >
        <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition-shadow duration-200">
          <FileText className="text-red-500 w-6 h-6" />
        </div>
      </motion.div>

      {/* CSV */}
      <motion.div
        className="absolute top-[190px] right-[90px] cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.15, y: -8, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      >
        <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition-shadow duration-200">
          <Table className="text-green-500 w-6 h-6" />
        </div>
      </motion.div>

      {/* DOC */}
      <motion.div
        className="absolute top-[305px] left-[155px] cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.15, y: -8, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      >
        <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition-shadow duration-200">
          <File className="text-blue-500 w-6 h-6" />
        </div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="absolute top-[340px] right-[125px] cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.15, y: -8, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      >
        <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition-shadow duration-200">
          <ImageIcon className="text-purple-500 w-6 h-6" />
        </div>
      </motion.div>

      {/* TXT */}
      <motion.div
        className="absolute bottom-[170px] left-[170px] cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.15, y: -8, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      >
        <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition-shadow duration-200">
          <FileText className="text-gray-600 w-6 h-6" />
        </div>
      </motion.div>

      {/* ================= LABEL ================= */}
      <div className="absolute bottom-12 right-6 bg-white/70 backdrop-blur px-4 py-2 rounded-xl shadow text-xs text-gray-700">
        Different Document Formats
      </div>

    </div>
  );
};

export default FlowDiagram;