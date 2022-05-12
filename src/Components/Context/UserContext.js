import React, { createContext, useState, useEffect } from "react"
import axios from "axios"
import {useCookies} from "react-cookie";

export const UserContext = createContext(true)

export const UserContextProvider = (props) => {
  const [logged_in, set_logged_in] = useState(false)
  const [token, set_token] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies()

  const DAYS_TO_SECONDS = 86400

    const secondsCalculator = (days) => {
        return days *  DAYS_TO_SECONDS
    }

  const _store_token = (value) => {
    set_token(value)
    setCookie("token", value, {path: "/", sameSite:"strict", maxAge: secondsCalculator(1)})
  }

  const log_in_user = async (email, password) => {
    try {
      const user_data = {email: email, password: password}
      const config = { headers: {"content-type": "application/json"} }

      let response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login/`, user_data, config)
      _store_token(response.data.key)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <UserContext.Provider
      value={{
        log_in_user: log_in_user
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
