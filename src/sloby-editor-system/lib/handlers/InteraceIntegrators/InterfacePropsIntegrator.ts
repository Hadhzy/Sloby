import { ScoopaBase } from 'scoopabase';
import { DbManager } from '../../indexDB';
import { v4 as uuid } from 'uuid';
import { TCurrentRoute } from '../../../../utils/types';
import { v4 as uuidv4 } from 'uuid';

export default class InterfacePropsIntegrator extends DbManager<any> {
  private static readonly tableName = 'project_props_local_db';
  currentId: string;
  constructor() {
    super(InterfacePropsIntegrator.tableName, new ScoopaBase(DbManager.dbName));
    this.currentId = '';
  }

  // public async addNewInput(currentRoute: TCurrentRoute) {
  //   const previousItem = await this.getSingle(currentRoute);
  //   if (previousItem) {
  //     return await this.add(
  //       [...previousItem, { value: '', id: uuidv4 }],
  //       currentRoute
  //     );
  //   } else return await this.add([{ value: '', id: uuidv4() }], currentRoute);
  // }
}
