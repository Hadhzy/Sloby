import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"

export const SideBarData = [
  {
    name: "Settings",
    path: "#",
    icon: <AiIcons.AiFillSetting />,
    closedIcon: <RiIcons.RiArrowDownSFill />,
    openedIcon: <RiIcons.RiArrowUpSFill />,
    subCategory: null,
  },
  {
    name: "Test",
    path: "#",
    icon: <AiIcons.AiFillSetting />,
    closedIcon: <RiIcons.RiArrowDownSFill />,
    openedIcon: <RiIcons.RiArrowUpSFill />,
    subCategory: [{ title: "Item1" }, { title: "Item1" }],
  },
]

export default SideBarData
