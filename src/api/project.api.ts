import { SupabaseClient } from '@supabase/supabase-js';
import { match } from 'assert';
import { TSlobyProject } from '../utils/types';
import { BaseServices } from './base';

export class ProjectServices extends BaseServices {
  constructor(supabase: SupabaseClient) {
    super(supabase, 'projects');
  }
  public getProjects() {
    return this.client.from(this.tableName).select('*');
  }
  public async getCurrentProject(project_id: string) {
    return await this.getProjectById(project_id);
  }
  public getProjectById(project_id: string) {
    return this.client
      .from<string, TSlobyProject>(this.tableName)
      .select<string, TSlobyProject>('*')
      .match({
        id: project_id,
      });
  }
  public deleteProjectById(project_id: string) {
    console.log(project_id);
    return this.client
      .from<string, TSlobyProject>(this.tableName)
      .delete()
      .match({ id: project_id });
  }
  public getTools() {
    return this.client.from('sloby_tools').select('*');
  }

  public async checkProjectPermission(project_id: string) {
    //TODO: this need to fix the typing
    const res = (await this.getProjectById(project_id)).data![0]; //=> Fix typing
    const user = await this.client.auth.getUser();
    if (
      res.creator === user.data.user?.id ||
      res.shared_with?.includes(user.data.user?.id ?? '')
    ) {
      return true;
    } else {
      return false;
    }
  }
}
