import React, { useContext } from "react"
import { SlobyToolsContainer,SlobyToolContainer,ToolNameContainer,Tool } from "../../Editor/utils/styles/Editor"
import { ContentContext } from "../../Others/Context/ContentContext"
import { AppDispatch } from "../../Editor/store"
import { useDispatch } from "react-redux"
import { activateTool } from "../store/sloby-tools/slobyTools"
import { SlobyToolObject } from "../utils/types"
import { IEventType } from "../../Editor/utils/types"
import { Deliver } from "../handlers/deliver"

function SlobyTools() {
  const {sloby_tools} = useContext(ContentContext)
  const dispatch = useDispatch<AppDispatch>()


  const CustomToolNameDisplayer = ({ tool } : {tool: string}) => {
    return <ToolNameContainer className="tools-displayer">
      {tool}
    </ToolNameContainer>
  }

  

  const handleToolActivation = (sloby_tool: any, e: any) => {
    dispatch(activateTool({ tool : e.target.id }))
    console.log(e.target.id)
    const tool = new Deliver()
    tool.deliverToHandler(e.target.id)
  }

  return <SlobyToolsContainer>
      {sloby_tools && (
        <>
          {sloby_tools.map((sloby_tool: SlobyToolObject) => {
          return  <Tool key={sloby_tool.id}>
                <CustomToolNameDisplayer tool={sloby_tool.tool_name} />
                <div onClick={(e) => handleToolActivation(sloby_tool, e)}>
                  <SlobyToolContainer id={sloby_tool.dispatched_tool}>
                    <img src={sloby_tool.url}  alt={""} className="sloby-tool-image" id={sloby_tool.dispatched_tool}/>
                  </SlobyToolContainer>
                </div>
             </Tool>
          })}
        </>
      )}
  </SlobyToolsContainer>
}

export default SlobyTools