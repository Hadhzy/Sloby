import { ClassType } from 'react';
import supabase from '../../../config/supabase';
import TextCreationTool from '../../tools/text-tool/index';
import { TSlobyTool } from '../../../utils/types';
import { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import Html from '../../lib/grammar/Html';
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
  LOCAL_STORAGE_NAME = 'SLOBY_PREVIEW_SOURCE_CODE',
}
