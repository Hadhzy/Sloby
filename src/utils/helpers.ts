import React from 'react';
import { TSlobyProject } from './types';
import { Session } from 'inspector';
import { SessionContext } from '@supabase/auth-helpers-react';


export function checkUserProjectPerms(project: TSlobyProject, session: any){
  if(project.creator === session?.user.id || project.shared_with?.includes(session?.user.id)) return true
  return false
}