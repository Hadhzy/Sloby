import React from 'react';
import { BaseToolTemplates, ToolCategories } from '../constants';

export type ToolCategory = ToolCategories | undefined;

export type TranslatedElement = 'div';

export type TCurrentRoute = string;

export interface TSourceCodeBase {
  [key: string]: string | any;
}
