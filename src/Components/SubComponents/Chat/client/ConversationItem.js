import React, {useContext} from "react"
import {Link} from "react-router-dom";
import useLocalStorage from "use-local-storage"
import {useNavigate} from "react-router-dom";
import {ContentContext} from "../../../Context/ContentContext";

function ConversationItem({state, dispatch, conversation_item}) {
    const navigate = useNavigate();
    const {chat} = useContext(ContentContext)
    const handleClick = () => {
        navigate(`/chat?name=${conversation_item.name}&room=${conversation_item.room}`)
    }
    // const [savedName, setSavedName] = useLocalStorage("room-name", "")
    // const [savedRoom, setSavedRoom] = useLocalStorage("room-name", "")

    // setSavedRoom(conversation_item.room)
    // setSavedName(conversation_item.name)
    
    return (
        <div className="conversation-item">
            <div className="infos">
                <h5 className="conversation-title">{conversation_item.name}</h5>
            </div>
            <Link onClick={handleClick} to={`/chat?name=${conversation_item.name}&room=${conversation_item.room}`}>{chat.conversation_item.link_text}</Link>
        </div>
    )
}




export default ConversationItem