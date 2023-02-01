import { useSession } from '@supabase/auth-helpers-react';
import React, { useContext } from 'react';
import DashboardStats from './DashboardStats';
import Image from 'next/image';
import DashboardProjectPreview from './DashboardProjectPreview';
import ProjectsManager from './dashboardProjects/ProjectsManager';
import { getRandomNumber } from './getRandomNumber';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { ApiUser } from '../../api/user.api';
import { motion } from 'framer-motion';
export default function DashboardUserDetails({
  totalVisits,
  totalUsage,
}: {
  totalVisits: number[];
  totalUsage: number[];
}) {
  const apiUser = new ApiUser(useSession());
  const { project_data, set_project_data } = useContext(ProjectsContext);
  // console.log(session?.user.user_metadata.avatar_url);
  console.log(apiUser.user.user_metadata.avatar_url);
  return (
    <div
      className={`flex h-screen  flex-col gap-10 p-8 ml-4 text-white transition-all duration-500 ${
        project_data.project_modal ? 'blur-sm' : ''
      }`}
    >
      <div className="text-4xl lg:text-7xl font-bold flex gap-36">
        Good Morning, <br />
        {apiUser.user.user_metadata.name}
        {/* { session?.user.user_metadata.name} */}
      </div>
      <div className={'w-1/2 h-1 bg-dark-border rounded-lg'}></div>
      <motion.div
        className={'flex gap-20 flex-wrap'}
        animate={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div>
          <DashboardStats
            title={'Total visits'}
            subTitle={'Over the past 2 weeks'}
            valueEnd={'visits'}
            lightColor={'bg-blue-perfect'}
            darkColor={'bg-blurple'}
            chartData={totalVisits}
          />
        </div>
        <div>
          <DashboardStats
            title={'Hours spent using Sloby'}
            valueEnd={'hours'}
            lightColor={'bg-green-light'}
            darkColor={'bg-green-dark'}
            chartData={totalUsage}
          />
        </div>
        <div
          className={
            'flex-center flex-col text-center rounded-large gap-4 font-bold w-80'
          }
          style={{
            background:
              'linear-gradient(106.99deg, rgba(137, 45, 153, 0.6) -1.46%, rgba(109, 38, 125, 0.57125) 25.4%, rgba(48, 18, 133, 0.564) 85.95%)',
          }}
        >
          <p className={'text-4xl'}>Upgrade</p>
          <p className="text-lg text-white/30">
            Upgrade to unlock the full functionality of Sloby
          </p>
          <button
            className={
              'bg-[#782588] rounded-full p-2 px-4 transition-transform ease-in-out hover:scale-110'
            }
          >
            Upgrade
          </button>
        </div>
      </motion.div>
      <p
        className={
          'text-5xl font-bold flex gap-36 underline decoration-dark-border underline-offset-8'
        }
      >
        Recent Projects
      </p>
      <motion.div
        className={'flex gap-20 flex-wrap'}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <DashboardProjectPreview
          previewImage={'/images/preview1.webp'}
          title={'My Project 1'}
        />
        <DashboardProjectPreview
          previewImage={'/images/preview2.webp'}
          title={'My Project 2'}
        />
        <DashboardProjectPreview
          previewImage={'/images/preview3.webp'}
          title={'My Project 3'}
        />
      </motion.div>
    </div>
  );
}
