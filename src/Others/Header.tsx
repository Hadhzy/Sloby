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
import { HeaderItemData } from '../Editor/utils/types'

function Header() {
  return <div>asdasdasd</div>
}
export default Header
