import React from 'react';
import styled, { css } from "styled-components";
import { varaibles } from '../global';

export const SlobyEditorContainer = styled.div`
  background: #131313;
  height: 100vh;
`

export const SlobyParts = styled.div`
  display: flex;
  border: 1px solid blue;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
`

export const SlobyToolsContainer = styled.div`
  width: 15%;
  color: white;
  border: 1px solid red;
`

export const SlobyPreviewSiteContainer = styled.div`
  color: white;
  border: 1px solid red;
  width: 70%;
`
export const SlobyModifierContainer = styled.div`
  width: 15%;
`