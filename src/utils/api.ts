import React from 'react';
import { isConstructorDeclaration } from 'typescript';
import { TSlobyProject } from './types';
import supabase from '../config/supabase';
export async function getProjects(setProjects: Function) {
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

export async function getProjectById(project_id: string) {
  let { data, error } = await supabase.from('projects').select('*').match({
    id: project_id,
  });

  if (data) {
    return data[0];
  }
  if (error) return console.log(error);
}

export async function getCurrentProject(project_id: string) {
  const currentProject = await getProjectById(project_id);
  return currentProject;
}

export async function getTools(setTools: Function) {
  let { data, error } = await supabase.from('sloby_tools').select('*');

  if (error) {
    console.log(error);
  }

  if (data) {
    setTools(data);
    return data;
  }
}
