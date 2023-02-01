import React from 'react';
import { motion } from 'framer-motion';
export default function SlobyModifier() {
  return (
    <div className="w-1/4 bg-tools-bg text-white">
      <motion.div
        transition={{ delay: 1.2, duration: 0.3 }}
        animate={{ opacity: [0, 1], scale: [0, 1] }}
        className="bg-sloby-tools-bg ml-3 mr-3 h-[92.2vh] xl:w-80 lg:w-72 rounded-xl mt-3 outline-none"
      >
        <div className="border-b border-editor-border-color items-center w-full flex justify-center h-14">
          <p className="text-lg font-semibold">Sloby Modifier</p>
        </div>
        <div className="ml-4 mt-4 font-semibold text-lg">Color:</div>
      </motion.div>
    </div>
  );
}
