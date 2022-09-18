import React, { useContext, useState} from "react"
import {ContentContext} from "../../Context/ContentContext"
import {Link} from "react-router-dom"
import { BiHomeAlt, BiNews } from 'react-icons/bi'
import { AiFillHeart } from "react-icons/ai"
import { SiProgress } from "react-icons/si"
import { HiOutlineUserCircle } from "react-icons/hi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai";

const data = [
    {id: 0, title: "Projects", icon: <AiOutlineFundProjectionScreen />, path: "/editor/dashboard"},
    {id: 1, title: "Home Page", icon: <BiHomeAlt />, path: "/"},
    {id: 2, title: "Favorite Projects", icon: <AiFillHeart />, path: "/editor/dashboard/favorite-projects"},
    {id: 3, title: "News", icon: <BiNews />, path: "/editor/dashboard/news"},
    {id: 4, title: "Your Progress", icon: <SiProgress />, path: "/editor/dashboard/your-progress"}
]

const SideMenuBar = () => {
    const [activeMenu, setActiveMenu] = useState("")

    const handleMenuItem = (item: string) => {
        setActiveMenu(item)
    }

    const UserDataTag = () => {
        return (
            <div className="user-data-tag-container">
               <Link to="/" className="off-link-dec">
                <div className="user-content">
                            <div className="user-avatar">
                                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-build-agile-flaticons-lineal-color-flat-icons.png" alt="" className="user-icon"/>
                            </div>
                        <div className="user-name">
                            SlobyBuilder
                        </div>
                </div>
               </Link>
            </div>
        )
    }

    return(
        <div className='menu-bar-container'>
            <UserDataTag />
                {data.map(menu_bar_item => {
                    return (
                        <Link 
                        onClick={() => handleMenuItem(menu_bar_item.title)}
                        to={menu_bar_item.path} 
                        key={menu_bar_item.id} 
                        className={`off-link-dec menu-bar-item ${activeMenu === menu_bar_item.title ? "menu-bar-item-active" : ""} `} 
                        >
                            <div className={`${activeMenu === menu_bar_item.title ? "menu-item-icon-active" : "menu-item-icon"}`}>{menu_bar_item.icon}</div>
                            <div className={`${activeMenu === menu_bar_item.title ? "menu-bar-title-active" : "menu-bar-title"}`}>
                                {menu_bar_item.title}
                            </div>
                        </Link>
                    )
                })}
        </div>
    )
}

export default SideMenuBar