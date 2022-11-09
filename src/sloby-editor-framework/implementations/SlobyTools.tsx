import React, { useContext, useState } from "react"
import { SlobyToolsContainer,SlobyToolContainer,ToolNameContainer } from "../../Editor/utils/styles/Editor"
import { ContentContext } from "../../Others/Context/ContentContext"

function SlobyTools() {
  const {sloby_tools} = useContext(ContentContext)

  const CustomToolNameDisplayer = ({ tool } : {tool: string}) => {
    return <ToolNameContainer className="tools-container">
      {tool}
    </ToolNameContainer>
  }


  return <SlobyToolsContainer>
      {sloby_tools && (
        <>
          {sloby_tools.map((sloby_tool: any) => {
            return <SlobyToolContainer key={sloby_tool.id}>
                <CustomToolNameDisplayer tool={sloby_tool.tool}/>
                <img src={sloby_tool.url} alt={sloby_tool.tool} />
            </SlobyToolContainer>
          })}
        </>
      )}
  </SlobyToolsContainer>
}

export default SlobyTools