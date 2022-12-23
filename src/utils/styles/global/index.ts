import React from 'react'
import styled, { css } from 'styled-components'

export const SlobyInput = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 10px;
  background-color: #111111;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-indent: 10px;
  color: #aaaaaa;
  outline: none;
  font-weight: bold;

  transition: 250ms ease-in-out;

  ::placeholder {
    outline: none;
    color: #898989;
    font-size: 14px;
    font-weight: bold;
  }

  &:focus {
    ::placeholder {
      color: transparent;
    }
    transition: 250ms ease-in-out;
    border: 4px solid rgb(29 78 216);
    box-shadow: 1px 1px 1rem rgb(30 58 138);
    outline: none;
  }
`

export const ErrorPageContainer = styled.div`
  background-color: #202020;
  flex-direction: column;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorDescription = styled.div`
  color: #898989;
  font-weight: bold;
  font-size: 20px;
`

export const varaibles = {
  sloby_menu_bg: '#131313',
  sloby_dashboard_bg: '#181818',
  sloby_font_color: '#FAFAFA',
  sloby_menu_color: '#B9B9B9',

  sloby_menu_darker: '#20202020',
}
