import React, { useContext, useState} from "react"
import {ContentContext} from "../../Context/ContentContext"
import {Link} from "react-router-dom"
import { BiHomeAlt, BiNews } from 'react-icons/bi'
import { AiFillHeart } from "react-icons/ai"
import { SiProgress } from "react-icons/si"

const data = [
    {id: 0, title: "Editor", icon: <BiHomeAlt />, path: "/editor/dashboard"},
    {id: 1, title: "Home Page", icon: <BiHomeAlt />, path: "/"},
    {id: 2, title: "Favorite Projects", icon: <AiFillHeart />, path: "/editor/dashboard/favorite-projects"},
    {id: 3, title: "News", icon: <BiNews />, path: "/editor/dashboard/news"},
    {id: 4, title: "Your Progress", icon: <SiProgress />, path: "/editor/dashboard/your-progress"}
]

const SideMenuBar = () => {
    const [activeMenu, setActiveMenu] = useState("")

    const handleMenuItem = (item) => {
        setActiveMenu(item)
    }

    return(
        <div className='menu-bar-container'>
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