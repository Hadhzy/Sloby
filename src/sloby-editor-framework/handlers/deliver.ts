import { SlobyDynamicClass } from "./SlobyDynamicClass"
import { SlobySet } from "./SlobySets/main"

export class Deliver {
  constructor() {}

  deliverToHandler(tool: string) {
    /**
     * This is the main method for delivering a tool activation to the proper class handler.
     * For example if the "textTool" was activated then this method will deliver the info for the textHandler class
     */
    console.log(`${tool} is in delivering state`)
    /**
     * We are declaring the handler instance and creating the new Dynamic class for it.
     * We're gonna pass the currentTool string for the dynamic class to create the proper class handler for us.
     * In this case we are passing null as the parameters
     */
    let handler = new SlobyDynamicClass(tool, null)
    // @ts-expect-error
    handler.initializeTool(tool)
  }
}