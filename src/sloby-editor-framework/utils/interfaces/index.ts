export interface SlobyTextCreationTool {}

export interface SlobyToolsStoreObject {
  TextCreationTool: SlobyTextCreationTool
}

export interface SlobyStateHandlerInterface {
  getGlobalInitialState(): Object
  addGlobalToolProperty(value: string, payload: any): void
}

export interface Tools {
  TextCreationTool: {
    isActive: boolean
  }
}
