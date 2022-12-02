import { motion } from 'framer-motion'
import React from 'react'
import styled, { css } from 'styled-components'
import { varaibles } from '../global'

export const SlobyEditorContainer = styled.div`
  background: #131313;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
`;
export const SlobyParts = styled.div`
  display: flex;
  border: 1px solid blue;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  height: 95vh;
`;

export const SlobyToolsContainer = styled.div`
  width: 15%;
  color: white;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 250ms ease-in-out;

  .hidden {
    visibility: hidden;
    transition: 250ms ease-in-out;
  }
`;
export const SlobyPreviewInterfaceContainer = styled.div`
  color: white;
  border: 1px solid red;
  width: 70%;
`;
export const SlobyModifierContainer = styled.div`
  width: 15%;
  color: white;
  border: 1px solid red;
`;

export const SlobyNavigatorContainer = styled.div`
  color: white;
  border: 1px solid red;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ToolNameContainer = styled(motion.div)`
  margin-top: 35px;
  margin-bottom: 11px;
  text-align: center;
  color: #d4d7d9;
  font-weight: bold;
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #191919;
`;

export const SlobyToolInnerContainer = styled(motion.div)`
  position: relative;
  transition: 250ms ease-in-out;
  border-radius: 50%;
  padding: 14px;
  background-color: #171717;
  border: 1px solid #262626;
  cursor: pointer;
  &:hover {
    transition: 250ms ease-in-out;
    background-color: #191919;
    transform: translateY(-2px);
  }
  .sloby-tool-image {
    display: flex;
    jutify-conent: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
`

export const Tool = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlobyBuildingStepsContainer = styled.div`
  border: 1px solid green;
  color: white;
  height: 4%;
  display: flex;
  align-items: center;
`;

export const PreviewSiteInterface = styled.div``;