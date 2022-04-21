import React, {useState} from "react"
import {Link} from "react-router-dom";
import useLocalStorage from "use-local-storage"

const NewConversation = () => {
    const [show, setShow] = useState(false)


    return (
        <div>
            <div className="new-conversation-container">
                <div className="create-new-conversation">
                    <button className="bbutton"
                            onClick={() => setShow(!show)}>
                        <h2>Open up a new Conversation</h2>
                    </button>
                </div>
            </div>
            {show && <Modal />}

        </div>
    )

    function Modal() {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [conversation, setConversation] = useState(false)




    return(
        <div className="modal">
           <div className="inputs">
               <form>
          <input
            value={name}
            type='text'
            placeholder='Name'
            className='input'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={room}
            type='text'
            placeholder='Room'
            className='input'
            onChange={(e) => setRoom(e.target.value)}
          />
               <div className="wrapper">
                   <Link onClick={(event) =>
            !name || !room ? event.preventDefault() : null
          }
          to={`/chat?name=${name}&room=${room}`}>
                       <button className="bbutton"  onClick={() => setConversation(true)}>
                        Create
                        </button>
                   </Link>
               </div>
       </form>
        </div>
{conversation && <Conversations name={name} room={room}/>}
    </div>
    )
}




    function Conversations({name, room}) {

        
        return(
            <div className="conversation-container">
                
            </div>
        )
    }
}
export default NewConversation





