import { SlobyToolsStore } from "../../tools/tools_store";
import { SlobyStateHandlerInterface } from "../../utils/interfaces";

export class SlobyStateHandler implements SlobyStateHandlerInterface {
  constructor() {}
  state: Record<string, any> = {}

  getGlobalInitialState() {
    return this.state
  }

  addGlobalToolProperty(value: string, payload?: any) {
    if(!SlobyToolsStore[value]) throw new Error(`${value} is not an existing Sloby Tool`)
    if(this.state.hasOwnProperty(value)) return 
    if(payload === undefined) return this.state[value] = {}
    this.state[value] = payload
  }
}


const state = new SlobyStateHandler()
console.log(state.getGlobalInitialState())