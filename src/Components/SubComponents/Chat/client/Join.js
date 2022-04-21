
import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../../Context/ThemeContext"

const Join = () => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")

  let isTheUserAnAdmin = false
  
  if((name === "gaborhadhazy" && room === "owner") || (name === "Hels15" && room === "owner")) {
    isTheUserAnAdmin = true
  }

  return (
    <div className='join-container'>
      <div className='join-inner-container'>
        <h1 className='heading'>Join</h1>
        <div>
          <input
            value={name}
            type='text'
            placeholder='Name'
            className='join-input'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            value={room}
            type='text'
            placeholder='Room'
            className='join-input mt-20'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <div className='button-wrapper'>
          <Link
          onClick={(event) =>
            !name || !room ? event.preventDefault() : null
          }
          to={`/chat?name=${name}&room=${room}`}
          >
          <button className='bbutton mt-20' type='submit'>
            Sign in
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join