//left-handside sidebar in the dashboard

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { LoadingContext } from '../../utils/contexts/Loading';

export default function DashboardMenu({ className }: { className?: string }) {
  const { setLoading } = useContext(LoadingContext);
  return (
    <div
      className={`${className} border fixed bg-dark-darker h-screen w-[90px] border-dark-border border-r flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center">
        <Link href="/editor/dashboard">
          <Image
            alt="Sloby Logo"
            className="mt-[10px] sloby-logo"
            src={'/images/Sloby Logo Dark.svg'}
            width={70}
            height={70}
          />
        </Link>
        <div className="relative">
          <Link
            href="/editor/dashboard/projects"
            onClick={() => setLoading(true)}
            className={'peer'}
          >
            <FontAwesomeIcon
              icon={faBarsProgress}
              className={'dashboardIcon'}
            />
          </Link>
          <div className={`dashboardIconTooltip`}>Projects</div>
        </div>
      </div>
      <div className="flex-center mb-6">
        <div className={'relative z-40'}>
          <Link href="/editor/dashboard/settings" className={'peer'}>
            <FontAwesomeIcon icon={faGear} className={'dashboardIcon'} />
          </Link>
          <div className={`dashboardIconTooltip `}>Settings</div>
        </div>
      </div>
    </div>
  );
}
