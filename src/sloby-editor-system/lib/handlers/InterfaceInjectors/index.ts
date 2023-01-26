import { TCurrentRoute } from '../../../../utils/types';
import ProjectsPropsHandler from './ProjectsPropsHandler';
import ProjectsSourceHandler from './ProjectsSourceHandler';
import { ScoopaBase } from 'scoopabase';

export default class interfaceIntegrator {
  global_db: ScoopaBase;
  constructor(
    private p_source_service: ProjectsSourceHandler,
    private p_props_service: ProjectsPropsHandler
  ) {
    this.global_db = new ScoopaBase('SLOBY_GLOBAL_DB');
  }

  public injectBaseSourceCode(
    injected_code: string | any = '',
    currentRoute: TCurrentRoute
  ) {
    return this.p_source_service.addSourceCode(currentRoute, injected_code, this.global_db);
  }
}
