import React from 'react';
import { motion } from 'framer-motion';
import { toolsConstructors } from '../utils/constants';
import { useRouter } from 'next/router';
import InterfaceIntegration from '../lib/handlers/InterfaceIntegration';

export default function SlobyPreviewSiteInterface() {
  const router = useRouter();
  const source = new InterfaceIntegration();

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
        <div className="ml-2 mt-3">
          {source.getProjectBasedSourceCode(router.query.id as string)}
        </div>
      </motion.div>
    </motion.div>
  );
}
