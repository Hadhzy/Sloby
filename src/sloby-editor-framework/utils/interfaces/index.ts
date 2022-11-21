export interface SlobyTextCreationTool {}

export interface SlobyToolsStoreObject {
  TextCreationTool: SlobyTextCreationTool
}

export interface SlobyStateHandlerInterface {
  getGlobalInitialState(): Object
  addGlobalToolProperty(value: string): void
}

export interface Tools {
  TextCreationTool: {
    isActive: boolean
  },
}