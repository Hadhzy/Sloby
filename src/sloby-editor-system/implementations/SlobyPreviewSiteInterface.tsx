import React, { useEffect, useState, useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Input from './editor-components/text-tool/Input';
import { InputsContext } from '../../utils/contexts/Inputs';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import { supabase } from '../../config/supabase';

export default function SlobyPreviewSiteInterface() {
  const router = useRouter();
  const { inputs, setInputs, setLastClicked, saveDimensions } =
    useContext(InputsContext);
  const containerSizeRef = useRef<HTMLDivElement>(null);
  const supabase: any = useSupabaseClient();
  const [width, setWidth] = useState<number>(0);
  const [initialFinished, setInitialFinished] = useState<boolean>(false);

  useEffect(() => {
    // Fetching the initial data
    console.log('fetch initial');
    getInitialProjectData().then((data) => {
      console.log(data);
      setInputs(data);
      setInitialFinished(true);
    });
  }, []);

  // When the inputs change, update the project
  useEffect(() => {
    if (!initialFinished) return;
    updateProject();
  }, [inputs]);

  // Subscribing to changes on the project
  // This does not provide the initial data and must be requested separately

  async function getInitialProjectData() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', router.query.id as string);

    if (error) {
      console.error(error);
      return [];
    }

    return data[0].interface_source;
  }

  //on project update this function will log out the recieved payload

  //UPDATING the project with the new interface_source
  async function updateProject() {
    console.log('update');
    await supabase
      .from('projects')
      .update({ interface_source: inputs })
      .match({ id: router.query.id as string });
  }

  //getting the list size, setting the width to be the new width
  const getListSize = () => {
    if (containerSizeRef.current == undefined) {
      return;
    }
    const newWidth = containerSizeRef.current.clientWidth;
    setWidth(newWidth);
  };

  //Listening for resizing even from the browser and then getting the list size
  //cleanup afterwards
  useEffect(() => {
    window.addEventListener('resize', getListSize);
    getListSize();
    return () => {
      window.removeEventListener('resize', getListSize);
    };
  }, []);

  return (
    <motion.div className="w-full h-screen h-full bg-interface-bg">
      <motion.div
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="h-[95%] "
      >
        <p className="flex justify-center mt-10 text-[50px] welcome-color">
          SlobyBuilder
        </p>
        <div
          className=" flex flex-col gap-4 ease-in-out duration-150 relative "
          ref={containerSizeRef}
          onMouseDown={(e: any) => {
            setLastClicked(e.target.id),
              saveDimensions(
                { x: e.target.offsetWidth, y: e.target.offsetHeight },
                e.target.id
              );
          }}
        >
          {inputs
            ? inputs.map((input, index: number) => {
                return (
                  <Input
                    key={input.id}
                    input={input}
                    index={index}
                    width={width}
                  />
                );
              })
            : ''}
        </div>
      </motion.div>
    </motion.div>
  );
}
