import React from "react"
import {IoMdSettings} from "react-icons/io"
import {FaLightbulb} from "react-icons/fa"
import {GiProgression} from "react-icons/gi"
import {FaListUl} from "react-icons/fa"
import {MdOutlineDashboard} from "react-icons/md"
import {AiTwotoneFolder} from "react-icons/ai"
import { FaSearch } from "react-icons/fa"


export const mainMenus = [
    {id: 0, title: "Settings", icon: <IoMdSettings className="sloby-icon"/>},
    {id: 1, title: "Updates", icon: <FaLightbulb className="sloby-icon"/>},
    { id: 2, title: "Progress", icon: <GiProgression className="sloby-icon" /> },
    {id: 3, title: "Search", icon: <FaSearch className='sloby-icon'/>}
]

export const views = [
    {id: 0, title: "List", icon: <FaListUl className="icon"/>},
    {id: 1, title: "Board", icon: <MdOutlineDashboard className="icon" />}
]