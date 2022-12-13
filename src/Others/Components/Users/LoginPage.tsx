import React, { useContext, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContentContext } from '../../Context/ContentContext'

function LoginPage() {
  const [email, set_email] = useState('')
  const [password, set_password] = useState('')
  const { users_login } = useContext(ContentContext)

  const navigate = useNavigate()

  return (
    <div>
      {users_login ? (
        <div className="login-container">
          <form className="form-container-base">
            <h3 className="login-title">{users_login.title}</h3>
            <div className="underline"></div>

            <input
              className="input-base"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => set_email(e.target.value)}
            />
            <input
              className="input-base"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => set_password(e.target.value)}
            />

            <small>
              <Link className="off-link-dec  action-hover " to="/">
                {users_login.forgot_password}
              </Link>
            </small>
            <br />
            <button className="bbutton">
              {users_login.title.toUpperCase()}
            </button>

            <br />
            <small className="login-title">
              or{' '}
              <Link className="off-link-dec action-hover " to="/">
                {users_login.small_tag}
              </Link>
            </small>
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default LoginPage
