// Pop-up window(project creation/modification) in the dashboard.
import React, { useContext, useEffect, useState } from 'react';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';
import { AnimatePresence, motion } from 'framer-motion';
import SlobyInput from '../../SlobyInput';
import { getWindowDimensions } from '../../../utils/hooks';
import ProjectTags from './ProjectTags';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import PopupSystem from '../../custom_components/PopupSystem';
import { Tag } from '../../../utils/types';

export default function ProjectModal() {
  const {
    project_data,
    current_tags,
    set_current_updated_project,
    set_project_data,
    current_updated_project,
    setIsProjectUpdating,
    isProjectUpdating,
  } = useContext(ProjectsContext);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [name, setName] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [description, setDescription] = useState('');
  const [updatedDescription, setupdatedDescription] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>();
  const [updatedTags, setupdatedTags] = useState<Tag[]>();
  const [checked, setChecked] = useState(false);
  const [updatedChecked, setupdatedChecked] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();
  const [msg, setMsg] = useState('asdasd');
  const [popup, setPopup] = useState(true);
  const [cancelation, setCancelation] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sendCurrentTags = async () => {
    const { data, error } = await supabase.from('tag').insert([]);
    if (error) console.log(error);
  };

  const sendRequest = async () => {
    const stringed = JSON.stringify(current_tags);
    const parsed = JSON.parse(stringed);
    const { data, error } = await supabase
      .from('projects')
      .insert([
        {
          id: uuidv4(),
          created_at: new Date(),
          project_name: name,
          project_description: description,
          creator: session?.user.id,
          public: checked,
          tags: current_tags,
          interface_source: [],
        },
      ])
      .select();

    if (error) {
      console.log(error);
    } else {
      // Add reference inside users_projects join table
      const { data: data2, error: error2 } = await supabase
        .from('users_projects')
        .insert({ user_id: session?.user.id, project_id: data[0].id });

      if (error2) {
        console.log(error2);
      }
    }
    await sendCurrentTags();

    if (data) {
      setError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cancelation) return;
    if (name.length < 4)
      return toast.error(
        'Please provide your project with at least 4 characters long name'
      );
    sendRequest();

    set_project_data({ ...project_data, project_modal: false });
    toast.success('Project created successfully');
  };

  async function updateProject() {
    //Sending the supabase update method to the DB with the updated states
    await supabase
      .from('projects')
      .update({
        project_name: updatedName,
        project_description: updatedDescription,
        tags: updatedTags,
      })
      .eq('id', current_updated_project?.id);
  }

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //If the states were not updated than throw an error because there is no point updating them then.
    if (
      updatedName === current_updated_project?.project_name &&
      updatedDescription === current_updated_project?.project_description
    ) {
      // Calling the popup
      toast.error('Please update the fields before saving them');
    } else {
      //If the states were modified then we are updating the project
      updateProject();
      toast.success('Project updated successfully');
      //Setting the modal visibility back to false
      set_project_data({ ...project_data, project_modal: false });
    }
  };

  useEffect(() => {
    //If we are updating something meaning that the isProjectUpdating is true then we are setting the states to the current project data
    if (current_updated_project !== null && isProjectUpdating) {
      if (
        current_updated_project?.project_name &&
        current_updated_project?.project_description &&
        current_updated_project?.tags
      ) {
        setUpdatedName(current_updated_project?.project_name);
        setupdatedDescription(current_updated_project?.project_description);
        setupdatedTags(current_updated_project.tags);
        setupdatedChecked(current_updated_project.public);
      }
    } else return;
  }, [isProjectUpdating, current_updated_project]);

  return (
    <motion.div
      initial={{ x: (windowDimensions.width / 100) * 40, opacity: 0 }}
      key="box"
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ x: 3000, opacity: 0 }}
      className={`text-white backdrop-blur-md border-l flex flex-col justify-between border-dark-mid w-[40%] right-0 h-full fixed z-40 bg-dark-blur-bg`}
    >
      {isProjectUpdating && current_updated_project ? (
        <form
          action=""
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className="flex flex-col"
        >
          <div className="flex justify-start flex-col ease-out duration-150">
            <SlobyInput
              placeholder="give me the project name"
              type="input"
              value={updatedName}
              setValue={setUpdatedName}
              error={error}
            />
            <SlobyInput
              placeholder="give me the project description(optional)"
              type="textholder"
              value={updatedDescription}
              setValue={setupdatedDescription}
              error={error}
            />
            <div className="flex ease-linear mt-5 duration-200 justify-start flex-col gap-6 ml-12">
              <p className="text-dark-font-color font-bold">
                Add some tags to your project
              </p>
              <ProjectTags setTags={setupdatedTags} tags={updatedTags} />
              <p className="text-dark-font-color font-bold mt-10">
                You can share your project by selecting the checkbox
              </p>
              <div className="ml-2 flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked((prev: boolean) => !prev)}
                  className="w-4 h-4 text-blue-600 bg-dark-dark rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-dark-border dark:border-dark-darkest"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-bold text-gray-900 dark:text-dark-font-color "
                >
                  Publish my project
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center absolute bottom-1">
            <div
              onClick={(e: any) => handleUpdate(e)}
              className="text-white m-10 w-24 flex justify-center ease-in-out duration-200 btn bg-blue-dark origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-blue-600"
            >
              <button type="submit">Save</button>
            </div>
            <div
              onClick={() => {
                set_project_data({ ...project_data, project_modal: false });
                setIsProjectUpdating(false);
              }}
              className="flex justify-center w-24 ease-in-out duration-200 btn bg-dark-dark-mid origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-dark-mid"
            >
              <button onClick={() => setCancelation(true)}>Cancel</button>
            </div>
          </div>
        </form>
      ) : (
        <form
          action=""
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className="flex flex-col"
        >
          <div className="flex justify-start flex-col ease-out duration-150">
            <SlobyInput
              placeholder="give me the project name"
              type="input"
              value={name}
              setValue={setName}
              error={error}
            />
            <SlobyInput
              placeholder="give me the project description(optional)"
              type="textholder"
              value={description}
              setValue={setDescription}
              error={error}
            />
            <div className="flex ease-linear mt-5 duration-200 justify-start flex-col gap-6 ml-12">
              <p className="text-dark-font-color font-bold">
                Add some tags to your project
              </p>
              <ProjectTags setTags={setTags} tags={tags !== null ? tags : ''} />
              <p className="text-dark-font-color font-bold mt-10">
                You can share your project by selecting the checkbox
              </p>
              <div className="ml-2 flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked((prev: boolean) => !prev)}
                  className="w-4 h-4 text-blue-600 bg-dark-dark rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-dark-border dark:border-dark-darkest"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-bold text-gray-900 dark:text-dark-font-color "
                >
                  Publish my project
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center absolute bottom-1">
            <div
              onClick={(e: any) => handleSubmit(e)}
              className="text-white m-10 w-24 flex justify-center ease-in-out duration-200 btn bg-blue-dark origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-blue-600"
            >
              <button type="submit">Save</button>
            </div>
            <div
              onClick={() => {
                set_project_data({ ...project_data, project_modal: false });
                setIsProjectUpdating(false);
              }}
              className="flex justify-center w-24 ease-in-out duration-200 btn bg-dark-dark-mid origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-dark-mid"
            >
              <button onClick={() => setCancelation(true)} >Cancel</button>
            </div>
          </div>
        </form>
      )}
    </motion.div>
  );
}
