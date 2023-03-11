// Each project card(single) in the dashboard.

import React, { useState, useContext, useEffect } from 'react';
import { Tag, TSlobyProject } from '../../../utils/types';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import {
  faEllipsisVertical,
  faFaceSmile,
  faTrash,
  faPencil,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';
import { LoadingContext } from '../../../utils/contexts/Loading';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
export default function ProjectCard({
  project,
  index,
}: {
  project: TSlobyProject;
  index: number;
}) {
  const {
    project_data,
    set_project_data,
    setActionBar,
    setIsProjectUpdating,
    set_current_updated_project,
  } = useContext(ProjectsContext);
  const [optionsState, setOptionsState] = useState(false);
  const router = useRouter();
  const supabase = useSupabaseClient();

  const optionsToggle = () => {
    // Used to toggle the options menu(edit, smile, delete)
    setOptionsState(!optionsState);
  };

  async function deleteUsersProject(project_id: string) {
    // Used to delete the project from the 'users_projects' table'
    try {
      const { data, error } = await supabase
        .from('users_projects')
        .delete()
        .match({ project_id: project_id });
    } catch (error: any) {
      console.error('Error deleting record:', error.message);
    }
  }

  async function deleteProject(project_id: string) {
    // Used to delete the project from the 'projects' table

    await deleteUsersProject(project_id); // delete the users project first

    try {
      await supabase.from('projects').delete().match({ id: project_id });
      toast.success('Project deleted successfully');
    } catch (error: any) {
      console.error('Error deleting record:', error.message);
    }
  }

  function updateProject() {
    optionsToggle();
    console.log('Updating the project of: ', project);
    //Setting the modal visibility to true
    set_project_data({ ...project_data, project_modal: true });
    setIsProjectUpdating(true);
    //setting the current_updated project to the project that we are trying to edit.
    set_current_updated_project(project);
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
              <FontAwesomeIcon
                icon={faClose}
                className="p-1 hover:scale-105 ease-in-out duration-100"
              />
            </button>
            <button onClick={updateProject}>
              <FontAwesomeIcon
                icon={faPencil}
                className="p-1 hover:scale-105 ease-in-out duration-100"
              />
            </button>
            <div onClick={() => deleteProject(project.id)}>
              <button>
                <FontAwesomeIcon
                  icon={faTrash}
                  className=" p-1 text-red-500 hover:scale-105 ease-in-out duration-100"
                />
              </button>
            </div>
          </div>
        </div>
        <Image
          alt="Sloby Logo"
          className="mt-[10px] select-none"
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
          {project.edited_at === null ? (
            <div>This project has not been edited yet.</div>
          ) : (
            <div>Test</div>
          )}
        </p>
      </div>
    </motion.div>
  );
}
