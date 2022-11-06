import React from "react"
import { AdminPageContainer } from "../../../Editor/utils/styles/AdminPage"
import { SlobyEditorContainer, SlobyConstantTools } from "../../../Editor/utils/styles/Editor"
import SlobyPreviewSite from "../SlobyPreviewSite/SlobyPreviewSite"
import SlobyTools from "../SlobyTools/SlobyTools"

function SlobyEditor() {
  return <SlobyEditorContainer>
      <SlobyConstantTools>
        <SlobyTools />
        <SlobyPreviewSite />
      </SlobyConstantTools>
  </SlobyEditorContainer>
}

export default SlobyEditor