import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useContext, useEffect, useState} from 'react'
import {faChevronDown, faChevronRight, faCircleExclamation, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {AnimatePresence, Variants, motion} from 'framer-motion'
import supabase from "../../../utils/supabase";
import {ProjectsContext} from "../../../utils/contexts/ProjectsContext";
import { v4 as uuidv4 } from 'uuid';

export default function ProjectTags({ setTags }: { setTags: Function}) {
    const [popupDisplay, setPopupDisplay] = useState(false)
    const [tagDisplay, setTagDisplay] = useState(false)
    const [appliedTag, setAppliedTag] = useState<{tag: string, color: string, id: string, project_id: string}[]>([])
    const [error, setError] = useState('')
    const [colorSelect, setColorSelect] = useState(false)
    const [selectedColor, setSelectedColor] = useState('gray-700')
    const {set_current_tags, current_tags, current_project_id} = useContext(ProjectsContext)


    useEffect(() => {
        set_current_tags(appliedTag)
    }, [appliedTag])
    async function getData() {
        const {data: projects} = await supabase
            .from('projects')
            .select('*')
        console.log(projects)

    }
    const optionsVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {type: "spring", stiffness: 300, damping: 24}
        },
        closed: {opacity: 0, y: 50, transition: {duration: 0.5}}
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(appliedTag)
        let currentValue = e.target.value
        if (currentValue.endsWith(' ')) {
            if (appliedTag.length < 3) {
                if (appliedTag.some(e => e.tag === currentValue.trim())) {
                    setError(`Tag '${currentValue.trim()}' already applied`)
                } else {
                    if (currentValue.trim().length <= 20) {
                        setAppliedTag([...appliedTag, {id: uuidv4(), tag: currentValue.trim(), color: selectedColor, project_id: current_project_id as string }])
                        e.target.value = ''
                        setError('')
                    } else {
                        setError('Tag must be less than or equal to 20 characters')
                    }
                }
            } else {
                setError('You can only apply 3 tags')
            }
        } else {
            setError('')
        }
    }

    return (
        <AnimatePresence>
            <div className='flex flex-col gap-2'>
                <div onClick={() => setPopupDisplay((prev) => !prev)}
                     className='bg-dark-dark w-[85%] p-3 rounded-2xl flex justify-between items-center cursor-pointer ease-in-out duration-150 hover:bg-dark-dark-hover hover:scale-105 sticky'>
                    <div className='flex justify-start gap-3'>
                        {appliedTag.length > 0 ? (
                            appliedTag.map(({tag, color}, i: number) => {
                                return <div key={i}
                                            className={`bg-${color} ${color === "gray-700" ? "text-gray-300" : "text-black/[0.65]"} group text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full`}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setAppliedTag(appliedTag.filter((item) => item.tag !== tag))
                                            }}
                                >
                                    <FontAwesomeIcon icon={faCircleXmark}
                                                     className={"!hidden group-hover:!inline-block mr-1"}/>
                                    <p className={`inline-block`}>{tag}</p>
                                </div>
                            })
                        ) : (
                            <p className='text-dark-font-light font-semibold select-none'>Choose your project tags</p>
                        )}
                    </div>
                    <FontAwesomeIcon icon={popupDisplay ? faChevronDown : faChevronRight}
                                     className='mr-2 ease-linear duration-200'/>
                </div>
                <div className='ease-linear'>
                    {popupDisplay && (
                        <motion.div key='box' exit={{opacity: 0, y: -30}} transition={{duration: 0.2, type: 'spring'}}
                                    initial={{opacity: 0, y: -15}} animate={{opacity: 1, y: 0}}
                                    className='flex justify-center items-center gap-2 w-[85%] p-6 bg-dark-dark select-none ease-linear duration-150 rounded-xl '>
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                   className='w-full bg-dark-dark outline-none border-none h-full placeholder:font-bold placeholder:text-dark-font-light'
                                   placeholder='type your tag here...'/>
                            <div className={`h-8 w-8 bg-${selectedColor} rounded-full cursor-pointer relative transition-colors duration-200`} onClick={() => {
                                setColorSelect(!colorSelect)
                            }}>
                                <AnimatePresence>
                                    {colorSelect &&
                                        <motion.div
                                            variants={{
                                                open: {
                                                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                                                    transition: {
                                                        type: "spring",
                                                        bounce: 0,
                                                        duration: 0.7,
                                                        delayChildren: 0.3,
                                                        staggerChildren: 0.05
                                                    }
                                                },
                                                closed: {
                                                    clipPath: "inset(100% 0% 0% 100% round 10px)",
                                                    transition: {
                                                        type: "spring",
                                                        bounce: 0,
                                                        duration: 0.3
                                                    }
                                                }
                                            }}
                                            initial={"closed"}
                                            animate={"open"}
                                            className={"border-dark-border border bg-dark-darker rounded-lg absolute -translate-y-full -top-2 right-0 flex"}>
                                            <motion.div variants={optionsVariants} className={"cursor-pointer bg-gray-700 px-4 py-5"} onClick={() => {setSelectedColor("gray-700")}}/>
                                            <div className={"bg-dark-border h-full w-0.5"}/>
                                            <motion.div variants={optionsVariants} className={"cursor-pointer bg-blue-mid px-4 py-5"} onClick={() => {setSelectedColor("blue-mid")}}/>
                                            <div className={"bg-dark-border h-full w-0.5"}/>
                                            <motion.div variants={optionsVariants} className={"cursor-pointer bg-green-mid px-4 py-5"} onClick={() => {setSelectedColor("green-mid")}}/>
                                            <div className={"bg-dark-border h-full w-0.5"}/>
                                            <motion.div variants={optionsVariants} className={"cursor-pointer bg-yellow-mid px-4 py-5"} onClick={() => {setSelectedColor("yellow-mid")}}/>
                                            <div className={"bg-dark-border h-full w-0.5"}/>
                                            <motion.div variants={optionsVariants} className={"cursor-pointer bg-red-mid px-4 py-5"} onClick={() => {setSelectedColor("red-mid")}}/>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                    {error !== '' && (
                    <motion.div className={`${error ? "p-2 px-6 opacity-100" : "opacity-0"} flex justify-between items-center bg-red-mid rounded-xl w-[85%] mt-4 transition-opacity duration-200`} transition={{ duration: 0.5, delay: 0.2 }} animate={{ opacity: [0,1], y: [400,0]}} >
                        <p>{error}</p>
                        <FontAwesomeIcon icon={faCircleExclamation} className='text-lg' />
                    </motion.div>
                    )}
                    
                </div>
            </div>
        </AnimatePresence>
    )
}
