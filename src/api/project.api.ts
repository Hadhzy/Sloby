import { SupabaseClient } from "@supabase/supabase-js";
import { BaseServices } from "./base";

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
        return this.client.from(this.tableName).select('*').match({
            id: project_id
        })
        // let { data, error } = await this.client.from('projects').select('*').match({
        //     id: project_id,
        // });

        // if (data) {
        //     return data[0];
        // }
        // if (error) return console.log(error);

    }
    //getTools
    public getTools() {
        return this.client.from('sloby_tools').select('*');

        // if (error) {
        //     console.log(error);
        // }

        // if (data) {
        //     setTools(data);
        //     return data;
        // }

    }
}