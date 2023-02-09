import React, { useState, useContext, useEffect } from 'react';
import { Tag, TSlobyProject } from '../../../utils/types';
import ProjectsHandler from './ProjectsHandler';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ProjectServices } from '../../../api/project.api';
import Image from 'next/image';
import {
  faEllipsisVertical,
  faFaceSmile,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';
import { LoadingContext } from '../../../utils/contexts/Loading';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
export default function Project({
  project,
  index,
}: {
  project: TSlobyProject;
  index: number;
}) {
  const { actionBar, setActionBar, setCurrentProject, currentProject } =
    useContext(ProjectsContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [optionsState, setOptionsState] = useState(false);
  const projectServices = new ProjectServices(useSupabaseClient());
  const session = useSession();
  const router = useRouter();

  const optionsToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOptionsState(!optionsState);
  };
  async function deleteProject(project_id: string) {
    const res = await projectServices.deleteProjectById(project_id);
  }

  return (
    <motion.div
      className="flex relative cursor-pointer flex-wrap w-72 ease-in-out duration-200 hover:scale-105 hover:translate-y-[-5px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: index * 0.2,
      }}
    >
      <div className="w-full overflow-hidden relative rounded-t-3xl flex justify-center bg-dark-darkest">
        <div
          onClick={() => setActionBar((prev) => !prev)}
          className="absolute right-[7px] top-[5px]  px-3 py-1  ease-in-out duration-150"
        >
          <button
            className={`${
              optionsState ? '-translate-y-9' : 'translate-y-0'
            } transition-all p-2 hover:bg-dark-dark-mid rounded-full`}
            onClick={optionsToggle}
          >
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="text-dark-font-light"
            />
          </button>
          <div
            className={`flex absolute top-0 right-0 ${
              optionsState ? 'translate-y-0' : '-translate-y-8'
            } transition-all`}
          >
            <button onClick={optionsToggle}>
              <FontAwesomeIcon icon={faFaceSmile} className="p-1" />
            </button>
            <button onClick={optionsToggle}>
              <FontAwesomeIcon icon={faFaceSmile} className="p-1" />
            </button>
            <button onClick={() => deleteProject(project.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={(e) => {}}
                className=" p-1 text-red-500 hover:scale-105 ease-in-out duration-100"
              />
            </button>
          </div>
        </div>
        <Image
          alt="Sloby Logo"
          className="mt-[10px]"
          src={'/images/Sloby Logo Dark.svg'}
          width={150}
          height={70}
        />
      </div>
      <div
        onClick={() => {
          router.push(`/editor/${project.id}`);
        }}
        className="flex flex-col p-4 pb-6 gap-2 w-full bg-dark-project-bg min-h-[18rem] rounded-b-3xl"
      >
        <div className="w-full items-end flex gap-3 h-[15%]">
          {project.tags.map((tag: Tag) => {
            return (
              <span
                key={tag.id}
                className={`w-12 h-5 rounded-full text-white text-xs flex justify-center items-center bg-${tag.color}`}
              >
                {tag.tag}
              </span>
            );
          })}
        </div>
        <p className="mt-2 font-semibold text-xl">{project.project_name}</p>
        <div className="text-xs text-dark-font-mid font-semibold">
          Daniel and someone are editing...
        </div>
        <div className="text-base text-dark-font-light">
          <p>{project.project_description}</p>
        </div>
        <p className="justify-self mt-auto text-sm text-dark-font-light font-bold">
          Edited last day
        </p>
      </div>
    </motion.div>
  );
}
