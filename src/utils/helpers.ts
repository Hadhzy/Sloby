import React from 'react';
import { TSlobyProject } from './types';
import { Session } from 'inspector';
import { SessionContext } from '@supabase/auth-helpers-react';
import { getProjectById } from './api';


export function checkUserProjectPerms(project_id: string, session: any, supabase: any, setSuccess: Function){
  //@ts-ignore
  const currentProject: Promise<void | TSlobyProject> = getProjectById(project_id, supabase)
  currentProject.then((res: any) => {
    if(res.creator === session?.user.id || res.shared_with.includes(session.user.id)) {
      return setSuccess(true)
    } else return setSuccess(false)
  }).catch((err) => console.log(err))
}

