// Used to define sloby types

export type TProjectsParameter = {
  project_name: string;
  project_description: string;
  project_modal: boolean;
};

export type TToastTheme = 'dark' | 'light';
export type TToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center';
  
export type Tag = {
  id: number;
  tag: string;
  color: string;
};

export type TSlobyProject = {
  id: string;
  created_at: Date;
  edited_at: Date; 
  project_name: string;
  project_description: string;
  creator: string | undefined;
  public: boolean;
  tags: Tag[];
  interface_source: Array<JSON>;
};

export type TSlobyTool = {
  id: string;
  tool_p_name: string;
  tool_name: string;
  html_tag: string;
};

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

export type TInputContextProps = {
  type: string;
  value: string;
  id: string;
  position: { x: number; y: number };
  style: any;
  dimensions: { x: number; y: number };
  states: {
    isReadonly: boolean;
  };
};

export type TElement = {
  type: string; // html tag name div | p | h | etc.
  value: string;
  id: string;
  position: { x: number; y: number };
  states: { isReadonly: boolean };
  style: {
    color: string;
    fontSize: string;
    fontWeight: string;
    fontFamily: string;
  };
  dimensions: { x: number; y: number };
};
