import { SlobyToolsStore } from "../../tools";
import { SlobyStateHandlerInterface } from "../../utils/interfaces";

export class SlobyStateHandler implements SlobyStateHandlerInterface {
  constructor() {}
  state: Record<string, any> = {}

  getGlobalInitialState() {
    return this.state
  }

  addGlobalToolProperty(value: string, payload?: any) {
    if(!SlobyToolsStore[value]) throw new Error(`${value} is not an available Sloby Tool`)
    if(!payload) this.state[value] = {}
    this.state[value] = payload 
  }
}


const state = new SlobyStateHandler()
console.log(state.getGlobalInitialState())
state.addGlobalToolProperty("TextCreationTool")
console.log(state.getGlobalInitialState())