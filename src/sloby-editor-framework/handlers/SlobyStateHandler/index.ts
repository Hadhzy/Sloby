import { current } from "@reduxjs/toolkit";
import { SlobyToolsStore } from "../../tools/tools_store";
import { SlobyGlobalState } from "../../utils/constans";
import { SlobyStateHandlerInterface } from "../../utils/interfaces";
import { BaseSlobyToolObject, SlobyToolPropertyObject } from "../../utils/types";
import SlobyHelper from "../SlobyHelper";

export class SlobyStateHandler implements SlobyStateHandlerInterface {
  state: any
  constructor() {
    this.state = this.initializeLocalStorage()
  }

  getGlobalInitialState() { return this.state }

  addGlobalToolProperty(currentTool: string, payload: SlobyToolPropertyObject) {
    if(!SlobyToolsStore[currentTool]) throw new Error(`${currentTool} is not an existing Sloby Tool`)
    const helper = new SlobyHelper()
    this.state[currentTool] = payload
    helper.setLocalStorage(SlobyGlobalState, this.state)
    console.log(this.state)
  }

  initializeLocalStorage() {
    const helper = new SlobyHelper()
    return helper.getLocalStorage(SlobyGlobalState)
  }

  initializeTool(tool: string) {
    this.addGlobalToolProperty(tool, {isActive: !this.state[tool].isActive})
  }
}
