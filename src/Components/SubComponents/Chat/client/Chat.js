
import React, { useState, useEffect } from "react"
import queryString from "query-string"
import io from "socket.io-client"
import InfoBar from "./InfoBar"
import Input from "./Input"
import Messages from "./Messages"
import NewConversation from "./NewConversation"
import RoomData from "./RoomData"
let socket

const Chat = ({ location }) => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState("")
  const END_POINT = "http://localhost:5000"

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search)
    console.log(room, name)
    socket = io(END_POINT)

    setName(name)
    setRoom(room)

    socket.emit("join", { name, room }, () => {})

    return () => {
      socket.emit("disconnect")
      socket.off()
    }
  }, [END_POINT, window.location.search])

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message])

      socket.on("roomData", ({ users }) => {
        setUsers(users)
      })
    })
  }, [messages])

  //function for sending and displaying messages
  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""))
    }
  }

  console.log(message, messages)

  return (
    <div className='outer-container'>
          <NewConversation  name={name} room={room}/>
      <div className='container'>
          <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <RoomData users={users} />
    </div>
  )
}

export default Chat