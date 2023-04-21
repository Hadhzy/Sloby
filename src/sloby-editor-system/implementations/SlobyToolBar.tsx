import React, { useContext, useRef, useState } from 'react';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Text from './tools/Text';
import { EditorContext } from './contexts/Editor';
import { v4 as uuidv4 } from 'uuid';

export default function SlobyToolBar(boundingBox: any) {
  const { currentProject } = useContext(ProjectsContext);
  const {
    toolClicked,
    setToolClicked,
    components,
    setComponents,
    data,
    setData,
  } = useContext(EditorContext);
  const router = useRouter();

  return (
    <div className="w-full border-b-1 border-editor-border-color bg-dark-darker flex">
      <motion.div
        className="w-full border-b-1 border-editor-border-color bg-dark-info flex justify-between"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.2, delay: 0.7 }}
      >
        <div>
          <div className="flex divide-x divide-dark-darker w-48">
            {/* This icon is carrying the height of the whole toolbar */}
            <div className="p-4 bg-dark-preview cursor-pointer text-white ease-in-out duration-150 hover:bg-dark-preview-hover">
              <FontAwesomeIcon icon={faGear} className="text-center text-lg" />
            </div>
            <div
              className="flex-center px-4 bg-dark-preview cursor-pointer text-white ease-in-out duration-150 hover:bg-dark-preview-hover"
              onClick={async (
                e: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                setToolClicked(!toolClicked);
                setComponents((prev: any) => {
                  // Get len of data
                  const len = data.length;
                  const position = [0, 0];

                  setData((prev: any) => {
                    return [
                      ...prev,
                      {
                        id: uuidv4(),
                        type: 'text',
                        position: position,
                        text: '',
                      },
                    ];
                  });

                  return [
                    ...prev,
                    <Text
                      key={uuidv4()}
                      boundingBox={boundingBox}
                      components={components}
                      initialLocation={position}
                      dataIndex={len}
                      data={data}
                      setData={setData}
                    />,
                  ];
                });
              }}
            >
              <p
                style={{ fontFamily: 'Noto Serif Lao' }}
                className={'text-3xl'}
              >
                T
              </p>
            </div>
          </div>
        </div>
        <div className="flex jusify-center absolute right-[50%]">
          <p className="text-white text-lg static">
            {currentProject.project_name}
          </p>
        </div>
        <div className="flex items-stretch gap-6 justify-between">
          <div className="flex items-center justify-around -space-x-2">
            <div className="text-white w-8 h-8 flex justify-center items-center rounded-full bg-[#FFCC00]">
              T
            </div>
            <div className="text-white w-8 h-8 flex justify-center items-center rounded-full bg-[#1752a9]">
              G
            </div>
            <div className="text-white w-8 h-8 flex justify-center items-center rounded-full bg-tools-bg">
              C
            </div>
          </div>
          <div className="flex">
            <button className="h-full duration-150 ease-in-out bg-blue-dark px-4 py-1 text-white font-semibold hover:bg-blue-600">
              Share
            </button>
            <Link
              href={`/editor/preview/${router.query.id}`}
              target="_blank"
              prefetch
            >
              <button className="h-full flex-center duration-150 ease-in-out bg-dark-preview px-4 py-1 text-white font-semibold hover:bg-dark-preview-hover">
                Preview
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
