import React, { useState, useEffect } from "react"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import axios from "axios"
import { Link } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"

function HeaderMenuItem({ item_data }) {
  return (
    <div className='menu-item'>
      {item_data.title.toUpperCase()}

      {item_data.items && <KeyboardArrowDownIcon />}

      {item_data.items && (
        <div className='popup-menu'>
          {item_data.items.map((i) => (
            <a key={i} className='popup-items'>
              {i}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function HeaderMenu() {
  const [menu_list, set_menu_list] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/categories`,
    }).then((res) => set_menu_list(res.data))
  }, [])

  return (
    <div className='menu'>
      {menu_list.map((item_data) => {
        return <HeaderMenuItem key={item_data.id} item_data={item_data} />
      })}
    </div>
  )
}


function Header() {
  const [site_info, set_site_info] = useState([])

  const fetch_site_info = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/site_info`,
    }).then((res) => set_site_info(res.data))
  }

  useEffect(() => {
    fetch_site_info()
  }, [])



  return (
    <div className='header-container'>
      <HeaderMenu />
      <div className='button-wrapper'>
        <button className='button'>Sign up</button>
        <button className='button'>Create Account</button>
      </div>

      <div>
        <SideBar />
      </div>
    </div>
  )
}

function SideBarContent() {
  const [contentVisibility, setContentVisibility] = useState({settingsSectionVisibility: false, test1Visibility: false, test2Visibility: false,})

  const handleChange = (e) => {
    //newValue has some issue that i have to fix
    //switch statement would be cleaner
    //Destructuring, spread rest op
  if(e.target.id.matches("settingsSectionVisibility")) {
    const newValue = !contentVisibility.settingsSectionVisibility
    console.log(newValue)
    setContentVisibility({newValue})
  }
}

  return (
      <div className="sidebar-content-container">
           <ul>
             <li className="settings-section">
                <button onClick={handleChange}>Settings</button>
               {contentVisibility.settingsSectionVisibility && <div id="settingsSectionVisibility">settings-item</div>}
             </li>
              <li className="test-section">
                <button>Test</button>
                {contentVisibility.test1Visibility && <div id="test1Visibility">settings-item</div>}
             </li>
           </ul>
      </div>
  )
}

function SideBar() {
  const [sidebar, setSideBar] = useState(false)


  return (
    <div className="sidebar-container">
       <MenuIcon onClick={() => setSideBar(!sidebar)}/>
      {sidebar && <SideBarContent />}
    </div>
  )
}

export default Header
