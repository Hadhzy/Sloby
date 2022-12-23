import React, { useContext, useState } from 'react'
import {
  SlobyToolsContainer,
  SlobyToolInnerContainer,
  ToolNameContainer,
  Tool,
} from '../../utils/styles/Editor'
import { ContentContext } from '../../utils/context/ContentContext'
import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'
import { SlobyToolObject } from '../utils/types'
import { IEventType } from '../../utils/types'
import { Deliver } from '../handlers/deliver'
import { motion } from 'framer-motion'

function SlobyTools() {
  const { sloby_tools } = useContext(ContentContext)
  const dispatch = useDispatch<AppDispatch>()
  const [isCustomDisplayerActive, setIsCustomDisplayerActive] = useState(true)

  const CustomToolNameDisplayer = ({ tool }: { tool: string }) => {
    return (
      <ToolNameContainer
        className={`${isCustomDisplayerActive ? '' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.1 }}
      >
        {tool}
      </ToolNameContainer>
    )
  }

  const handleToolActivation = (e: any) => {
    const deliver = new Deliver()
    deliver.startDelivering(e.target.id)
  }

  return (
    <SlobyToolsContainer>
      {sloby_tools && (
        <>
          {sloby_tools.map((sloby_tool: SlobyToolObject) => {
            return (
              <Tool key={sloby_tool.id}>
                <CustomToolNameDisplayer tool={sloby_tool.tool_name} />
                <div onClick={(e) => handleToolActivation(e)}>
                  <SlobyToolInnerContainer
                    id={sloby_tool.tool}
                    onMouseEnter={() => setIsCustomDisplayerActive(true)}
                    onMouseLeave={() => setIsCustomDisplayerActive(false)}
                  >
                    <img
                      src={sloby_tool.url}
                      alt={''}
                      className="sloby-tool-image"
                      id={sloby_tool.tool}
                    />
                  </SlobyToolInnerContainer>
                </div>
              </Tool>
            )
          })}
        </>
      )}
    </SlobyToolsContainer>
  )
}

export default SlobyTools
