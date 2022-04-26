import React, {useState, useReducer, useContext} from "react"
import {Button} from "@material-ui/core"
import {reducer} from "./reducer"
import AddIcon from "@material-ui/icons/Add"
import ConversationItem from "./ConversationItem"
import {ContentContext} from "../../../Context/ContentContext";

const defaultState = {
    conversations: [],
    isModalOpen: false,
    modalContent: "",
    name: "",
    room: "",
}


const NewConversation = () => {
    const [show, setShow] = useState(false)
    const {chat} = useContext(ContentContext)

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
                {chat.new_conversation.button}
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
            <button className="bbutton" type="submit">{chat.new_conversation.modal_button_1}</button>
            <button className="bbutton">{chat.new_conversation.modal_button_2}</button>
        </form>
    </div>
    <br />
   <div className="conversations">
        <div className="title-base">{chat.new_conversation.modal_title}</div>
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





