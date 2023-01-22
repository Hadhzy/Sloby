import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toolsConstructors } from '../utils/constants';
import { useRouter } from 'next/router';
import InterfaceIntegration from '../lib/handlers/InterfaceIntegration';
import DatabaseService from '../lib/services/DatabaseService';
import parse from 'html-react-parser';
import ElementModifier from '../lib/modifiers/ElementModifier';

export default function SlobyPreviewSiteInterface() {
  const [currentSource, setCurrentSource] = useState('');
  const router = useRouter();
  useEffect(() => {
    // source.getSourceCodebyId(router.query.id as string, setCurrentSource);
    const source = new InterfaceIntegration(new DatabaseService());
    const sourceCode = source.getProjectBasedSourceCode(
      router.query.id as string
    );

    setCurrentSource(sourceCode);
    console.log(typeof sourceCode);
  }, [localStorage.getItem('GLOBAL_SOURCE')]);
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
        <div
          className="ml-2 mt-3"
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            new ElementModifier(e.target)
          }
        >
          {parse(currentSource)}
        </div>
      </motion.div>
    </motion.div>
  );
}
