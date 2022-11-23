import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { useContext } from "react"
import { ContentContext } from "../../../Others/Context/ContentContext"
import { Deliver } from "../../handlers/deliver"
import TextCreationTool from "../../tools/text-creator"
import { ExpectedToolActionParameter } from "../../utils/types"
import { SlobyStateHandler } from "../../handlers/SlobyStateHandler"
import { SlobyGlobalState } from "../../utils/constans"
import SlobyManager from "../../handlers/SlobyManager"


export interface Tools {
  TextCreationTool: {
    isActive: boolean
  },
}
const manager = new SlobyManager()

const initialState: any = manager.getLocalStorageGlobalState()

export const slobyToolsSlice = createSlice({
  name: "sloby_tools",
  initialState,
  reducers: {}
})

export const {  } = slobyToolsSlice.actions
export default slobyToolsSlice.reducer