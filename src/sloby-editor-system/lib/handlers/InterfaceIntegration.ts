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
    const GLOBAL_SOURCE_CODE = JSON.parse(
      //@ts-ignore
      localStorage.getItem('GLOBAL_SOURCE')
    ); // error needs to be resolved
    if (!GLOBAL_SOURCE_CODE[project_id])
      return ''; // If there is no source code then return empty string
    else return GLOBAL_SOURCE_CODE[project_id] as string; // otherwise return the associated source code
  }

  private updatingSourceCode(id: string, value: string) {
    /**Updating the source code when creating something
     * @param {string} id => The id of the project that needs to be updated.
     * @param {string} value => The value that the project will be updated with.
     */
    if (this.SOURCE_CODE_BASE[id] === undefined) {
      /**If there is no source code base with the project id yet then we are going to add it
       * That means that the project has no source code yet so we need to assign it to the localStorage
       */
      this.SOURCE_CODE_BASE[id] = value; //Adding the value to the global object
      localStorage.setItem(
        General.LOCAL_STORAGE_NAME,
        JSON.stringify(this.SOURCE_CODE_BASE) //setting the value in localStorage
      );
    } else {
      /**Otherwise if the project has a source code then we just simply need to update it*/
      let updatedObject = { ...this.SOURCE_CODE_BASE }; // making cloned version of the current LocalStorage object
      let addedValue = updatedObject[id] + `${value}`; // creating the html string block
      updatedObject[id] = addedValue; // adding the html block to the updated object
      localStorage.setItem('GLOBAL_SOURCE', JSON.stringify(updatedObject)); // finally updating the localStorage
    }
  }
}
