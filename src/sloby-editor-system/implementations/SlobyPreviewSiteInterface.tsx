import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toolsConstructors } from '../utils/constants';
import { useRouter } from 'next/router';
import InterfaceIntegration from '../lib/handlers/InterfaceIntegration';
import DatabaseService from '../lib/services/DatabaseService';

export default function SlobyPreviewSiteInterface() {
  const [currentSource, setCurrentSource] = useState<
    Array<{ preview_source: string }>
  >([{ preview_source: '' }]);
  const router = useRouter();
  const source = new DatabaseService();

  useEffect(() => {
    console.log(router.query.id);
    source.getSourceCodebyId(router.query.id as string, setCurrentSource);
  }, []);
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
        <div className="ml-2 mt-3">{currentSource[0].preview_source}</div>
      </motion.div>
    </motion.div>
  );
}
