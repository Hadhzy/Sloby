import { BaseToolTemplates, General } from '../../utils/constants';

export default class InterfaceIntegration {
  /**The class which will be responsible of integrating with the preview interface */
  add(item: string | BaseToolTemplates = ''): void {
    /**This method will add an item to the global source code of the preview
     *@param {string} item => The item which will be added to the global source code
     */
    console.log(item);
  }
}
