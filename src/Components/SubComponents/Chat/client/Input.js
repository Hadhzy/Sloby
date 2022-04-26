import React, {useContext} from "react"
import { ContentContext } from "../../../Context/ContentContext"
const Input = ({ message, sendMessage, setMessage }) => {
    const {chat} = useContext(ContentContext)
    return(
        <form className='form'>
        <input
            type='text'
            value={message}
            className='input-input'
            placeholder='Write here...'
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
            }
        />
        <button className='send-button' onClick={(event) => sendMessage(event)}>
            {chat.input.button}
        </button>
    </form>
        )

}

export default Input
