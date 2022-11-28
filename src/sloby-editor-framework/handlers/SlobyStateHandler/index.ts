import { SlobyToolsStore } from '../../tools/tools_store'
import { SlobyGlobalState } from '../../utils/constans'
import { SlobyStateHandlerInterface } from '../../utils/interfaces'
import { BaseSlobyToolObject, SlobyToolPropertyObject } from '../../utils/types'
import SlobyHelper from '../SlobyHelper'

export class SlobyStateHandler implements SlobyStateHandlerInterface {
  state: any
  constructor() {
    this.state = {}
  }

  getGlobalInitialState() {
    return this.state
  }

  addGlobalToolProperty(currentTool: string, payload: SlobyToolPropertyObject) {
    if (!SlobyToolsStore[currentTool])
      throw new Error(`${currentTool} is not an existing Sloby Tool`)
    this.state[currentTool] = payload
    console.log(this.state)
    const help = new SlobyHelper()
    help.setLocalStorage(SlobyGlobalState, this.state)
    console.log(
      `Local storage has been initialized with the new tool of ${currentTool}`
    )
  }

  initializeTool(tool: string) {
    this.addGlobalToolProperty(tool, { isActive: false })
  }
}
