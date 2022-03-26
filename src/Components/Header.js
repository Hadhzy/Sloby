import React, {useState, useEffect} from "react"
import { Typography, Button, Container, Grid, CssBaseline, AppBar, Toolbar, TextField, InputBase, Menu, MenuItem, ButtonGroup } from "@material-ui/core"
import useStyles from "./styles"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import axios from "axios"
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings'
import AccountCircle from "@material-ui/icons/AccountCircle";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {Link} from "react-router-dom";


function HeaderMenuItem({item_data}) {

    return(
        <p className="menu-item">
        {item_data.title.toUpperCase()}

        {
            item_data.items && <KeyboardArrowDownIcon />
        }

        {
            item_data.items && <div className="popup-menu">
                {
                    item_data.items.map(i => <a key={i} className="menu-item">{i}</a>)
                }
            </div>
        }


    </p>
    )
}

function HeaderMenu() {
    const [menu_list, set_menu_list] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/categories`
        }).then(res => set_menu_list(res.data))
    }, [])

    return (
        <div className="menu">
            {
                menu_list.map(item_data => <HeaderMenuItem key={item_data.id} item_data={item_data} />)
            }
        </div>
    )
}


function Header() {
    const  [site_info, set_site_info] = useState([])

    const fetch_site_info = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/site_info`
        }).then(res => set_site_info(res.data))
    }

    useEffect(() => {
        fetch_site_info();
    }, [])



  return (
      <div className="header-container">
          <div className="content-container">
              <HeaderMenu />
          </div>
      </div>
  )
}

export default Header
