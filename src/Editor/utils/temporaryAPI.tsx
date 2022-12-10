import { FaLightbulb, FaListUl } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";

export const mainMenus = [
  {
    id: 0,
    title: "Settings",
    icon: <IoMdSettings className="sloby-icon" />,
    path: "profile-settings",
  },
  {
    id: 1,
    title: "Updates",
    icon: <FaLightbulb className="sloby-icon" />,
    path: "updates",
  },
  {
    id: 2,
    title: "Progress",
    icon: <GiProgression className="sloby-icon" />,
    path: "progress",
  },
];

export const views = [
  { id: 0, title: "List", icon: <FaListUl className="icon" /> },
  { id: 1, title: "Board", icon: <MdOutlineDashboard className="icon" /> },
];
