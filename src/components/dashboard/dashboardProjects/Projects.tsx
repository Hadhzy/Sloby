import {useSession, useSupabaseClient, useUser} from '@supabase/auth-helpers-react'
import {SupabaseClient} from '@supabase/supabase-js'
import React, {useEffect} from 'react'
import supabase from '../../../utils/supabase'
import {TSlobyProject} from '../../../utils/types'
import Project from './Project'


export default function Projects() {
    const session = useSession()
    const supabase = useSupabaseClient()
    const [projects, setProjects] = React.useState([])

    async function getProjects() {
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

    useEffect(() => {
        getProjects()
    })

    return (
        <div className={"flex flex-row gap-36"}>
            {
                projects.map((project: TSlobyProject) => {
                    return (
                        <div key={project.id} className='flex flex-wrap gap-20 border-white'>
                            <Project key={project.id} project={project}/>
                        </div>
                    )
                })
            }
        </div>
    )
}


