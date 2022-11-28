import React from 'react'
import { AdminPageContainer } from '../../../Editor/utils/styles/AdminPage'
import {
  SlobyEditorContainer,
  SlobyParts,
  SlobyNavigatorContainer,
} from '../../../Editor/utils/styles/Editor'
import SlobyBuildingSteps from '../SlobyBuildingSteps'
import SlobyEditorNavigator from '../SlobyEditorNavigator'
import SlobyModifier from '../SlobyModifier'
import SlobyPreviewSiteInterface from '../SlobyPreviewSiteInterface'
import SlobyTools from '../SlobyTools'

function SlobyEditor() {
  return (
    <SlobyEditorContainer>
      <SlobyNavigatorContainer>
        <SlobyEditorNavigator />
      </SlobyNavigatorContainer>
      <SlobyBuildingSteps />
      <SlobyParts>
        <SlobyTools />
        <SlobyPreviewSiteInterface />
        <SlobyModifier />
      </SlobyParts>
    </SlobyEditorContainer>
  )
}

export default SlobyEditor
