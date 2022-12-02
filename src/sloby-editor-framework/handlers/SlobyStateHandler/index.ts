import { SlobyToolsStore } from '../../tools/tools_components_store'
import { SlobyGlobalState } from '../../utils/constans'
import { SlobyStateHandlerInterface } from '../../utils/interfaces'
import { SlobyToolPropertyObject } from '../../utils/types'
import SlobyHelper from '../SlobyHelper'

export class SlobyStateHandler
  extends SlobyHelper
  implements SlobyStateHandlerInterface
{
  state: Record<string, any>
  constructor() {
    super()
    this.state = this.initializeLocalStorage()
  }

  getGlobalInitialState() {
    return this.state
  }

  addGlobalToolProperty(currentTool: string, payload: SlobyToolPropertyObject) {
    if (!SlobyToolsStore[currentTool])
      throw new Error(`${currentTool} is not an existing Sloby Tool`)
    this.state[currentTool] = payload
    console.log(this.state)
    this.setLocalStorage(SlobyGlobalState, this.state)
    console.log(
      `Local storage has been initialized with the new tool of ${currentTool}`
    )
  }

  initializeTool(tool: string) {
    this.addGlobalToolProperty(tool, { isActive: !this.state[tool].isActive })
  }

  getToolProperty(tool: string, property?: string | undefined): object {
    return {}
  }
}
