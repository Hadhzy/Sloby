import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const SettingsDataContext = createContext(true)

export const SettingsDataProvider = (props) => {
  const [settingsMenu, setSettingsMenu] = useState([])
  const [settings, setSettings] = useState([])

  const fetch_settings = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/settings`,
    }).then((res) => setSettings(res.data))
  }

  const fetch_settings_category = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/settings-menu`,
    }).then((res) => setSettingsMenu(res.data))
  }

  useEffect(() => {
    fetch_settings()
    fetch_settings_category()
  }, [])

  return (
    <SettingsDataContext.Provider
      value={{
        settings: settings,
        settingsMenu: settingsMenu,
      }}
    >
      {props.children}
    </SettingsDataContext.Provider>
  )
}
