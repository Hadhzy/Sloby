import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContentContext } from '../../Context/ContentContext'

function RegisterPage() {
  const [email, set_email] = useState('')
  const [password1, set_password1] = useState('')
  const [password2, set_password2] = useState('')
  const [error, set_error] = useState('')
  const [waiting, set_waiting] = useState(false)
  const { users_create_account } = useContext(ContentContext)

  const navigate = useNavigate()
  return (
    <div>
      {users_create_account ? (
        <div className="register-container">
          <form className="form-container-base">
            <h3 className="login-title">{users_create_account.title}</h3>
            <div className="underline bigger-line"></div>

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
              value={password1}
              onChange={(e) => set_password1(e.target.value)}
            />
            <input
              className="input-base"
              type="password"
              placeholder="Password confirm"
              value={password2}
              onChange={(e) => set_password2(e.target.value)}
            />

            <br />
            {error && <small className="error-message">{error}</small>}
            <br />
            {waiting ? (
              <div className="waiting-color">
                {users_create_account.optional_waiting}
              </div>
            ) : (
              <button className="bbutton">
                {users_create_account.button_title}
              </button>
            )}
            <br />
            <small className="login-title">
              or{' '}
              <Link className="off-link-dec action-hover" to="/">
                {users_create_account.small_tag}
              </Link>
            </small>
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default RegisterPage
