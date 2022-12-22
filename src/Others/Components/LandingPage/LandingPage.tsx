/* This example requires Tailwind CSS v3.0+ */
import React from 'react'
import { useContext, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ContentContext } from '../../Context/ContentContext'
import styles from '../../../styles'
import Navbar from './Navbar'
import Hero from '../Hero'
import Planet from './Planet'
import { StarIcon } from '../../../assets'
import { Planet1, Planet2, Planet3, Planet4 } from '../../../assets/index'
import Star from './Star'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../Editor/store'
import motion from 'framer-motion'
import { Link } from 'react-router-dom'
export default function LandingPage() {
  const { site_info } = useContext(ContentContext)

  return (
    <div className="isolate text-white bg-[#0B0B0B] h-screen">
      <Planet src={Planet1} className="w-32 inset-y-36 left-72" />
      <Planet src={Planet2} className="w-46 inset-y-2/3 left-28" />
      <Planet src={Planet3} className="w-36 inset-y-1/3 right-28" />
      <Planet src={Planet4} className="w-28 bottom-12 right-72" />
      <Navbar className="" />
      <Navbar className="invisible !block !static" />
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i}>
          <Star src={StarIcon} />
        </div>
      ))}
      <div className="w-full flex-center flex-col gap-8 lg:p-40 z-20">
        <p className="z-20 text-center select-none  max-w-7xl animate-gradientMove bg-enlarge text-transparent bg-gradient-to-r from-red-light via-purple-500 via-pink-500 to-yellow-mid bg-clip-text text-6xl lg:text-8xl font-bold">
          The Next-Gen Website Builder.
        </p>
        <p className="z-20 text-xl text-slate-100 text-center select-none ">
          Rapid web development re-imagined in one simple, coherent tool <br />
          satisfying your every need through its myriad of features.
        </p>
        <div className="mt-4 flex-center gap-16 text-md">
          <Link
            to="auth/signup"
            className="z-20 cursor-pointer select-none p-4 px-12 bg-[#141414] ring-offset-4 ring-offset-back ring-2 ring-red-mid ease-in duration-300 rounded-2xl hover:translate-y-[-5px]"
          >
            Get Started
          </Link>
          <a className="z-20 cursor-pointer  p-4 px-12 select-none  bg-[#141414] ring-offset-4 ring-offset-back ring-2 ring-dark-dark rounded-2xl">
            Documentation
          </a>
        </div>
      </div>
      <div className="h-screen">test</div>
    </div>
  )
}
