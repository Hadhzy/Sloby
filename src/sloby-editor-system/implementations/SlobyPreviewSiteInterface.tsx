import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { toolsConstructors } from '../utils/constants';
import { useRouter } from 'next/router';
import InterfaceIntegration from '../lib/handlers/InterfaceIntegration';
import DatabaseService from '../lib/services/DatabaseService';
import ElementModifier from '../lib/modifiers/ElementModifier';
import JsxParser from 'react-jsx-parser';
import SlobyInput from '../../components/SlobyInput';
import JSXStyle from 'styled-jsx/style';

import Input from './editor-components/text-tool/Input';
export default function SlobyPreviewSiteInterface() {
  const [currentSource, setCurrentSource] = useState('');
  const router = useRouter();

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const source = new InterfaceIntegration(new DatabaseService());
      source.getProjectBasedSourceCode(router.query.id as string);
      const sourceCode = source.getProjectBasedSourceCode(
        router.query.id as string
      );
      if (localStorage.getItem('GLOBAL_SOURCE')) {
        setCurrentSource(sourceCode);
      } else return setCurrentSource('');
    }, [localStorage.getItem('GLOBAL_SOURCE')]);
  }

  return (
    <motion.div className="w-full bg-interface-bg">
      <motion.div
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="h-[95%]"
      >
        <p className="flex justify-center mt-10 text-[50px] welcome-color">
          SlobyBuilder
        </p>
        <div className="ml-2 mt-3 flex flex-col gap-4">
          <JsxParser jsx={currentSource} components={{ Input }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
