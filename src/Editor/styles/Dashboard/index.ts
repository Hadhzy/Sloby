import React from 'react';
import styled, { css } from "styled-components";
import { varaibles } from '../global';



export const SlobyDashboard = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${varaibles.sloby_dashboard_bg};
    display: flex;
`

export const SlobyMenuContainer = styled.div`
    background: ${varaibles.sloby_menu_bg};
    height: 100%;
    width: 400px !important;
    border-radius: 0px 40px 40px 0px !important;
`

export const UserDetails = styled.div`
   height: 80px;
   display: flex;
    gap: 40px;  
   align-items: center;
   margin-bottom: -7px !important;
`

export const UserName = styled.div`
    color: ${varaibles.sloby_font_color};
    font-weight: bold;
    font-size: 18px !important;
`

export const SlobyImage = styled.img`
    width: 34px;
    height: 35px;
    border-radius: 50%;
    margin-left: 10px;  
`

export const MainMenus = styled.div`
    margin-top: 50px !important;
    height: max-content;
`
export const MenuItem = styled.div  `
    font-weight: bolder;
    color: ${varaibles.sloby_menu_color};
    font-size: 18px !important;
    display: flex;
    align-items: center;
    gap: 30px;
    width: 70%;
    margin-left: 30px;
    margin-bottom: 40px;
    border-radius: 10px !important;
    padding: 5px !important;

    .sloby-icon {
        font-size: 36px;
        color: #2d2d2d;
    }
    
    transition: all 0.3s ease-in-out;

    &:hover {
        background:  #1C1C1C;
        cursor: pointer;
    }
`

export const ViewsContainer = styled.div`
`

export const SlobyMenuCategoryTitle = styled.div`
    font-size: 18px;
    color: #4E4E4E;
    font-weight: bold;
    margin-left: 35px !important;
    margin-top: 50px !important;
`

export const ViewItem = styled.div`
    color: #D4D4D4;
    width: 50%;
    margin-left: 35px;
    margin-top: 20px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 50px;
    font-size: 18px !important;
    height: 40px;
    border-radius: 13px;
    font-weight: bold;
    background-color: #1C1C1C;
    transition: all 0.3s ease-in-out;   

    .icon {
        margin-left: 15px;
        color: #3F3F3F;
    }

    &:hover {
        transform: translateY(-4px);
        background-color: #212121;
        cursor: pointer;
    }
`

export const FavoriteContainer = styled.div`

`

export const FavoriteProject = styled.div`
    width: 70%;
    padding: 5px;
    margin-left: 35px;
    margin-top: 15px;
    color: white;
    font-weight: bold;
    display: flex;
    gap: 30px;
    font-size: 18px;
    height: 45px;
    align-items: center;
    color: #DADADA;
    background-color: #1C1C1C;
    transition: all 0.3s ease-in-out;   

    &:hover {
        transform: translateY(-4px);
        background-color: #212121;
        cursor: pointer;
    }
    .icon {
        color: #3F3F3F;
        margin-left: 15px;
    }
    border-radius: 15px;
`

export const SlobySearchWindowContainer = styled.div`
    height: max-content;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SlobySearchWindow = styled.div`
    height: max-content;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: #171717;
    height: 45px;
    border-radius: 0px 0px 20px 20px;
`

export const SlobySearchContainer = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
   
`

export const Searchbar = styled.input`
    background-color: #1D1D1D;
    border: none;
    width: 300px;
    outline: none;
    color: #949494;
    font-weight: bold;
    height: 30px;
    border-radius: 0px 20px 20px 0px;
    font-size: 15px;

`

export const IconContainer = styled.div`
    background-color: #1D1D1D;
    border-radius: 20px 0px 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;

     .search {
        color: #333333; 
        height: 30px;
        font-size: 20px;
    }
`