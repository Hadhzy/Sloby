import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const SettingsDataContext = createContext(true)

export const SettingsDataProvider = (props) => {
  const [forumMenu, setForumMenu] = useState([])
  const [forum, setForum] = useState([])

  const fetch_forum = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/settings`,
    }).then((res) => setForum(res.data))
  }

  const fetch_forum_category = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/settings-menu`,
    }).then((res) => setForumMenu(res.data))
  }

  useEffect(() => {
    fetch_forum()
    fetch_forum_category()
  }, [])

  return (
    <SettingsDataContext.Provider
      value={{
        forum: forum,
        forumMenu: forumMenu,
      }}
    >
      {props.children}
    </SettingsDataContext.Provider>
  )
}
