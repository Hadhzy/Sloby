
import React from "react"
import { useRef, useState, useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom";

function Settings(props) {
  const [settingsMenu, setSettingsMenu] = useState([])
  const [settings, setSettings] = useState([])
  const [categoryTitleChange, setCategoryTitleChange] = useState("")
  const [visibility, setVisibility] = useState(false)

  const fetch_settings = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/settings`
    }).then((res) => setSettings(res.data))
  }

  const fetch_settings_category = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/settings-menu`
    }).then((res) => setSettingsMenu(res.data))
  }

  useEffect(() => {
    fetch_settings();
    fetch_settings_category();
  }, [])

  function DisplayMenuButtons({ title, category, }) {
    return (
      title
    )
  }

  

  return (
    <div className='settings-container content-base'>
      <h1 className='title'>Settings</h1>
      <div className="underline"></div>
      <div className='filter-container'>
        {settingsMenu.map((category_data) => {
          const { title, id, category } = category_data
          return (
            <button key={id} id={category} className="settings-category-element button" onClick={(e) => {
             setVisibility(!visibility)
            }}>
              {title}
            </button>
          )
        })}
      </div>
      <div className="filtered-items-container">
        {settingsMenu.map(settings_data => {
          const {title, category} = settings_data
          if(settings_data.category === "User Settings") {
            
          }
          return (
          <div className="filtered-items-option">
            <h1>{visibility && <DisplayMenuButtons title={title} category={category}/>}</h1>
          </div>
          )
        })}
        {settings.map(settings_data => {
          const {id, title, description, category} = settings_data
          if(settings_data.type === "button") {
            return (
              <div className="filtered-items">
                <div key={id} id={category}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </div>  
            )
          } 
        })}
      </div>
    </div>
  )
}
export default Settings