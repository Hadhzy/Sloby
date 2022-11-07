import React from "react"
import { AdminPageContainer } from "../../../Editor/utils/styles/AdminPage"
import { SlobyEditorContainer, SlobyParts } from "../../../Editor/utils/styles/Editor"
import SlobyModifier from "../SlobyModifier"
import SlobyPreviewSite from "../SlobyPreviewSite/SlobyPreviewSite"
import SlobyTools from "../SlobyTools/SlobyTools"

function SlobyEditor() {
  return <SlobyEditorContainer>
      <SlobyParts>
        <SlobyTools />
        <SlobyPreviewSite />
        <SlobyModifier />
      </SlobyParts>
  </SlobyEditorContainer>
}

export default SlobyEditor