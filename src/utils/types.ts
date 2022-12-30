export type TProjectsParamater = {
  project_name: string;
  project_description: string;
  project_modal: boolean
}

type Tag = {
  id: number;
  tag: string, 
  color: string
}

export type TSlobyProject = {
  id: number, 
  created_at: Date, 
  project_name: string,
  project_description: string,
  shared_with: string
  creator: string | undefined,
  public: boolean;
  tags: Array<Tag> | undefined | string
}