import React, { FormEvent, useState } from 'react'
import { SlobyLogoDark } from '../../assets'
import { SlobyInput } from '../../utils/styles/global'
import { off } from 'process'
import { MdOpenInFull } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { sendData } from '../../store/user/userSlice'
import { GiConsoleController } from 'react-icons/gi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Submitted')
    if (!username || !email || !password) {
      setError('Please fill all of the fields')
    } else if (password.length < 8) {
      setError('Please provide a password with at least 8 characters')
    } else if (username.length < 3) {
      setError('Please provide a username with at least 3 characters')
    } else {
      setError('')

      try {
        axios.post(`http://localhost:4001/api/users/create`, {
          username,
          email,
          password,
        })
      } catch (err) {
        console.log(err)
      } finally {
        navigate('/auth/login')
      }
    }
  }

  return (
    <div className="isolat ease-in  text-white bg-[#0B0B0B] flex-col h-screen flex justify-center items-center">
      <p className="mb-[60px] text-4xl">Sign up</p>
      <div className="w-[800px] h-[600px] bg-[#0D0D0D]  rounded-xl">
        <div className="w-full flex justify-center mt-[10px]">
          <img src={SlobyLogoDark} alt="" />
        </div>
        <form
          onSubmit={(e: FormEvent) => handleSubmit(e)}
          className="flex flex-col w-full justify-center mt-[40px] items-center gap-[40px]"
        >
          <SlobyInput
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          <SlobyInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <SlobyInput
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <p className="ease-in">{error}</p>
          <button
            type="submit"
            className="w-[500px] h-[50px] ease-in  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-sm py-2.5 text-center mr-2 mb-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
