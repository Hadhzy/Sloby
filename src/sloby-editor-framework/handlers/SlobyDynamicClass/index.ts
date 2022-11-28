import { SlobyToolsStore } from '../../tools/tools_store'

export class SlobyDynamicClass {
  /**
   * Create a class based on the string that I've passed in dynamically.
   */
  constructor(currentClassName: string, args?: any) {
    /**
     * Checking if the className is exist in the store object.
     * If the class is exists then it will return an instance of it.
     */
    if (
      SlobyToolsStore[currentClassName] === undefined ||
      SlobyToolsStore[currentClassName] === null
    ) {
      /**
       * Throwing an error when the tool is not existing.
       */
      throw new Error(`Class ${currentClassName} is not in the store`)
    }
    return new SlobyToolsStore[currentClassName](args)
  }
}
