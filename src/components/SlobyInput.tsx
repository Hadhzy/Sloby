
import { initScriptLoader } from 'next/script'
import React, {useState} from 'react'

export default function SlobyInput({placeholder, type, value, setValue, error}: {placeholder: string, type: string, value: string, setValue: Function, error: string}) {
  const [focus, setFocus] = useState(false)
  return (
    <>
      {type === 'input' ? (
        <input type="text" 
        className={`px-6 m-10 mt-24 ease-linear duration-300 border-2 ${error !== '' ? 'border-2 border-red-600' : 'border-dark-dark-mid'}  outline-none  block w-[80%] rounded-md bg-dark-dark-mid placeholder:text-dark-font-color placeholder:font-bold`} 
        placeholder={`${focus ? '' : placeholder}`}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
      ): (
        <textarea 
        cols={10}
        rows={20}
        className={`px-6 m-10   ease-linear duration-300 border-2 outline-none static  block w-[80%] h-[20%] ${error !== '' ? 'border-2 border-red-600' : 'border-dark-dark-mid'} rounded-md bg-dark-dark-mid placeholder:text-dark-font-color placeholder:font-bold` }
        placeholder={`${focus ? '' : placeholder}`}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
        />
      )}
    </>
    )
}