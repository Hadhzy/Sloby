import { ClassType } from 'react';
import supabase from '../config/supabase';
import TextCreationTool from '../sloby-editor-system/tools/text-tool';
import { TSlobyTool } from './types';
import { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import Html from '../sloby-editor-system/lib/grammar/Html';
export enum ToolCategories {
  OBJECT = 'Object',
  UI_UX = 'UI/UX',
  LOGIC = 'Logic',
  ANIMATIONS = 'Animations',
}

const tools = {
  id: '08716038-68fb-47ab-9ea4-edf28b829ea1',
  tool_name: 'TextCreationTool',
  tool_p_name: 'Text Creation Tool',
};

export const toolsConstructors: Record<string, any> = {
  TextCreationTool,
};

const htmlTranslator = new Html();

export enum BaseToolTemplates {
  //@ts-expect-error
  TEXT_CREATION_TOOL = htmlTranslator.generate(
    'div',
    'This is just a test if it is works'
  ),
}

export enum General {
  LOCAL_DB_NAME = 'GLOBAL_SOURCE',
  LOCAL_DB_P_NAME = 'GLOBAL_PROPERTIES',
}
