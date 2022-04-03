import React from "react"
import { useReducer, useState, useEffect, useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Modal from "./Modal"
//reducer function
import { reducer } from "./reducer"
import { SettingsDataContext } from "../../Context/Settings"

const defaultState = {
  settings: [],
  isModalOpen: false,
  modalContent: "",
  settingsTitle: "",
  settingsDesc: "",
  // settingsType: "",
}

function Settings(props) {
  const [visibility, setVisibility] = useState(false)
  const [settingsTitle, setSettingsTitle] = useState("")
  const [settingsDesc, setSettingsDesc] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)
  const { settings, settingsMenu } = useContext(SettingsDataContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (settingsTitle && settingsDesc) {
      const newItem = {
        id: new Date().getTime().toString,
        settingsTitle,
        settingsDesc,
      }
      dispatch({ type: "ADD_ITEM", payload: newItem })
      setSettingsTitle("")
      setSettingsDesc("")
    } else {
      dispatch({ type: "NO_VALUE" })
    }
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return (
    <div className='settings-container content-base'>
      {state.isModalOpen && (
        <>
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        </>
      )}
      <h1 className='title'>Settings</h1>
      <div className='underline'></div>
      <div className='filter-container'>
        <div className='add-item-container'>
          <form onSubmit={handleSubmit} className='form'>
            <div>
              <input
                type='text'
                value={settingsTitle}
                onChange={(e) => setSettingsTitle(e.target.value)}
                placeholder='add the settings title'
              />
              <input
                type='text'
                value={settingsDesc}
                onChange={(e) => setSettingsDesc(e.target.value)}
                placeholder='add the description'
              />
              <button className='button' type='submit'>
                add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='filtered-items-container'>
        {state.settings.map((setting) => {
          return (
            <div className='filtered-items'>
              <div>
                <h2>{setting.settingsTitle}</h2>
                <p>{setting.settingsDesc}</p>
                <button
                  className='button'
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: setting.id })
                  }
                >
                  remove
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Settings
