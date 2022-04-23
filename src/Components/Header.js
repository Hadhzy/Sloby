
import React, { useState, useEffect, useContext } from "react"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import axios from "axios"
import MenuIcon from "@material-ui/icons/Menu"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, MenuItem, Button } from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {ThemeContext} from "./Context/ThemeContext";


function HeaderMenuItem({ item_data }) {
  return (
    <Link to={`categories/${item_data.url}`} className='menu-item off-link-dec'>
      <div className="header-menu-items">
      {item_data.title.toUpperCase()}
      </div>

      {item_data.items && <KeyboardArrowDownIcon />}

      {item_data.items && (
        <div className='popup-menu'>
          {item_data.items.map((i) => (
            <a key={i} className='popup-items'>
              <Link
                to={`/categories/${item_data.url}/${i
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className='popup-items off-link-dec'
              >
                {i}
              </Link>
            </a>
          ))}
        </div>
      )}
    </Link>
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
  const {theme} = useContext(ThemeContext)
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
    <div data_theme={theme}>
      <div className="theme-case-header">
        <div className='header-container' >
          <div className='navigation'>
            <motion.div
              transition={{ delay: 1, duration: 1.5 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1.1, rotateZ: 360 }}
              className='menu-container'
            >
              <HeaderMenu />
            </motion.div>

            <motion.div
              className='button-wrapper'
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{
                delay: 1,
                duration: 0.2,
                type: "spring",
                stiffness: 400,
              }}
            >
              <motion.button className='button' whileHover={{ scale: 1.1 }}>
                 <Link className="off-link-dec white" to="users/login">Login</Link>
              </motion.button>

              <motion.button className='button' whileHover={{ scale: 1.1 }}>
                <Link className="off-link-dec white" to="users/register">Create Your Account</Link>
              </motion.button>
            </motion.div>
          </div>

          <div className='base-sidebar-icon'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>

  )
}

function Sidebar() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link className='off-link-dec' to='settings'>
            Settings
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Header