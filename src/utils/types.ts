export type TProjectsParamater = {
  project_name: string;
  project_description: string;
  project_modal: boolean;
};

export type Tag = {
  id: number;
  tag: string;
  color: string;
};

export type TSlobyProject = {
  id: string;
  created_at: Date;
  project_name: string;
  project_description: string;
  shared_with: string | null;
  creator: string | undefined;
  public: boolean;
  tags: Tag[];
  preview_source: string;
};

export type TSlobyTool = {
  id: string;
  tool_p_name: string;
  tool_name: string;
};
