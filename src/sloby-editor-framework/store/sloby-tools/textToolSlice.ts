import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface Tools {
  isActive: boolean
}

const initialState: Tools = {
  isActive: false
}


export const textToolSlice = createSlice({
  name: "sloby_text_tool",
  initialState,
  reducers: {
      setActive: (state, action: PayloadAction<boolean>) => {
          console.log("Tool has been activated")
          state.isActive = action.payload
      }
  }
})

export const {setActive} = textToolSlice.actions
export default textToolSlice.reducer