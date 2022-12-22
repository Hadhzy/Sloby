import React from 'react'
import { SlobyLogoDark } from '../../../assets'
import { SlobyInput } from '../../../Editor/utils/styles/global'

export default function RegisterPage() {
  return (
    <div className="isolate text-white bg-[#0B0B0B] flex-col h-screen flex justify-center items-center">
      <p className="mb-[60px] text-4xl">Sign up</p>
      <div className="w-[800px] h-[600px] bg-[#0D0D0D]  rounded-xl">
        <div className="w-full flex justify-center mt-[10px]">
          <img src={SlobyLogoDark} alt="" />
        </div>
        <div className="flex flex-col w-full justify-center mt-[40px] items-center gap-[40px]">
          <SlobyInput placeholder="username" />
          <SlobyInput placeholder="Email" />
          <SlobyInput placeholder="password" />
          <button className="w-[500px] h-[50px]  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-sm py-2.5 text-center mr-2 mb-2">
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
