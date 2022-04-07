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
  modalType: "",
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
      {state.isModalOpen && state.modalType === "add-item" && (
        <Modal
          modalContent={state.modalContent}
          closeModal={closeModal}
          modalType={state.modalType}
        />
      )}
      {state.isModalOpen && state.modalType === "no-value" && (
        <Modal
          modalContent={state.modalContent}
          closeModal={closeModal}
          modalType={state.modalType}
        />
      )}
      {state.isModalOpen && state.modalType === "item-removed" && (
        <Modal
          modalContent={state.modalContent}
          closeModal={closeModal}
          modalType={state.modalType}
        />
      )}
    <div className="help-system-container">
      <h1 className='title'>Help</h1>
      <div className='underline'></div>
      <div className="create-question-container">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                  <input className="input"

                  value={forumTitle}
                  onChange={(e) => setForumTitle(e.target.value)}
                  placeholder='add the question title'
              />
              <textarea className="input textarea"
                  value={forumDesc}
                  onChange={(e) => setForumDesc(e.target.value)}
                  placeholder='add the question description'

              />
              </div>
              <button className='bbutton' type='submit'>
                add
              </button>
            </form>
        </div>
      </div>
        <h1 className="title-questions">Your Questions</h1>
      <div className="underline bigger-line"></div>
        <div className="questions-container">
             {state.questions.map((question_item) => {
          return (
            <div>
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
 </div>
  )
}
export default Forum
