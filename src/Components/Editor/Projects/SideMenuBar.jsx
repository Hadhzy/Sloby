import React, { useContext} from "react"
import {ContentContext} from "../../Context/ContentContext"
import {Link} from "react-router-dom"


const SideMenuBar = () => {
    const {menu_bar_items} = useContext(ContentContext)
    return(
        <div className='menu-bar-container'>
            
            {
               menu_bar_items.map((item) => (
                <div className='menu-items' key={item.id}>
                    <Link to={item.path} className='off-link-dec'>
                        {item.title}
                    </Link>
                </div>
               ))                         
            }
        </div>
    )
}

export default SideMenuBar