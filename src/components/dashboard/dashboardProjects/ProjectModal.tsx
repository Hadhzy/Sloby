import React, {useContext, useEffect, useState} from 'react'
import {ProjectsContext} from '../../../utils/contexts/ProjectsContext'
import {AnimatePresence, motion} from 'framer-motion';
import SlobyInput from '../../SlobyInput';
import {getWindowDimensions} from "../../../utils/hooks";

export default function ProjectModal() {
    const {project_data, set_project_data} = useContext(ProjectsContext)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log((windowDimensions.width / 100) * 60)
    return (
        <motion.div initial={{x: (windowDimensions.width / 100) * 40, opacity: 0}} key='box' animate={{x: 0, opacity: 1}} transition={{duration: 1}}
                    exit={{x: 3000, opacity: 0}}

                    className={`text-white backdrop-blur-md border-l flex flex-col justify-between border-dark-mid w-[40%] right-0 h-full fixed z-40 bg-dark-blur-bg`}>
            <div className='flex justify-start flex-col items-center'>
                <SlobyInput placeholder='give me the project name' type='input' />
                <SlobyInput placeholder='give me the project description' type="textholder"/>
            </div>
            <div className='flex items-center'>
                <div
                    className='text-white m-10 w-24 flex justify-center ease-in-out duration-200 btn bg-blue-dark origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-blue-600'>
                    <button>Save</button>
                </div>
                <div onClick={() => set_project_data({...project_data, project_modal: false})}
                     className='flex justify-center w-24 ease-in-out duration-200 btn bg-dark-dark-mid origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-dark-mid'>
                    <button>Cancel</button>
                </div>
            </div>
        </motion.div>
    )
}
