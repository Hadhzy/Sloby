import React from "react"
import { AdminPageContainer } from "../../src/Editor/utils/styles/AdminPage"
import { SlobyEditorContainer, SlobyConstantTools } from "../../src/Editor/utils/styles/Editor"
import SlobyPreviewSite from "./SlobyPreviewSite"
import SlobyTools from "./SlobyTools"

function SlobyEditor() {
  return <SlobyEditorContainer>
      <SlobyConstantTools>
        <SlobyTools />
        <SlobyPreviewSite />
      </SlobyConstantTools>
  </SlobyEditorContainer>
}

export default SlobyEditor