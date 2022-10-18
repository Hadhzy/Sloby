import { Menu } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../../../Components/Others/Context/ContentContext';
import { SlobyDashboard, SlobyMenuContainer,ViewItem, UserDetails,SlobyImage,FavoriteContainer,UserName,MainMenus,MenuItem, ViewsContainer, SlobyMenuCategoryTitle, FavoriteProject } from '../../styles/Dashboard';
import {IoMdSettings} from "react-icons/io"
import {FaLightbulb} from "react-icons/fa"
import {GiProgression} from "react-icons/gi"
import {FaListUl} from "react-icons/fa"
import {MdOutlineDashboard} from "react-icons/md"
import {AiTwotoneFolder} from "react-icons/ai"
import { FaSearch } from "react-icons/fa"

function SlobyMenu() {
    const {sloby_dashboard} = useContext(ContentContext)
    const [rener, setRender] = useState(false)

    const mainMenus = [
        {id: 0, title: "Settings", icon: <IoMdSettings className="sloby-icon"/>},
        {id: 1, title: "Updates", icon: <FaLightbulb className="sloby-icon"/>},
        { id: 2, title: "Progress", icon: <GiProgression className="sloby-icon" /> },
        {id: 3, title: "Search", icon: <FaSearch className='sloby-icon'/>}
    ]

    const views = [
        {id: 0, title: "List", icon: <FaListUl className="icon"/>},
        {id: 1, title: "Board", icon: <MdOutlineDashboard className="icon" />}
    ]


    return (
        <SlobyMenuContainer>
            <UserDetails>
                <SlobyImage src="https://content.invisioncic.com/a319035/monthly_2016_11/avatar.thumb.png.c68c113d40702f1cbaf0ff7fbb57ee46.png"></SlobyImage>
                <UserName>Gabor Hadhazy's dashboard</UserName>
            </UserDetails>
            <div className='underline'></div>
                <MainMenus>
                    {mainMenus.map((item: any) => {
                        return <MenuItem key={item.id}>
                           {item.icon}
                            {item.title}
                        </MenuItem>
                    })}
            </MainMenus>
            <ViewsContainer>
                <SlobyMenuCategoryTitle>Views</SlobyMenuCategoryTitle>   
                {views.map((item: any) => {
                    return <ViewItem>
                        {item.icon}
                        {item.title}
                    </ViewItem>
                })}
            </ViewsContainer>
            <FavoriteContainer>
                <FavoriteContainer>
                    <SlobyMenuCategoryTitle>Favorite</SlobyMenuCategoryTitle>
                    <FavoriteProject>
                        <AiTwotoneFolder className='icon'/>
                        ProjectName
                    </FavoriteProject>
                </FavoriteContainer>
            </FavoriteContainer>
        </SlobyMenuContainer>
    )
}

export default SlobyMenu