import React, { useState, useContext, useEffect } from 'react';
import { Tag, TSlobyProject } from '../../../utils/types';
import ProjectsHandler from './ProjectsHandler';
import Image from 'next/image';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';
import { LoadingContext } from '../../../utils/contexts/Loading';
import { useSession } from '@supabase/auth-helpers-react';
import { checkUserProjectPerms } from '../../../utils/helpers';
import { useRouter } from 'next/router';
export default function Project({ project }: { project: TSlobyProject }) {
  const { actionBar, setActionBar, setCurrentProject, currentProject } =
    useContext(ProjectsContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const session = useSession();
  const router = useRouter();

  return (
    <div
      className="flex relative cursor-pointer flex-wrap w-72 ease-in-out duration-200 hover:scale-105 hover:translate-y-[-5px]"
      onClick={() => {
        router.push(`/editor/${project.id}`);
      }}
    >
      <div className="w-full rounded-t-3xl flex justify-center bg-dark-darkest">
        <div
          onClick={() => setActionBar((prev) => !prev)}
          className="absolute right-[20px] top-[10px]  px-3 py-1 rounded-full ease-in-out duration-150  hover:bg-dark-dark-mid"
        >
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="text-dark-font-light"
          />
        </div>
        <Image
          alt="Sloby Logo"
          className="mt-[10px]"
          src={'/images/Sloby Logo Dark.svg'}
          width={150}
          height={70}
        />
      </div>
      <div className="flex flex-col p-4 pb-6 gap-2 w-full bg-dark-project-bg min-h-[18rem] rounded-b-3xl">
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
    </div>
  );
}
