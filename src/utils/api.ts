import React from 'react';
import { isConstructorDeclaration } from 'typescript';
import { TSlobyProject } from './types';

export async function getProjects(setProjects: Function, supabase: any) {
  let { data: projects, error } = await supabase.from('projects').select('*');

  if (error) {
    console.log(error);
  }

  if (projects !== null) {
    // @ts-ignore
    console.log(projects);
    setProjects(projects);
  }
}

export async function getProjectById(project_id: string, supabase: any) {
  let { data, error } = await supabase.from('projects').select('*').match({
    id: project_id,
  });

  if (data) {
    return data[0];
  }
  if (error) return console.log(error);
}

export async function getCurrentProject(project_id: string, supabase: any) {
  const currentProject = await getProjectById(project_id, supabase);
  return currentProject;
}

export async function getTools(supabase: any, setTools: Function) {
  let { data, error } = await supabase.from('sloby_tools').select('*');

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
    setTools(data);
  }
}
