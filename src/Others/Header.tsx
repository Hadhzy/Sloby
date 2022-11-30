import React, { useState, useEffect, useContext, SetStateAction } from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuItem,
  Button,
  ListItemSecondaryActionClassKey,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { ThemeContext } from './Context/ThemeContext'
import { ContentContext } from './Context/ContentContext'
import { UserContext } from './Context/UserContext'
import { useLocation } from 'react-router-dom'
import PreventUrls from './libraries/globalHelper/preventUrls'
import Content from './Content'
import Footer from './Footer'

type IHeaderItemData = {
  item_data: { items?: Array<string>; url?: string; title?: string | any }
}

function HeaderMenuItem({ item_data }: IHeaderItemData) {
  return (
    <div className="menu-item">
      <Link className="off-link-dec" to={`categories/${item_data.url}`}>
        <div className="header-menu-items">{item_data.title.toUpperCase()}</div>
      </Link>
      {item_data.items && <KeyboardArrowDownIcon />}

      <Popup item_data={item_data} />
    </div>
  );

  function Popup({ item_data }: IHeaderItemData) {
    return (
      <>
        {item_data.items && (
          <div className="popup-menu">
            {item_data.items.map((i: string) => (
              <div key={i} className="popup-items">
                <Link
                  to={`/categories/${item_data.url}/${i
                    .toLowerCase()
                    .replaceAll(' ', '-')}`}
                  className="popup-items off-link-dec"
                >
                  {i}
                </Link>
              </div>
            ))}
          </div>
        )}
      </>
    )
  }
}

function HeaderMenu() {
  const [menu_list, set_menu_list] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}categories/`,
    }).then((res) => set_menu_list(res.data));
  }, []);

  return (
    <div className="menu">
      {menu_list.map((item_data: any) => {
        return <HeaderMenuItem key={item_data.id} item_data={item_data} />;
      })}
    </div>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext)
  const { categories_accounts } = useContext(ContentContext)
  const { logged_in, log_out_user } = useContext(UserContext)
  let currentUrl = useLocation()

  let headerClassName = new PreventUrls({
    className: 'theme-case-header',
    urlToPreventFrom: ['/editor/dashboard', '/admin'],
    currentUrl: currentUrl.pathname,
  })

  return (
    <div className="theme-case-header">
      <div className={headerClassName.preventURL()}>
        <div className="header-container">
          <Link to="/" className="off-link-dec home icon">
            TomikaSlobyka
          </Link>
          <div className="navigation">
            <motion.div
              transition={{ delay: 1, duration: 1.5 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1.1, rotateZ: 360 }}
              className="menu-container"
            >
              <HeaderMenu />
            </motion.div>

            <motion.div
              className="button-wrapper"
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{
                delay: 1,
                duration: 0.2,
                type: 'spring',
                stiffness: 400,
              }}
            >
              {logged_in ? (
                <div className="log-out-container">
                  <Link className="off-link-dec log-out-icon" to="/user">
                    <i className="fa-solid fa-user"></i>
                  </Link>

                  <button onClick={log_out_user} className="bbutton">
                    Log out
                  </button>
                </div>
              ) : categories_accounts ? (
                <div>
                  <motion.button className="button" whileHover={{ scale: 1.1 }}>
                    <Link className="off-link-dec white" to="users/login">
                      {categories_accounts.login_title}
                    </Link>
                  </motion.button>
                  <motion.button className="button" whileHover={{ scale: 1.1 }}>
                    <Link className="off-link-dec white" to="users/register">
                      {categories_accounts.register_title}
                    </Link>
                  </motion.button>
                </div>
              ) : null}
            </motion.div>
          </div>

          <div className="base-sidebar-icon">
            <Sidebar />
          </div>
        </div>
      </div>
      <Content />
      <Footer />
    </div>
  )
}

function Sidebar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { settings_menu_titles } = useContext(ContentContext)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {settings_menu_titles ? (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link className="off-link-dec" to="settings">
                {settings_menu_titles.item_1}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {settings_menu_titles.item_2}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {settings_menu_titles.item_3}
            </MenuItem>
          </Menu>
        </div>
      ) : null}
    </div>
  );
}

export default Header
