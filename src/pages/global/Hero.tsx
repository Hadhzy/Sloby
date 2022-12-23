import React from 'react'
import styles from '../../styles'

function Hero() {
  return (
    <section
      id="home"
      className={`flex  md:flex-row flex-col ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col justify-center items-center w-full lh">
          <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[72px] text-[72px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Sloby, </span>
            The Next <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Generation </span>
            Website Builder.
          </h1>
          <p className={`${styles.paragraph} w-[670px] mt-6 text-center`}>
            We have made a modern and a next-gen tool for webdevelopment for
            everyone with free accessibility.
          </p>
          <div className="mt-16 text-white">
            <button className="inline-block rounded-full bg-indigo-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-800 hover:bg-indigo-700 hover:ring-indigo-700 mr-10">
              Get started
            </button>
            <button className="docs rounded-full  px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 mr-10">
              Docs
              <span className="text-indigo-200" aria-hidden="true">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
