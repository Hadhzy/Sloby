import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import JsxParser from 'react-jsx-parser';
import Input from './editor-components/text-tool/Input';
import interfaceIntegrator from '../lib/handlers/InteraceIntegrators/InterfaceSourceIntegrator';
import { ToolClickedContext } from '../../utils/contexts/ToolClicked';

export default function SlobyPreviewSiteInterface() {
  const [currentSource, setCurrentSource] = useState<any>('');
  const router = useRouter();
  const source = new interfaceIntegrator();
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);

  async function getCurrentSource() {
    return await source.getProjectBasedSourceCode(router.query.id as string);
  }

  async function handleDataFetching() {
    if ((await source.getSingle(router.query.id as string)) === null) {
      return await source.add('', router.query.id as string);
    } else {
      const sourceCode = await getCurrentSource();
      return setCurrentSource(sourceCode);
    }
  }

  if (typeof window !== 'undefined') {
    useEffect(() => {
      handleDataFetching();
    }, [toolClicked]);
  }

  // if (typeof window !== 'undefined') {
  //   useEffect(() => {
  //     const source = new InterfaceIntegration(new DatabaseService());
  //     source.getProjectBasedSourceCode(router.query.id as string);
  //     const sourceCode = source.getProjectBasedSourceCode(
  //       router.query.id as string
  //     );
  //     if (localStorage.getItem(General.LOCAL_DB_NAME)) {
  //       setCurrentSource(sourceCode);
  //       console.log(sourceCode);
  //     } else return setCurrentSource('');
  //   }, [localStorage.getItem(General.LOCAL_DB_NAME)]);
  // }

  return (
    <motion.div
      className="w-full bg-interface-bg"

      // onDragOver={(e) => {
      //   e.preventDefault();
      //   console.log(e.dataTransfer.getData("test"));
      //   console.log(e);
      // }}
    >
      <motion.div
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="h-[95%]"
      >
        <p className="flex justify-center mt-10 text-[50px] welcome-color">
          SlobyBuilder
        </p>

        <div
          className="ml-2 mt-3 flex flex-col gap-4 "
          onClick={(e: any) => console.log(e.target)}
        >
          <JsxParser
            components={{ Input }}
            className="relative"
            jsx={currentSource}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
