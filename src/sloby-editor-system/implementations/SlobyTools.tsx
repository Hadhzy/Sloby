import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect, useState, useContext } from 'react';
import { getTools } from '../../utils/api';
import { TSlobyTool } from '../../utils/types';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';

export default function SlobyTools() {
  const supabase = useSupabaseClient();
  const { setTools, tools } = useContext(ProjectsContext);

  useEffect(() => {
    getTools(supabase, setTools);
  }, [supabase]);

  return (
    <div className="bg-tools-bg ">
      <motion.div
        transition={{ delay: 1.2, duration: 0.4 }}
        animate={{ x: [-500, 0] }}
        className="bg-sloby-tools-bg  ml-2 mt-6 mr-6 xl:w-[335px] lg:w-[310px] h-3/4 rounded-xl flex flex-col items-center "
      >
        <div className="border-b border-editor-border-color items-center w-full flex justify-center h-14">
          <p className="text-lg font-semibold">Sloby Tools</p>
        </div>
        <div className="flex flex-wrap gap-8 p-2 justify-center mt-6">
          {/**@ts-expect-error */}
          {tools.map((tool: TSlobyTool) => {
            return (
              <div
                key={tool.id}
                className="w-20 h-20 bg-tool-bg flex ease-in-out duration-150  flex-wrap justify-center items-center rounded-xl mt-4 hover:scale-110 cursor-pointer hover:bg-tool-bg-hover"
              >
                <FontAwesomeIcon icon={faFont} className="text-2xl" />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
