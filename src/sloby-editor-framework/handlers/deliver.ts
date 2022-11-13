import { SlobySet } from "../SlobySets/main"
import { slobyToolsList } from "../utils/constans"

export class Deliver {
  constructor() {}

  deliverToHandler(tool: string) {
    /**
     * This is the main method for delivering a tool activation to the proper class handler.
     * For example if the "textTool" was activated then this method will deliver the info for the textHandler class
     */
    console.log(`${tool} is in delivering state`)

  }

  private handleDeliveringWithSets() {
    /**
     * This will take care of recognizing the proper class handler from the tool activation state
     * Using own set package the SlobySet
     */
    const slobyTool = new SlobySet([slobyToolsList])
  }
}