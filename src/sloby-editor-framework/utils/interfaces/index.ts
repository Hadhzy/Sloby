/* eslint-disable @typescript-eslint/no-empty-interface */
export interface SlobyToolsStoreObject {
  TextCreationTool: SlobyTextCreationTool;
}

export interface SlobyTextCreationTool {}

export interface SlobyStateHandlerInterface {
  getGlobalInitialState(): any;
  addGlobalToolProperty(value: string, payload: any): void;
}

export interface Tools {
  TextCreationTool: {
    isActive: boolean
  }
}
