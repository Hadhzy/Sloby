import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { BaseToolTemplates, General } from '../../../../utils/constants';
import { TCurrentRoute, TSourceCodeBase } from '../../../../utils/types';
import DatabaseService from '../../services/DatabaseService';
import { throws } from 'assert';
import InterfaceIntegrator from './index';
import { ScoopaBase } from 'scoopabase';
import ProjectsPropsHandler from './ProjectsPropsHandler';

export default class ProjectsSourceHandler {
  /**The class which will be responsible of integrating with the preview interface */
  project_source_db: any;
  currentRoute: TCurrentRoute;
  constructor() {
    this.currentRoute = '';
    this.project_source_db = new InterfaceIntegrator(
      this,
      new ProjectsPropsHandler()
    ).global_db;
  }

  addSourceCode(id: string, value: string, db: ScoopaBase) {
    /**Updating the source code when creating something
     * @param {string} id => The id of the project that needs to be updated.
     * @param {string} value => The value that the project will be updated with.
     */
    /** TODO:
     * Need to implement the same exact thing as before just with the local db
     * First as you can see in the comments(not correctly tho) we need to check if whether there are any source code with the project id assigned, meaning that we already have a source code assigned to the project
     * If we are not have any source code assigned to the project then we need to create one, we need to take the current project id(@param id) as a property and give it the source code value(@param value)
     * As you can see in the 37th line
     * Otherwise if we have any source code assigned to the project then we just need to update it, meaning that we need to take the curernt source code and update it with the new one
     * You can see from 42th line to 51
     * The logic should remain the same the only thing that should change is the db that we are storing it.
     * However there are problems with it, when we are getting the data it gives us back an object with numers and each number is a character from the value that we are getting
     * This is really bad, so we need to use some other libraries
     *      */

    console.log(
      this.project_source_db
        .collection(General.LOCAL_DB_NAME)
        .documents$.subscribe((data: any) => data)
    );

    // if (this.project_source_db === null) {
    //   /**If there is no source code base with the project id yet then we are going to add it
    //    * That means that the project has no source code yet so we need to assign it to the localStorage
    //    */
    //   this.project_source_db! = { [id]: value }; //Adding the value to the global object
    // } else {
    //   /**Otherwise if the project has a source code then we just simply need to update it*/
    //   let updatedObject = { ...this.project_source_db }; // making cloned version of the current LocalStorage object
    //   updatedObject = {
    //     ...this.project_source_db,
    //     [id]:
    //       updatedObject[id] === undefined ? value : updatedObject[id] + value,
    //   };
    //   localStorage.setItem(
    //     General.LOCAL_DB_NAME,
    //     JSON.stringify(updatedObject)
    //   ); // finally updating the localStorage
    // }
  }

  // add(item: string | any = '', currentRoute: TCurrentRoute) {
  //   /**This method will add an item to the global source code of the preview and will push it into the database
  //    *@param {string} item => The item which will be added to the global source code
  //    */
  //   this.currentRoute = currentRoute;
  //   this.updatingSourceCode(currentRoute, item);
  // }

  // getProjectBasedSourceCode(project_id: string) {
  //   /**This method will get the source code of the project based on its id
  //    * @param {string} project_id => The id of the requested project
  //    */
  //   if (!localStorage.getItem(General.LOCAL_DB_NAME)) return;
  //   else return this.PROJECT_SOURCE![project_id];
  // }
}
