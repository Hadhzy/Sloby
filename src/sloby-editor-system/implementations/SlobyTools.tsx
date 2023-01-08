import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import React, {useEffect, useState} from 'react'
import { getTools } from '../../utils/api'
import { TSlobyTool } from '../../utils/types'

const tools = [
  {id: 1, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 2, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 3, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 4, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 5, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 6, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 7, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 9, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
  {id: 8, tool_p_name: 'Text Creation Tool', tool_name: 'TextCreationTool'},
]


export default function SlobyTools  (){
    const supabase = useSupabaseClient() 

    useEffect(() => {
      getTools(supabase)
    }, [])


    return (
      <div className='bg-tools-bg md:w-1/1 lg:w-1/2 xl:w-1/3'>
        <div className='bg-sloby-tools-bg  ml-2 mt-6 mr-10 w-96 h-3/4 rounded-3xl flex flex-col items-center'>
          <div className='border-b border-editor-border-color items-center w-full flex justify-center h-14'>
            <p className='text-lg font-semibold'>Sloby Tools</p>
          </div>
          <div className='flex flex-wrap gap-8 justify-center'>
             {tools.map((tool: TSlobyTool) => {
              return <div key={tool.id} className='w-20 h-20 bg-tool-bg flex flex-wrap justify-center items-center rounded-full mt-4'>
                asd
              </div>
             })}
          </div>
        </div>
      </div>
    )
}
