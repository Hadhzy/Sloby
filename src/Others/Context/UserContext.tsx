import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { ContextChildren, IUserContext } from '../../Editor/utils/types'

export const UserContext = createContext<IUserContext>(undefined!)

export const UserContextProvider = ({ children }: ContextChildren) => {
  const [logged_in, set_logged_in] = useState(false)
  const [token, set_token] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies()

  const [first_name, set_first_name] = useState('')

  const DAYS_TO_SECONDS = 86400

  const secondsCalculator = (days: number) => {
    return days * DAYS_TO_SECONDS
  }
  const check_token = () => {
    if (cookies.token) {
      set_token(cookies.token)
      set_logged_in(true)
    }
  }

  const _store_token = (value: React.SetStateAction<null>) => {
    set_token(value)
    setCookie('token', value, {
      path: '/',
      sameSite: 'strict',
      maxAge: secondsCalculator(1),
    })
    set_logged_in(true)
  }

  const _remove_token = (value: string) => {
    removeCookie('token', { path: '/' })
    set_token(null)
    set_logged_in(false)
  }

  const log_in_user = async (email: string, password: string) => {
    try {
      const user_data = { email: email, password: password }
      const config = { headers: { 'content-type': 'application/json' } }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login/`,
        user_data,
        config
      )
      _store_token(response.data.key)
    } catch (error) {
      console.log(error)
    }
  }

  const log_out_user = async () => {
    try {
      console.log('hi')
      const config = {
        headers: { authorization: `token ${token}` },
      }
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth/logout/`, config)
        .then((res) => _remove_token(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  const register_user = async (email: string, password: string) => {
    try {
      const result = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/auth/registration/`,
        data: {
          email: email,
          password1: password,
          password2: password,
        },
      })
      return result.status === 201
    } catch (err) {
      return false
    }
  }

  const fetch_profile = () => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/api/users/profile/`,
      headers: {
        authorization: `token ${token}`,
      },
    }).then((res) => {
      const profile_data = res.data.profile
    })
  }
  useEffect(() => {
    check_token()
  }, [])

  return (
    <UserContext.Provider
      value={{
        log_in_user: log_in_user,
        log_out_user: log_out_user,
        register_user: register_user,
        logged_in: logged_in,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
