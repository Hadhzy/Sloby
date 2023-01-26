import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { BaseToolTemplates, General } from '../../../utils/constants';
import { TCurrentRoute, TSourceCodeBase } from '../../../utils/types';
import DatabaseService from '../services/DatabaseService';
import { throws } from 'assert';
import { ScoopaBase } from 'scoopabase';
import { Dexie } from 'dexie';

export default class InterfaceIntegration {
  /**The class which will be responsible of integrating with the preview interface */
  source_db: Dexie;
  properties_db: Dexie;
  SOURCE_CODE_BASE: TSourceCodeBase | null;
  currentRoute: TCurrentRoute;
  constructor(private databaseService: DatabaseService) {
    this.source_db = new Dexie(General.LOCAL_DB_NAME);
    this.properties_db = new Dexie(General.LOCAL_DB_P_NAME);
    this.SOURCE_CODE_BASE = this.source_db;
    this.currentRoute = '';
    this.source_db.version(1).stores({});
  }
  add(item: string | any = '', currentRoute: TCurrentRoute) {
    /**This method will add an item to the global source code of the preview and will push it into the database
     *@param {string} item => The item which will be added to the global source code
     */
    this.currentRoute = currentRoute;
    this.updatingSourceCode(currentRoute, item);
  }

  getProjectBasedSourceCode(project_id: string) {
    /**This method will get the source code of the project based on its id
     * @param {string} project_id => The id of the requested project
     */
    if (!localStorage.getItem(General.LOCAL_DB_NAME)) return;
    else return this.SOURCE_CODE_BASE![project_id];
  }

  private updatingSourceCode(id: string, value: string) {
    /**Updating the source code when creating something
     * @param {string} id => The id of the project that needs to be updated.
     * @param {string} value => The value that the project will be updated with.
     */

    if (this.SOURCE_CODE_BASE === null) {
      /**If there is no source code base with the project id yet then we are going to add it
       * That means that the project has no source code yet so we need to assign it to the localStorage
       */
      this.SOURCE_CODE_BASE! = { [id]: value }; //Adding the value to the global object
      this.source_db;
    } else {
      /**Otherwise if the project has a source code then we just simply need to update it*/
      let updatedObject = { ...this.SOURCE_CODE_BASE }; // making cloned version of the current LocalStorage object
      updatedObject = {
        ...this.SOURCE_CODE_BASE,
        [id]:
          updatedObject[id] === undefined ? value : updatedObject[id] + value,
      };
      localStorage.setItem(
        General.LOCAL_DB_NAME,
        JSON.stringify(updatedObject)
      ); // finally updating the localStorage
    }
  }
}
