import React from 'react';

export interface ISlobyService {
  loadJson(filename: string): any;
  saveJson(filename: string, json: string): void;
}
