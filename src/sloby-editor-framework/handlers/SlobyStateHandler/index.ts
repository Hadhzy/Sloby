import { SlobyToolsStore } from "../../tools/tools_store";
import { SlobyGlobalState } from "../../utils/constans";
import { SlobyStateHandlerInterface } from "../../utils/interfaces";
import { BaseSlobyToolObject, SlobyToolPropertyObject } from "../../utils/types";

export class SlobyStateHandler implements SlobyStateHandlerInterface {
  state: Record<string, any>
  constructor() {
    this.state = {}
  }

  getGlobalInitialState() { return this.state }

  addGlobalToolProperty(value: string, payload: SlobyToolPropertyObject) {
    if(!SlobyToolsStore[value]) throw new Error(`${value} is not an existing Sloby Tool`)
    let currentState = JSON.parse(localStorage.getItem(SlobyGlobalState) || "")
    if(currentState.hasOwnProperty(value)) return
    console.log("it is not having an own value")
    this.state = {...currentState}
    this.state[value] = payload
    console.log(this.state)
    localStorage.setItem(SlobyGlobalState, JSON.stringify(this.state))
    console.log(`Local storage has been initialized with the new tool of ${value}`)
  }

  activateTool(tool: string) {
    console.log(this.state)
  }

  initializeTool(tool: string):void {
    this.addGlobalToolProperty(tool, { isActive: false })
    console.log(this.getGlobalInitialState())  
  }
}

const state = new SlobyStateHandler()
console.log(state.getGlobalInitialState())