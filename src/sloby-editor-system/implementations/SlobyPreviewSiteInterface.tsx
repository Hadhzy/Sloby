import React from 'react';
import { motion } from 'framer-motion';
import { toolsConstructors } from '../utils/constants';

export default function SlobyPreviewSiteInterface() {
  return (
    <motion.div className="w-full bg-interface-bg">
      <motion.div
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="h-[95%]"
      >
        <p className="flex justify-center mt-10 text-[50px]  welcome-color">
          SlobyBuilder
        </p>
      </motion.div>
    </motion.div>
  );
}
