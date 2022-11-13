import {createSlice, current, PayloadAction} from "@reduxjs/toolkit"
import { ExpectedActionParameter } from "../../utils/types"

export interface Tools {
  textTool: {
    isActive: boolean
  }
}

const initialState: Tools = {
  textTool: {
    isActive: false
  }
}


export const slobyToolsSlice = createSlice({
  name: "sloby_tools",
  initialState,
  reducers: {
    activateTool: (state: Tools, action: PayloadAction<ExpectedActionParameter>) => {
      /**
       * Setting up a sloby tool active, that's gonna help the detector class which will detect the changes and apply them.
       * Using the action parameter object to set up the tool isActive property-
       * to whatever the action payload value property is.
       */
      console.log(`${action.payload.tool} has been activated`)
      const currentTool = action.payload.tool
      if(!currentTool) return
      state[currentTool].isActive = !state[currentTool].isActive
    }, 
  }
})

export const { activateTool } = slobyToolsSlice.actions
export default slobyToolsSlice.reducer