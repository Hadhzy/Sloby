import { Tools } from "../../store/sloby-tools/slobyToolsSlice"

export type SlobyElement = {
  type?: string
}

export type ExpectedActionParameter = {
  tool: keyof Tools ,
}

export type SlobyToolObject = {
  id: number
  tool_name: string
  url: string
  dispatched_tool: string
}