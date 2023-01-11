import React, { useContext } from 'react';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
export default function SlobyEditorInformation() {
  const { currentProject } = useContext(ProjectsContext);

  return (
    <div className="p-3 w-full border-b-1 border-editor-border-color bg-dark-info flex justify-between items-center">
      <motion.div
        className="w-full border-b-1 border-editor-border-color bg-dark-info flex justify-between items-center"
        animate={{ opacity: [0, 1], y: [-100, 0] }}
        transition={{ duration: 0.2, delay: 1 }}
      >
        <div>
          <div className="flex gap-8">
            <div className="bg-dark-preview rounded-full px-3 py-2 cursor-pointer  text-white ease-in-out duration-150  hover:scale-105 hover:bg-dark-preview-hover">
              <FontAwesomeIcon icon={faArrowLeft} className="text-center" />
            </div>
            <div className="bg-dark-preview rounded-full px-3 py-2 cursor-pointer  text-dark-font-light ease-in-out duration-150  hover:scale-105 hover:bg-dark-preview-hover">
              <FontAwesomeIcon icon={faGear} className="text-center text-lg" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-white text-lg">{currentProject.project_name}</p>
        </div>
        <div className="flex gap-6">
          <button className="font-[Inter] w-20 flex justify-center items-center duration-150 ease-in-out rounded-4 bg-blue-dark px-4 py-1 rounded-lg text-white font-semibold hover:translate-y-[-2px] hover:scale-105 hover:bg-blue-600">
            Share
          </button>
          <button className="font-[Inter] mr-3  w-20 flex justify-center items-center duration-150 ease-in-out rounded-4 bg-dark-preview px-4 py-1 rounded-lg text-white font-semibold hover:translate-y-[-2px] hover:scale-105 hover:bg-dark-preview-hover">
            Preview
          </button>
        </div>
      </motion.div>
    </div>
  );
}
