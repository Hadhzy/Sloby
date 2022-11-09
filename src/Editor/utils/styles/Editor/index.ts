import React from 'react';
import styled, { css } from "styled-components";
import { varaibles } from '../global';

export const SlobyEditorContainer = styled.div`
  background: #131313;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
`
export const SlobyParts = styled.div`
  display: flex;
  border: 1px solid blue;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  height: 95vh;
`

export const SlobyToolsContainer = styled.div`
  width: 15%;
  color: white;
  border: 1px solid red;
  display: flex;  
  flex-direction: column;
  align-items: center;
`
export const SlobyPreviewInterface = styled.div`
  color: white;
  border: 1px solid red;
  width: 70%;
`
export const SlobyModifierContainer = styled.div`
  width: 15%;
  color: white;
`

export const SlobyNavigatorContainer = styled.div`
  color: white;
  border: 1px solid red;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SlobyToolContainer = styled.div`
  border: 1px solid red;
  transition: 250ms ease-in-out;
  &:hover {
    transition: 250ms ease-in-out;
    .tools-container {
      transition: 250ms ease-in-out;
      opacity: 1;
      display: block;
      visibility: visible;
    }
  }
`

export const ToolNameContainer = styled.div`
  transition: 250ms ease-in-out;
  opacity: 0;
  display: none;
  visibility: hidden;
`