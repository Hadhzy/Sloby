import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import JsxParser from 'react-jsx-parser';
import Input from './editor-components/text-tool/Input';
import interfaceIntegrator from '../lib/handlers/InteraceIntegrators/InterfaceSourceIntegrator';
import { ToolClickedContext } from '../../utils/contexts/ToolClicked';
import InterfacePropsIntegrator from '../lib/handlers/InteraceIntegrators/InterfacePropsIntegrator';
import { InputsContext } from '../../utils/contexts/Inputs';

export default function SlobyPreviewSiteInterface() {
  const [currentSource, setCurrentSource] = useState<any>('');
  const router = useRouter();
  const source = new interfaceIntegrator();
  const props = new InterfacePropsIntegrator();
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const { inputs, setInputs, setLastClicked } = useContext(InputsContext);

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

  useEffect(() => {
    props.add(inputs, router.query.id as string);
  }, [inputs]);

  useEffect(() => {
    async function getStoredInputs() {
      const storedValues = await props.getSingle(router.query.id as string);
      if (storedValues) {
        setInputs(storedValues);
      }
    }

    getStoredInputs();
  }, []);

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
      className="w-full h-screen h-full bg-interface-bg"

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
          className="ml-2 mt-3 flex flex-col gap-4 ease-in-out duration-150"
          onClick={(e: any) => setLastClicked(e.target.id)}
        >
          {inputs.map((input, index: number) => {
            return <Input key={input.id} input={input} index={index} />;
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
