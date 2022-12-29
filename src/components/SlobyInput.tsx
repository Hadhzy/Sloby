
import { initScriptLoader } from 'next/script'
import React, {useState} from 'react'

export default function SlobyInput({placeholder, type}: {placeholder: string, type: string}) {
  const [focus, setFocus] = useState(false)
  return (
    <>
      {type === 'input' ? (
        <input type="text" 
        className='px-6 m-10 mt-24 ease-linear duration-300 border-2 border-dark-dark-mid outline-none  block w-[70%] rounded-md bg-dark-dark-mid placeholder:text-dark-font-color placeholder:font-bold' 
        placeholder={`${focus ? '' : placeholder}`}
        />
      ): (
        <textarea 
        cols={10}
        rows={20}
        className='px-6 m-10 mt-24  ease-linear duration-300 border-2 border-dark-dark-mid outline-none  block w-[70%] h-[20%] rounded-md bg-dark-dark-mid placeholder:text-dark-font-color placeholder:font-bold' 
        placeholder={`${focus ? '' : placeholder}`}
        />
      )}
    </>
    )
}