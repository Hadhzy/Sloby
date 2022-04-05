import React from "react"
import { useReducer, useState, useEffect, useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Modal from "./Modal"
//reducer function
import { reducer } from "./reducer"
import { SettingsDataContext } from "../../../Context/Forum"
import QuestionItem from "./QuestionItem"

const defaultState = {
  questions: [],
  isModalOpen: false,
  modalContent: "",
  forumTitle: "",
  forumDesc: "",
  // settingsType: "",
}

function Forum(props) {
  const [forumTitle, setForumTitle] = useState("")
  const [forumDesc, setForumDesc] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)
  const { settings, settingsMenu } = useContext(SettingsDataContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (forumTitle && forumDesc) {
      const newItem = {
        id: Date.now(),
        forumTitle,
        forumDesc,
      }
      dispatch({ type: "ADD_ITEM", payload: newItem })
      setForumTitle("")
      setForumDesc("")
    } else {
      dispatch({ type: "NO_VALUE" })
    }
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return (
    <div className='forum-container content-base'>
      {state.isModalOpen && (
        <>
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        </>
      )}
      <h1 className='title'>Help</h1>
      <div className='underline'></div>
      <div className='filter-container'>
        <div className='add-item-container'>
          <form onSubmit={handleSubmit} className='form'>
            <div className="input-container">
              <input
                type='text'
                value={forumTitle}
                onChange={(e) => setForumTitle(e.target.value)}
                placeholder='add the question title'
              />
              <input
                type='text'
                value={forumDesc}
                onChange={(e) => setForumDesc(e.target.value)}
                placeholder='add the question description'
              />
              <button className='button' type='submit'>
                add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='filtered-items-container'>
        {state.questions.map((question_item) => {
          return (
            <div className='filtered-items'>
              <QuestionItem
                key={question_item.id}
                question_item={question_item}
                dispatch={dispatch}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Forum
