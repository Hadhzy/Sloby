export type TProjectsParamater = {
  project_name: string;
  project_description: string;
  project_modal: boolean
}

export type TSlobyProject = {
  id: number, 
  created_at: string, 
  project_name: string,
  project_description: string,
  shared_with: string[] |[], 
  creator: string
  public: boolean;
}