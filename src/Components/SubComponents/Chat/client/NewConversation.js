import React, {useState, useReducer} from "react"
import {Link} from "react-router-dom";
import useLocalStorage from "use-local-storage"
import {Button, CssBaseline, AppBar, Toolbar, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions} from "@material-ui/core"
import {reducer} from "./reducer"
import AddIcon from "@material-ui/icons/Add"
import ConversationItem from "./ConversationItem"

const defaultState = {
    conversations: [],
    isModalOpen: false,
    modalContent: "",
    name: "",
    room: "",
}


const NewConversation = () => {
    const [show, setShow] = useState(false)
    

    const handleClick = () => {
        setShow(!show)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
      <div>
        <div className="new-conversation-container">
            <Button variant="contained" color="primary" onClick={handleClick}>
                <AddIcon />
                new conversation
            </Button>
            <Modal />
        </div>
    </div>   
    )

    function Modal() {
        const [name, setName] = useState("")
        const [room, setRoom] = useState("")
        const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name && room) {
            const newItem = {
                id: Date.now(), 
                name, 
                room
            }
            dispatch({ type: "ADD_ITEM", payload: newItem})
            setName("")
            setRoom("")
        } else {
            dispatch({type: "NO_VALUE"})
        }
    }    

    return(
<div>
    <div className="modal">
        <form onSubmit={handleSubmit}>
            <div className="inputs">
            <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    placeholder='roomName'
                    />
                    <input
                    type="text"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    className="input"
                    placeholder='RoomId'
                    />
            </div>
            <button className="bbutton" type="submit">Create</button>
            <button className="bbutton">Cancel</button>
        </form>
    </div>
    <br />
   <div className="conversations">
        <div className="title-base">Conversations</div>
        <div className="underline bigger-line"></div>
        <div className="conversation-item">
            {
                state.conversations.map(conversation_item => {
                    return(
                        <ConversationItem state={state} dispatch={dispatch} conversation_item={conversation_item}/>
                    )
                })
            }
        </div>
   </div>
</div>
    )
  }
}

export default NewConversation





