import styled, { css } from "styled-components";

export const AdminPageTitle = styled.div`
  color: white;  
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  top: 50px;  
`


export const AdminPageContainer = styled.div`
    background: #222222;
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    gap: 50px;

    form {
        display: block;
    }
`

export const AdminPageSignInContainer = styled.div`
    background: #1D1D1D;    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 860px;
    flex-direction: column;
    color: white;
    border-radius: 12px;
    height: 560px;
    gap: 50px;
    position: relative;
`


export const AdminPageFormContainer = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 45px;
    align-items: center;
`

export const SubmitButton = styled.button`
    position: absolute;
    bottom: 50px;
    width: 600px;
    padding: 15px;
    border-radius: 10px;
    background-color: #222222;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    transition: 250ms ease-out;

    &:hover {
        transform: translateY(-5px);
        background-color: #272727;
    }
`

