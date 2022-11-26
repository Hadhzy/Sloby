import { SlobyToolsStore } from "../../tools/tools_store";
import { SlobyGlobalState } from "../../utils/constans";
import { SlobyStateHandlerInterface } from "../../utils/interfaces";
import { BaseSlobyToolObject, SlobyToolPropertyObject } from "../../utils/types";
import SlobyHelper from "../SlobyHelper";

export class SlobyStateHandler implements SlobyStateHandlerInterface {
  state: Record<string, any>
  constructor() {
    const help = new SlobyHelper()
    this.state = help.getLocalStorage(SlobyGlobalState)
  }

  getGlobalInitialState() { return this.state }
  addGlobalToolProperty(value: string, payload: SlobyToolPropertyObject) {
    if(!SlobyToolsStore[value]) throw new Error(`${value} is not an existing Sloby Tool`)
    console.log("it is not having an own value")
    this.state[value] = payload
    console.log(this.state)
    const help = new SlobyHelper()
    help.setLocalStorage(SlobyGlobalState, this.state)
    console.log(`Local storage has been initialized with the new tool of ${value}`)
  }

  initializeTool(tool: string):void {
    this.addGlobalToolProperty(tool, { isActive: false })
  }
}
