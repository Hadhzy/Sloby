import React, { useContext, useState } from "react"
import { SlobyToolsContainer,SlobyToolContainer,ToolNameContainer,Tool } from "../../Editor/utils/styles/Editor"
import { IEventType } from "../../Editor/utils/types"
import { ContentContext } from "../../Others/Context/ContentContext"
import { AppDispatch } from "../../Editor/store"
import { useDispatch } from "react-redux"
import { setActive } from "../store/sloby-tools/textToolSlice"

function SlobyTools() {
  const {sloby_tools} = useContext(ContentContext)
  const dispatch = useDispatch<AppDispatch>()

  const CustomToolNameDisplayer = ({ tool } : {tool: string}) => {
    return <ToolNameContainer className="tools-displayer">
      {tool}
    </ToolNameContainer>
  }

  return <SlobyToolsContainer>
      {sloby_tools && (
        <>
          {sloby_tools.map((sloby_tool: any) => {
          return  <Tool key={sloby_tool.id}>
                <CustomToolNameDisplayer tool={sloby_tool.tool} />
                <SlobyToolContainer  >
                  <img src={sloby_tool.url} alt={sloby_tool.tool} className="sloby-tool-image"/>
                </SlobyToolContainer>
             </Tool>
          })}
        </>
      )}
  </SlobyToolsContainer>
}

export default SlobyTools