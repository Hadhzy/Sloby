import React, {Component} from "react"
import { useReducer, useState, useEffect, useContext } from "react"
import Modal from "./Modal"
import { motion } from "framer-motion"
//reducer function
import { reducer } from "./reducer"
import QuestionItem from "./QuestionItem"
import useLocalStorage from "use-local-storage"
import { ThemeContext } from "../../../Context/ThemeContext"
import { ContentContext } from "../../../Context/ContentContext"
import {Button, Menu, MenuItem, Select, InputLabel} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import UploadImages from "./UploadImages"

const defaultState = {
  questions: [],
  isModalOpen: false,
  modalContent: "",
  modalType: "",
  forumTitle: "",
  forumDesc: "",
  // settingsType: "",
}
const containerVariants = {
  init: {
    y: -700,
  },
  animate: {
    y: 0,
    transition: {
      delay: 1,
      duration: 0.2,
      type: "spring",
      stiffness: 400,
    },
  },
}


function Forum(props) {
  const [forumTitle, setForumTitle] = useLocalStorage("forumTitle", "")
  const [forumDesc, setForumDesc] = useLocalStorage("forumDesc", "")
  const [state, dispatch] = useReducer(reducer, defaultState)
  const { theme } = useContext(ThemeContext)
  const {forum_and_security} = useContext(ContentContext)
  const [createQuestion, setCreateQuestion] =  useState(false) 


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
    <div data_theme={theme}>
      <div className='theme-case-forum'>
        {state.security &&
          state.questions.map((question_item) => {
            return (
              <div>
                {<Createquestion dispatch={dispatch} question_item={question_item} />}
              </div>
            )
          })}
        <div className='forum-container'>
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
            <div className="ask-for-help">
              <motion.div variants={containerVariants} initial='init' animate='animate' className="options">
                <button className='bbutton' onClick={() => setCreateQuestion(true)}>Create your question</button>
                <button className='button'>filter questions</button>
              </motion.div>
            </div>
            <div> {createQuestion && <Createquestion />}</div>
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
    </div>
  )          
  
  function Createquestion(e) {
    const [username, setUsername] = useState("")


    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape") {
        setCreateQuestion(false)
      }

    })

    return (
    <div className="container">
        <div className="details"> 
            <CloseIcon onClick={() => setCreateQuestion(false)}/>
            <div className="inputs">
              <input className="input-base" type="email" value={username} placeholder="UserName" onChange={e => setUsername(e.target.value)}/>
              <SelectCategory />   
            </div>
            <UploadImages />
            <MessageContainer />
          </div>
      </div>
    ) 

  }             

  function SelectCategory() {
    const [category, setCategory] = useState("")
    
    console.log(category)
    
    return(
      <div className="category-selector">
      <p className="paragraph">Select the question category: </p>
      <Select 
        value={category}
        onChange={e => setCategory(e.target.value)}
        >
      <MenuItem value="Test1">Test1</MenuItem>
      <MenuItem value="Test2">Test2</MenuItem>
      <MenuItem value="Test3">Test3</MenuItem>        
      </Select>
      <br />
    </div>
    )
  }
  
  function MessageContainer() {
    const [message, setMessage] = useState("")
    return(
    <div>
      <div className="message-container">
        <textarea placeholder="your message..." className="textarea" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      </div>
      <div className="submit-button-container">
        <button className='upload-button'>Submit</button>  
      </div>
    </div>
    )
  }

  

}
export default Forum
