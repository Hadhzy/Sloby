import React from 'react'

export async function getProjects(setProjects: Function, supabase: any) {
  let {data: projects, error} = await supabase
      .from('projects')
      .select('*')


  if (error) {
      console.log(error)
  }

  if (projects !== null) {
      // @ts-ignore
      setProjects(projects)
  }
}