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
  public updateProjectById(project_id: string) {}
  public deleteProjectById(project_id: string) {
    return this.client
      .from<string, TSlobyProject>(this.tableName)
      .delete()
      .match({ id: project_id });
  }
  public getTools() {
    return this.client.from('sloby_tools').select('*');
  }

  // async addElement(type: string, id: string) {
  //   switch (type) {
  //     case 'text-element':
  //       const { data: project, error } = await this.client
  //         .from('projects')
  //         .select('interface_source')
  //         .eq('id', id)
  //         .single();

  //       if (error) {
  //         console.error('Error fetching project:', error);
  //         return;
  //       }

  //       const interfaceSource = project?.interface_source ?? [];

  //       // Update the database in real-time
  //       const { error: updateError } = await supabase
  //         .from('projects')
  //         .update({ interface_source: interfaceSource })
  //         .eq('id', id);

  //       if (updateError) {
  //         console.error('Error updating project:', updateError);
  //         return;
  //       }

  //       break;
  //     default:
  //       // handle other element types
  //       break;
  //   }
  // }
}
