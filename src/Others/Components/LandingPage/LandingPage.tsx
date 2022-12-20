/* This example requires Tailwind CSS v3.0+ */
import { useContext, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ContentContext } from '../../Context/ContentContext'
import styles from '../../../styles'
import Navbar from './Navbar'
import Hero from '../Hero'

export default function LandingPage() {
  const { site_info } = useContext(ContentContext)
  return (
    <div className=" bg-primary w-full overflow-hidden h-[100vh]">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter} flex-col mt-16`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        All of the other part
      </div>
    </div>
  )
}
