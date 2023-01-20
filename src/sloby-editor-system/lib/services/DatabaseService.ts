import supabase from '../../../config/supabase';
import { getCurrentProject } from '../../../utils/api';
import { BaseToolTemplates } from '../../utils/constants';

export default class DatabaseService {
  async insertCodeToDatabase(
    code: string | BaseToolTemplates,
    project_id: string
  ) {
    let { data, error } = await supabase
      .from('projects')
      .update({ preview_source: code })
      .match({ id: project_id })
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      return null;
    }
  }

  async getSourceCodebyId(project_id: string, setFunction: Function) {
    let { data, error } = await supabase
      .from('projects')
      .select('preview_source')
      .match({ id: project_id });
    if (error) {
      return console.log(error);
    }

    if (data) {
      return setFunction(data);
    }
  }

  // private returnData(data: any, error: any) {
  //   if (error) return console.log(error);
  //   if (data) return data;
  // }
}
