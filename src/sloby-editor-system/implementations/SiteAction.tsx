import React from 'react';
import { motion } from 'framer-motion';

export default function SiteAction() {
  return (
    <div className="ml-6 mr-3 mt-5 w-1/4">
      <motion.div
        className="bg-action-bg w-80 h-52 rounded-xl"
        transition={{ delay: 1.5, duration: 0.3 }}
        animate={{ opacity: [0, 1], scale: [0, 1] }}
      >
        <div className="border-b border-editor-border-color items-center w-full flex justify-center h-10">
          <p className="font-semibold">Site Actions</p>
        </div>
      </motion.div>
    </div>
  );
}
