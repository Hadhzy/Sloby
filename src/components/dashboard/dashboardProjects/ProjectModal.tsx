import React, {useContext, useEffect, useState} from 'react'
import {ProjectsContext} from '../../../utils/contexts/ProjectsContext'
import {AnimatePresence, motion} from 'framer-motion';
import SlobyInput from '../../SlobyInput';
import {getWindowDimensions} from "../../../utils/hooks";
import ProjectTags from './ProjectTags';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TSlobyProject } from '../../../utils/types';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { v4 as uuidv4 } from 'uuid';
export default function ProjectModal() {
    const {project_data, set_project_data} = useContext(ProjectsContext)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [tags, setTags] = useState()
    const [checked, setChecked] = useState(false)
    const supabase = useSupabaseClient()
    const session = useSession()

    console.log(checked)

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sendRequest = async () => {
        const { data, error } = await supabase
            .from('projects')
            .insert<TSlobyProject>([
                {id: 12, created_at: new Date(), project_name: name, project_description: description, creator: session?.user.id, public: checked, shared_with: '204490a2-5614-461f-8f4f-177301e6b190', tags: uuidv4()}
            ])
            .select()
        if(error) {
            console.log(error)
        }

        if(data) {
            console.log(data)
            setError('')
        }
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submittung the form")
        if(!name) return setError('Please fill the fields properly')
        else if(name.length < 4) return setError('Please provide your project with at least 4 characters long name')
        sendRequest()
        
        
        setError('')
        console.log(name, description)
        set_project_data({...project_data, project_modal: false})
    }

    console.log((windowDimensions.width / 100) * 60)
    return (
        <motion.div initial={{x: (windowDimensions.width / 100) * 40, opacity: 0}} key='box' animate={{x: 0, opacity: 1}} transition={{duration: 1}}
                    exit={{x: 3000, opacity: 0}}

                    className={`text-white backdrop-blur-md border-l flex flex-col justify-between border-dark-mid w-[40%] right-0 h-full fixed z-40 bg-dark-blur-bg`}>
            <form action="" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className='flex flex-col'>
                <div className='flex justify-start flex-col ease-out duration-150'>
                        <SlobyInput placeholder='give me the project name' type='input'  value={name} setValue={setName} error={error}/>
                        <SlobyInput placeholder='give me the project description(optional)' type="textholder" value={description} setValue={setDescription} error={error}/>
                    <div className='flex ease-linear mt-5 duration-200 justify-start flex-col gap-6 ml-12'>
                        <p className='text-dark-font-color font-bold'>Add some tags to your project</p>    
                        <ProjectTags setTags={setTags}/>
                        <p className='text-dark-font-color font-bold mt-10'>You can share your project by selecting the checkbox</p>    
                        <div className='ml-2 flex items-center'>
                            <input id="default-checkbox" type='checkbox' checked={checked} onClick={() => setChecked((prev: boolean) => !prev)}  className="w-4 h-4 text-blue-600 bg-dark-dark rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-dark-border dark:border-dark-darkest" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-bold text-gray-900 dark:text-dark-font-color ">Publish my project</label>
                        </div>
                        <AnimatePresence>
                        {error !== '' && (
                            <motion.div exit={{ opacity: 0, y: 400 }} transition={{ duration: 0.5, delay: 0.2 }} animate={{ opacity: [0,1], y: [400,0]}}
                            className='flex justify-between p-2 px-6 bg-red-mid rounded-xl w-[85%] items-center '>
                                {error} 
                                <FontAwesomeIcon icon={faCircleExclamation} className='text-lg' />
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                </div>
                
                <div className='flex items-center absolute bottom-1'>
                    {/* @ts-ignore  */}
                    <div onClick={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} 
                        className='text-white m-10 w-24 flex justify-center ease-in-out duration-200 btn bg-blue-dark origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-blue-600'>
                        <button type='submit'>Save</button>
                    </div>
                    <div onClick={() => set_project_data({...project_data, project_modal: false})}
                        className='flex justify-center w-24 ease-in-out duration-200 btn bg-dark-dark-mid origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-dark-mid'>
                        <button>Cancel</button>
                    </div>
                </div>
            </form>
        </motion.div>
    )
}
