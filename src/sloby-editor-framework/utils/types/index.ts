export type SlobyElement = {
  type?: string
}

export type SlobyToolObject = {
  id: number
  tool_name: string
  url: string
  tool: string
}

export type SlobyStateValue = {}

export type SlobyToolPropertyObject = {
  isActive: boolean
}

export type BaseSlobyToolObject = {
  [key: string]: any
  isActive?: boolean
}