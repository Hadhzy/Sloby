import { ToolCategories } from './constants';

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

export type ToolCategory = ToolCategories | undefined;

export type TranslatedElement = 'div';

export type TCurrentRoute = string;

export interface TSourceCodeBase {
  [key: string]: string | any;
}

export type TModifierElement = EventTarget;

export type TInputProps = {
  styleChange: (style_change: any, id: string, type: string) => void;
  styles: { [key: string]: any };
  lastClicked: string;
};
