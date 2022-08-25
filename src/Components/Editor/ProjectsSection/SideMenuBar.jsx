import React, { useContext, useState} from "react"
import {ContentContext} from "../../Context/ContentContext"
import {Link} from "react-router-dom"


const SideMenuBar = () => {
    const {menu_bar_items} = useContext(ContentContext)
    const [activeMenu, setActiveMenu] = useState("")

    const handleMenuItem = (item) => {
        setActiveMenu(item)
    }

    return(
        <div className='menu-bar-container'>
            {menu_bar_items.map(menu_bar_item => {
                return (
                    <Link 
                    onClick={() => handleMenuItem(menu_bar_item.title)}
                    to={menu_bar_item.path} 
                    key={menu_bar_item.id} 
                    className={`off-link-dec menu-bar-item ${activeMenu === menu_bar_item.title ? "menu-bar-item-active" : ""} `} 
                    >
                        <img src={menu_bar_item.icon}  alt={menu_bar_item.title + Math.random()} />
                        <div className={`${activeMenu === menu_bar_item.title ? "menu-bar-title-active" : "menu-bar-title"}`}>
                            {menu_bar_item.title}
                        </div>
                    </Link>
                    // <div key={menu_bar_item.id} className={`menu-bar-item ${activeMenu === menu_bar_item.title ? "menu-bar-item-active" : ""}`} onClick={() => handleMenuItem(menu_bar_item.title)}>
                    //         
                    //         <Link to={menu_bar_item.path} className="off-link-dec" >
                    //            
                    //         </Link>
                    // </div>
                )
            })}
        </div>
    )
}

export default SideMenuBar