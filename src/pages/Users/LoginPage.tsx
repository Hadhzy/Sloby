import React, { useContext, useState, useRef, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContentContext } from '../../utils/context/ContentContext'
import { SlobyLogoDark } from '../../assets'
import { SlobyInput } from '../../utils/styles/global'
import axios from 'axios'
import { ToastContext } from '../../utils/context/ToastContext'
import { ToastContainer, toast } from 'react-toastify'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const { toastify } = useContext(ToastContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Submitted form')
    if (!username || !password) {
      setError('Please fill all of the fields')
    } else if (password.length < 8) {
      setError('Please provide a password with at least 8 characters')
    } else if (username.length < 3) {
      setError('Please provide a username with at least 3 characters')
    } else {
      setError('')
      try {
        axios
          .post(`http://localhost:4001/api/auth/login`, {
            username,
            password,
          })
          .then((response) => {
            setCurrentUser(response.data)
            console.log(currentUser)
          })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="isolat ease-in  text-white bg-[#0B0B0B] flex-col h-screen flex justify-center items-center">
      <p className="mb-[60px] text-4xl">Log in</p>
      <div className="w-[800px] h-[600px] bg-[#0D0D0D]  rounded-xl">
        <div className="w-full flex justify-center mt-[30px]">
          <img src={SlobyLogoDark} alt="" />
        </div>
        <form
          onSubmit={(e: FormEvent) => handleSubmit(e)}
          className="flex flex-col w-full justify-center mt-[40px] items-center gap-[40px]"
        >
          <SlobyInput
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <SlobyInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{error}</p>
          <button
            type="submit"
            className="w-[500px] h-[50px] ease-in   text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-sm py-2.5 text-center mr-2 mb-2"
          >
            Log in
          </button>
        </form>
        {toastify && <ToastContainer />}
      </div>
    </div>
  )
}

export default LoginPage
