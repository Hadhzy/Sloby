import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { BaseToolTemplates, General } from '../../utils/constants';
import { TCurrentRoute, TSourceCodeBase } from '../../utils/types';
import DatabaseService from '../services/DatabaseService';
import { throws } from 'assert';

export default class InterfaceIntegration {
  /**The class which will be responsible of integrating with the preview interface */
  SOURCE_CODE_BASE: TSourceCodeBase;
  currentRoute: TCurrentRoute;
  constructor(private databaseService: DatabaseService) {
    this.SOURCE_CODE_BASE = JSON.parse(
      //@ts-expect-error
      localStorage.getItem(General.LOCAL_STORAGE_NAME)
    ) as TSourceCodeBase;
    this.currentRoute = '';
  }
  add(item: string | any = '', currentRoute: TCurrentRoute) {
    /**This method will add an item to the global source code of the preview and will push it into the database
     *@param {string} item => The item which will be added to the global source code
     */
    this.currentRoute = currentRoute;
    console.log(this.updatingSourceCode(currentRoute, item));
  }

  getProjectBasedSourceCode(project_id: string): string {
    /**This method will get the source code of the project based on its id
     * @param {string} project_id => The id of the requested project
     */
    if (!this.SOURCE_CODE_BASE[project_id]) return '';
    return this.SOURCE_CODE_BASE[project_id];
  }

  private updatingSourceCode(id: string, value: string) {
    if (this.SOURCE_CODE_BASE[id] === undefined) {
      this.SOURCE_CODE_BASE[id] = value;
      localStorage.setItem(
        General.LOCAL_STORAGE_NAME,
        JSON.stringify(this.SOURCE_CODE_BASE)
      );
    } else {
      let updatedObject = { ...this.SOURCE_CODE_BASE };
      let addedValue = updatedObject[id] + `/n${value}`;
      updatedObject[id] = addedValue;
      localStorage.setItem('GLOBAL_SOURCE', JSON.stringify(updatedObject));
    }
  }
}
