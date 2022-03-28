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

function Settings() {
  const [theme, setTheme] = useState("Light")

  const handleThemeSwitcher = () => {
    if (theme === "Light") {
      setTheme("Dark")
    } else {
      setTheme("Light")
    }
  }

  return (
    <div className='icon'>
      <MenuIcon />
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

      <div className='button-wrapper'>
        <Settings />
      </div>
    </div>
  )
}

export default Header
