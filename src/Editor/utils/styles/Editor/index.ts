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
export const ToolNameContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 11px;
  visibility: hidden;
`

export const SlobyToolContainer = styled.div`
  position: relative;
  border: 1px solid red;
  transition: 250ms ease-in-out;
  border-radius: 50%;
  padding: 14px;
  background-color: #171717;
  border: 1px solid #262626;
  cursor: pointer;
  .sloby-tool-image {
    display: flex;
    jutify-conent: center;
    align-items:center;
    width: 30px;
    height: 30px;
  }

  &:hover {
    transition: 250ms ease-in-out;
    background-color: #191919;
    transform: translateY(-2px);
  }
`



export const Tool = styled.div`
  border: 1px solid red; 
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SlobyBuildingStepsContainer = styled.div`
  border: 1px solid green;
  color: white;
  height: 4%;
  display: flex;
  align-items: center;
`