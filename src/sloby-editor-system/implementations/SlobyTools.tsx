import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react';
import { getTools } from '../../utils/api';
import { TSlobyTool } from '../../utils/types';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
const tools = [
  { id: 1, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 2, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 3, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 4, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 5, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 6, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 7, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 9, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
  { id: 8, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool' },
];

export default function SlobyTools() {
  const supabase = useSupabaseClient();

  useEffect(() => {
    getTools(supabase);
  }, []);

  return (
    <div className="bg-tools-bg md:w-1/1 lg:w-1/2 xl:w-1/3">
      <motion.div
        transition={{ delay: 1.5, duration: 0.4 }}
        animate={{ x: [-500, 0] }}
        className="bg-sloby-tools-bg  ml-2 mt-6 mr-6 w-96 h-3/4 rounded-xl flex flex-col items-center"
      >
        <div className="border-b border-editor-border-color items-center w-full flex justify-center h-14">
          <p className="text-lg font-semibold">Sloby Tools</p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center mt-6">
          {tools.map((tool: TSlobyTool) => {
            return (
              <div
                key={tool.id}
                className="w-20 h-20 bg-tool-bg flex flex-wrap justify-center items-center rounded-xl mt-4"
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
