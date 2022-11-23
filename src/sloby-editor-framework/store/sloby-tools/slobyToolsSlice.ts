import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { useContext } from "react"
import { ContentContext } from "../../../Others/Context/ContentContext"
import { Deliver } from "../../handlers/deliver"
import TextCreationTool from "../../tools/text-creator"
import { ExpectedToolActionParameter } from "../../utils/types"
import { SlobyStateHandler } from "../../handlers/SlobyStateHandler"

export interface Tools {
  TextCreationTool: {
    isActive: boolean
  },
}

const testInitialState = new SlobyStateHandler()

const initialState: Tools = {
  TextCreationTool: {
    isActive: false,
  },
}


export const slobyToolsSlice = createSlice({
  name: "sloby_tools",
  initialState,
  reducers: {
    activateTool: (state: Tools, action: PayloadAction<ExpectedToolActionParameter>) => {
      /**
      * Setting up a sloby tool active, that is the first step of the implementation every tool will start with this.
      */
      // console.log(`${action.payload.tool} has been activated`)
      // const currentTool = action.payload.tool
      // if(!currentTool) return
      // state[currentTool].isActive = !state[currentTool].isActive

      // const deliver = new Deliver()
      // deliver.startDelivering(action.payload.tool)
    },
  }
})

export const { activateTool } = slobyToolsSlice.actions
export default slobyToolsSlice.reducer