import React from "react"
import { useReducer, useState, useEffect, useContext } from "react"
import Modal from "./Modal"
import {motion} from "framer-motion"
//reducer function
import { reducer } from "./reducer"
import { SettingsDataContext } from "../../../Context/Forum"
import QuestionItem from "./QuestionItem"
import Security from "./Security"
const defaultState = {
  questions: [],
  isModalOpen: false,
  modalContent: "",
  modalType: "",
  security: true,
  forumTitle: "",
  forumDesc: "",
  // settingsType: "",
}
const containerVariants={
  init:{
    y: -700,

  },
  animate:{
    y:0,
    transition: {
      delay: 1,
      duration: 0.2,
      type: "spring",
      stiffness: 400,
    }
  }
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
  <div>
    {state.security && state.questions.map((question_item) => {
      return(
          <div>
            {<Security dispatch={dispatch} question_item={question_item}/>}
          </div>
      )
    })}
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
      <div className='help-system-container'>
        <motion.h1 className='title'
        variants={containerVariants}
        initial="init"
        animate="animate">Forum</motion.h1>

        <motion.div className='underline'
        variants={containerVariants}
        initial="init"
        animate="animate"></motion.div>
      
        <div className='create-question-container'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <div className='inputs'>
                <input
                  className='input'
                  value={forumTitle}
                  onChange={(e) => setForumTitle(e.target.value)}
                  placeholder='add the question title'
                />
                <textarea
                  className='input textarea'
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
        <motion.h1 className='title-questions'
        variants={containerVariants}
        initial="init"
        animate="animate">Your Questions</motion.h1>

        <motion.div className='underline bigger-line'
         variants={containerVariants}
        initial="init"
        animate="animate"
        ></motion.div>

        <div className='questions-container'>
          {state.questions.map((question_item) => {
            return (  
              <div>
                <div>
                <QuestionItem
                  key={question_item.id}
                  question_item={question_item}
                  dispatch={dispatch}
                />
                </div>   
              </div>
            )
          })}
        </div>
      </div>
    </div>
 </div>
  )
}
export default Forum
