/* eslint-disable @typescript-eslint/no-empty-interface */
export interface SlobyToolsStoreObject {
  TextCreationTool: SlobyTextCreationTool
}

export interface SlobyTextCreationTool {}

export interface SlobyStateHandlerInterface {
  getGlobalInitialState(): any
  addGlobalToolProperty(value: string, payload: any): void
  initializeTool(tool: string): void
  getToolProperty(tool: string, property?: string): object
}

export interface Tools {
  TextCreationTool: {
    isActive: boolean
  }
}
