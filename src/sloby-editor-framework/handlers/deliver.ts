import { SlobyDynamicClass } from "./SlobyDynamicClass";

export class Deliver {
  startDelivering(tool: string) {
    /**
     * This is the main method for delivering a tool activation to the proper class handler.
     * For example if the "TextCreationTool" was activated then this method will deliver the info for the TextCreationTool class
     */
    console.log(`${tool} is in delivering state`);
    /**
     * We are declaring the handler instance and creating the new Dynamic class for it.
     * We're gonna pass the currentTool string for the dynamic class to create the proper class handler for us.
     * In this case we are passing null as the parameters
     */
    const handler = new SlobyDynamicClass(tool);
    // @ts-expect-error The Typescript doesn't know that which class is defined but the dynamic class do.
    handler.initializeTool(tool);
  }
}
