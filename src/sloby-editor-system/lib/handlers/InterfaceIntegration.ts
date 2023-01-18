import { BaseToolTemplates, General } from '../../utils/constants';
import { TCurrentRoute, TSourceCodeBase } from '../../utils/types';

export default class InterfaceIntegration {
  /**The class which will be responsible of integrating with the preview interface */
  SOURCE_CODE_BASE: TSourceCodeBase;
  constructor() {
    this.SOURCE_CODE_BASE = {};
  }
  add(item: string | BaseToolTemplates = '', currentRoute: TCurrentRoute) {
    /**This method will add an item to the global source code of the preview
     *@param {string} item => The item which will be added to the global source code
     */
    return (this.SOURCE_CODE_BASE[currentRoute] = item);
  }

  getProjectBasedSourceCode(project_id: string): string {
    /**This method will get the source code of the project based on its id
     * @param {string} project_id => The id of the requested project
     */
    if (!this.SOURCE_CODE_BASE[project_id]) return '';
    return this.SOURCE_CODE_BASE[project_id];
  }
}
