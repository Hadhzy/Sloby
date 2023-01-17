import React from 'react';
import { motion } from 'framer-motion';
import { toolsConstructors } from '../utils/constants';
import { useRouter } from 'next/router';

export default function SlobyPreviewSiteInterface() {
  const router = useRouter();
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
        {router.query.id === 'e1a222bd-ba13-4e38-98c6-b200682ce746' && (
          <div>It is only going to be displayed in here</div>
        )}
      </motion.div>
    </motion.div>
  );
}
