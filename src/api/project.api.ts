// This API file is for handling project related supabase requests.
// It has multiple methods for getting data and filtering it.

import { SupabaseClient } from '@supabase/supabase-js';
import { TSlobyProject } from '../utils/types';
import { BaseServices } from './base';

export class ProjectServices extends BaseServices {
  // API methods for projects
  constructor(supabase: SupabaseClient) {
    super(supabase, 'projects');
  }

  // Getting all of the projects
  public getProjects() {
    return this.client.from(this.tableName).select('*');
  }

  // Getting a single project source
  public async getProjectsSource(project_id: string) {
    const { data, error } = await this.client
      .from('projects')
      .select('interface_source')
      .eq('id', project_id)
      .single();

    if (data) {
      return data;
    }

    if (error) {
      console.log(error);
    }
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
    return this.client
      .from<string, TSlobyProject>(this.tableName)
      .delete()
      .match({ id: project_id });
  }
  public getTools() {
    return this.client.from('sloby_tools').select('*');
  }
}
