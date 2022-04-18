import React from "react"

const Input = ({ message, sendMessage, setMessage }) => (
  <form className='form'>
    <input
      type='text'
      value={message}
      className='input'
      placeholder='Write here...'
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className='send-button' onClick={(event) => sendMessage(event)}>
      Send
    </button>
  </form>
)

export default Input
