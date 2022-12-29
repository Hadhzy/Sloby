import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {AnimatePresence, Variants, motion} from 'framer-motion'

export default function ProjectTags() {
  const [popupDisplay, setPopupDisplay] = useState(false)
  const [tagDisplay, setTagDisplay] = useState(false)
  const [tagValue, setTagValue] = useState('')
  const [appliedTag, setAppliedTag] = useState<string[]>([])
  const [error, setError] = useState('')

  const optionsVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.target.value
    setTagValue(currentValue)
    window.addEventListener('keydown', (e) => {
      if(tagValue.length > 2 && e.key === ' ' ) {
        console.log(tagValue)
        if(appliedTag.length > 2) return setError('You only can apply 3 tags')
        if(appliedTag.includes(tagValue)) return setError('You cannot have same tags')
        console.log('You can apply')
        tagValue.trim()
        setAppliedTag([...appliedTag, tagValue])
        console.log(tagValue)
        setTagValue('')
      }  else return 
      // if(e.key === ' ' && tagValue.length > 2 && tagValue !== "") {
      //   if(appliedTag.length < 6) {
      //     if(appliedTag.includes(currentValue)) return setError('You cannot add two same tags')
      //     setAppliedTag([...appliedTag, currentValue])
      //     setTagDisplay(true)
      //   } else {
      //     return setError('You cannot add more tags')
      //   } 
      // }
    })
  }

  console.log(appliedTag)

  return (
    <AnimatePresence>
      <div className='flex flex-col gap-2'>
    <div onClick={() => setPopupDisplay((prev) => !prev)} className='bg-dark-dark w-[85%] p-3 rounded-2xl flex justify-between items-center cursor-pointer ease-in-out duration-150 hover:bg-dark-dark-hover hover:scale-105 sticky'>
      <div className='flex justify-start gap-3'>
        {appliedTag.length > 0 ? (
          appliedTag.map((tag: string, i: number) => {
            return <p key={i} className='bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
              {tag}
            </p>
          })
        ): (
          <p className='text-dark-font-light font-semibold select-none'>Choose your project tags</p>
        )}
      </div>
      <FontAwesomeIcon icon={popupDisplay ? faChevronDown : faChevronRight} className='mr-2 ease-linear duration-200'/> 
    </div>
    <div className='ease-linear'>
      {popupDisplay && (
          <motion.div key='box' exit={{ opacity: 0, y:-30 }} transition={{ duration: 0.2, type: 'spring' }} initial={{ opacity: 0, y: -15}} animate={{ opacity: 1, y: 0}}
        className=' flex flex-wrap justify-center items-center gap-2 w-[85%] p-6 bg-dark-dark select-none ease-linear duration-150 rounded-xl '>
          <input value={tagValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} className='w-full bg-dark-dark outline-none border-none h-full placeholder:font-bold placeholder:text-dark-font-light' placeholder='type your tag here...'/>
        </motion.div>
      )}
      {error}
    </div>
    </div>
    </AnimatePresence>
  )
}