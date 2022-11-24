import { SlobyToolsStore } from "../../tools/tools_store";
import { SlobyGlobalState } from "../../utils/constans";
import { SlobyStateHandlerInterface } from "../../utils/interfaces";

export class SlobyStateHandler implements SlobyStateHandlerInterface {
  state: Record<string, any>
  constructor() {
    this.state = {}
  }

  getGlobalInitialState() {
    return this.state
  }

  addGlobalToolProperty(value: string, payload?: any) {
    if(!SlobyToolsStore[value]) throw new Error(`${value} is not an existing Sloby Tool`) 
    if(this.state.hasOwnProperty(value)) return // Checking whether the tool has already been declared
    if(payload === undefined) return this.state[value] = {} // If we are not passing any payload then it'll set it to an empty object
    this.state[value] = payload // Setting the object property to whatever the payload contains
  }

  initializeTool(tool: string):void {
    this.addGlobalToolProperty(tool, { isActive: false })
    console.log(this.getGlobalInitialState())  
    console.log(`${tool} has been initialized`)
    localStorage.setItem(SlobyGlobalState, JSON.stringify(this.state))
    console.log("Local storage has been initialized and ready to be updated")
  }
}


const state = new SlobyStateHandler()
console.log(state.getGlobalInitialState())