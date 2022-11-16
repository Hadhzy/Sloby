export interface SlobyTextCreationTool {
  method(name: string): void
}

export interface SlobyToolsStoreObject {
  TextCreationTool: SlobyTextCreationTool
}