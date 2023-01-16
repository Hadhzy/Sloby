import { ClassType } from 'react';
import supabase from '../../../utils/supabase';
import TextCreationTool from '../../tools/text-tool/index';
import { TSlobyTool } from '../../../utils/types';
import { PostgrestFilterBuilder } from '@supabase/postgrest-js';
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

