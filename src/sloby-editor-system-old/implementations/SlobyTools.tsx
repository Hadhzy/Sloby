import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect, useContext, SetStateAction } from 'react';
import { TSlobyTool } from '../../utils/types';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { useRouter } from 'next/router';
import { ProjectServices } from '../../api/project.api';

import { ToolClickedContext } from '../../utils/contexts/ToolClicked';
import { CurrentIdContext } from '../../utils/contexts/CurrentId';
import { log } from 'console';
import { InputsContext } from '../../utils/contexts/Inputs';

export default function SlobyTools() {
  const supabase = useSupabaseClient();
  const projectServices = new ProjectServices(supabase);
  const { setTools, tools } = useContext(ProjectsContext);
  const router = useRouter();
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const { currentId, setCurrentId } = useContext(CurrentIdContext);
  const { addInput } = useContext(InputsContext);

  console.log(tools);

  useEffect(() => {
    projectServices.getTools().then(({ data }) => setTools(data as any));
  }, [supabase]);

  return (
    <div className="bg-tools-bg ">
      <motion.div
        transition={{ delay: 1.2, duration: 0.4 }}
        animate={{ x: [-500, 0] }}
        className="bg-sloby-tools-bg  ml-2 mt-3 mr-3 xl:w-[135px] lg:w-[135px] h-[91vh] rounded-xl flex flex-col items-center "
      >
        <div className="border-b border-editor-border-color items-center w-full flex justify-center h-14">
          <p className="text-lg font-semibold">Sloby Tools</p>
        </div>
        <div className="flex flex-wrap gap-8 p-2 justify-center mt-6">
          {tools.map((tool: TSlobyTool) => {
            return (
              <div
                id={tool.id}
                onClick={async (
                  e: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) => {
                  setToolClicked(!toolClicked);
                  addInput(tool.html_tag);
                  //* this how we will call the entity
                  // const projectDB = new ProjectLocalDb();

                  //* this is when adding single item and also retrieving it:
                  // -> await projectDB.add({ age: 44, id: '1', name: 'john doe' });
                  // -> const res = await projectDB.getSingle();
                  // -> console.log(res);

                  //* this is getting all elements in the collection
                  // -> projectDB.getAll().documents$.subscribe(data => console.log(data));

                  //* this is your implementation
                  //NOTE: this is creating also an indexedDB and i couldn't really figure out where that is happening so i commented it out
                }}
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
