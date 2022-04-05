import React from "react"
import { Link, Outlet } from "react-router-dom"
function User(props) {
  return (
    <div>
      <div className='content-base'>
        User
        <Outlet />
      </div>
    </div>
  )
}

export default User
