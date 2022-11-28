import React from "react";
import styled, { css } from "styled-components";
import { varaibles } from "../global";

export const SlobyDashboard = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${varaibles.sloby_dashboard_bg};
  display: flex;
`;

export const SlobyProjectHandlerContainer = styled.div`
  width: 70%;
`;

export const SlobyMenuContainer = styled.div`
  background: ${varaibles.sloby_menu_bg};
  height: 100%;
  width: 450px !important;
  border-radius: 0px 40px 40px 0px !important;
`;

export const UserDetails = styled.div`
  height: 80px;
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: -7px !important;
`;

export const UserName = styled.div`
  color: ${varaibles.sloby_font_color};
  font-weight: bold;
  font-size: 18px !important;
`;

export const SlobyImage = styled.img`
  width: 34px;
  height: 35px;
  border-radius: 50%;
  margin-left: 15px;
`;

export const MainMenus = styled.div`
  margin-top: 40px !important;
  height: max-content;
`;
export const MenuItem = styled.div`
  font-weight: bolder;
  color: ${varaibles.sloby_menu_color};
  font-size: 17px !important;
  display: flex;
  align-items: center;
  gap: 30px;
  width: 70%;
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 10px !important;
  padding: 5px !important;

  .sloby-icon {
    font-size: 36px;
    color: #2d2d2d;
  }

  transition: all 0.3s ease-in-out;

  &:hover {
    background: #1c1c1c;
    cursor: pointer;
  }
`;

export const ViewsContainer = styled.div``;

export const SlobyMenuCategoryTitle = styled.div`
  font-size: 18px;
  color: #4e4e4e;
  font-weight: bold;
  margin-left: 35px !important;
  margin-top: 50px !important;
`;

export const ViewItem = styled.div`
  color: #d4d4d4;
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
  background-color: #1c1c1c;
  transition: all 0.3s ease-in-out;

  .icon {
    margin-left: 15px;
    color: #3f3f3f;
  }

  &:hover {
    transform: translateY(-4px);
    background-color: #212121;
    cursor: pointer;
  }
`;

export const FavoriteContainer = styled.div``;

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
  color: #dadada;
  background-color: #1c1c1c;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    background-color: #212121;
    cursor: pointer;
  }
  .icon {
    color: #3f3f3f;
    margin-left: 15px;
  }
  border-radius: 15px;
`;

export const SlobySearchWindowContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

export const SlobySearchContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Searchbar = styled.input`
  background-color: #1d1d1d;
  border: none;
  width: 300px;
  outline: none;
  color: #949494;
  font-weight: bold;
  height: 30px;
  border-radius: 0px 20px 20px 0px;
  font-size: 15px;
`;

export const IconContainer = styled.div`
  background-color: #1d1d1d;
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
`;

export const NewProjectButton = styled.button`
  margin-left: 35px;
  width: 60%;
  padding: 10px;
  border-radius: 15px;
  color: #d4d4d4;
  background-color: #1c1c1c;
  font-size: 17px;
  font-weight: bold;
  border: none;
  transition: 250ms ease-in-out;
  &:hover {
    transform: translateY(-4px);
    background-color: #212121;
    cursor: pointer;
  }
`;

export const ProjectModalContainer = styled.div`
  position: fixed;
  z-index: 200;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 700px;
  background-color: #191919;
  height: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #202020;
`;
export const ModalTitle = styled.div`
  font-weight: bold;
  color: #b9b9b9;
  margin-top: 10px;
  font-size: 18px;
`;

export const ProjectsHandler = styled.div`
  position: fixed;
  padding-top: 65px;
`;

export const Title = styled.h2`
  font-weight: bold;
  height: max-content;
  margin-left: 55px;
  color: #4e4e4e;
`;
export const ProjectContainer = styled.div`
  border: 1px solid xred;
  margin-top: 25px;
  margin-left: 55px;
  width: 73.55vw;
  height: 83vh;
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
`;

export const EmptyProjects = styled.div`
  width: 73.55vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Description = styled.div`
  color: #424242;
  font-size: 16px;
  font-weight: bold;
`;

export const Project = styled.div`
  width: 200px;
  height: 200px;
  background: #121212;
  border-radius: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  transition: 250ms ease-in-out;
  &:hover {
    transition: 250ms ease-in-out;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

export const ProjectTitle = styled.div`
  color: #c2c2c2;
`;
export const ProjectTitleContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
  border-radius: 20px;
  background: #161616;
  margin-top: 35px;
  border: 1px solid #202020;
`;

export const ProfilePicture = styled.div`
  width: 90px;
  height: 90px;
  background-color: #1f1f1f;
  border-radius: 50%;
`;

export const IntegrationButton = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;

  .integration-button-icon {
    color: #303030;
    margin-right: 7px;
    font-size: 17px;
  }
`;
