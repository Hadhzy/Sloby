import React from "react"
import { Link } from "react-router-dom"
import Join from "../Chat/client/Join"
import Chat from "../Chat/client/Chat"
import { ThemeContext } from "../../Context/ThemeContext"
import { useContext } from "react"

function Throw_A_MessageContent(props) {
  const { theme } = useContext(ThemeContext)
  return (
    <div data_theme={theme}>
      <div className='throw-message-container'>
        <div className='title-base'>Throw message</div>
        <div className="underline bigger-line"></div>
        <br />
        <Join />
      </div>
    </div>
  )
}

export default Throw_A_MessageContent
