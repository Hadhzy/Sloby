import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/LandingPage/layout';
import { Planet } from '../components/LandingPage/planet';
import { Star } from '../components/LandingPage/star';
import { useSession } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';
import { getURL } from '../lib/helpers';

export default function Home() {
  const session = useSession();
  console.log(getURL());

  return (
    <>
      <Head>
        <title>Sloby</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Planet
          src="/images/Planet%201.svg"
          className="w-32 left-24 inset-y-36 md:left-72 duration-500 ease-in-out -z-20"
        />
        <Planet
          src="/images/Planet%202.svg"
          className="w-46 left-10 inset-y-2/3 sm:left-28 duration-500 ease-in-out -z-20"
        />
        <Planet
          src="/images/Planet%203.svg"
          className="w-36 right-14 inset-y-40 lg:inset-y-1/3 md:right-28 duration-500 ease-in-out -z-20"
        />
        <Planet
          src="/images/Planet%204.svg"
          className="w-28 right-8 sm:right-32 bottom-12 md:right-72 duration-500 ease-in-out -z-20"
        />
        {Array.from({ length: 25 }, (_, i) => (
          <Star key={i} />
        ))}
        <motion.div
          className="w-full h-full flex-center flex-col gap-8 px-10 sm:px-20 lg:px-40 -z-10"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
        >
          <div className="my-auto h-max space-y-8">
            <p className="z-20 text-center max-w-7xl animate-gradientMove bg-enlarge text-transparent bg-gradient-to-r from-red-light via-purple-500 via-pink-500 to-yellow-mid bg-clip-text text-4xl sm:text-6xl lg:text-8xl font-bold">
              The Next-Gen Website Builder.
            </p>
            <p className="z-20 text-sm sm:text-base mb-4 md:text-xl">
              Rapid web development re-imagined in one simple, coherent tool
              that can satisfy your every need through its myriad of features.
            </p>
            <div className="flex-center xs:flex-col gap-8 sm:mt-4 sm:flex-row sm:gap-16 text-md z-50">
              <Link href={'/auth/login'}>
                <div className="z-20 p-2 px-6 text-sm sm:p-4 sm:px-12 bg-dark-dark ring-offset-4 ring-offset-back ring-2 ring-red-mid rounded-full hover:bg-dark-dark-hover hover:scale-[1.025] hover:cursor-pointer hover:ring-offset-[5px] duration-200">
                  Get Started
                </div>
              </Link>
              <a className="z-20 p-2 px-6 text-sm sm:p-4 sm:px-12 bg-dark-dark ring-offset-4 ring-offset-back ring-2 ring-dark-dark rounded-full hover:bg-dark-dark-hover hover:scale-[1.025] hover:cursor-pointer hover:ring-offset-[5px] hover:ring-dark-border duration-200">
                Documentation
              </a>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
}
