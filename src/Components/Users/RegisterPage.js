import React from 'react';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
function RegisterPage(props) {
    const [email, set_email] = useState("")
    const [password1, set_password1] = useState("")
    const [password2, set_password2] = useState("")
    const [error, set_error] = useState(null)
    const [waiting, set_waiting] = useState(false)

    const navigate = useNavigate()

    const handle_button_clicked = async (e) => {
        e.preventDefault()
        set_error(null)

        if(email.length === 0){
            set_error("Email must be filled.")
            return
        }

        if(password1.length === 0){
            set_error("Password is invalid")
            return
        }

        if(password2 !== password1){
            set_error("Passwords doesn't match")
            return
        }
       set_waiting(true)

        navigate("/users/verified-registration-email")
    }
    return (
        <div className="content-base">
            <div className="register-container">
                <form className="form-container">
                <h3> CREATE ACCOUNT</h3>
                <div className="underline bigger-line"></div>

                <input className="input-base" type="email" placeholder="Email" value={email} onChange={e => set_email(e.target.value)}/>
                <input className="input-base" type="password" placeholder="Password" value={password1} onChange={e => set_password1(e.target.value)}/>
                <input className="input-base" type="password" placeholder="Password confirm" value={password2} onChange={e => set_password2(e.target.value)}/>

                <br/>
                {
                    error&& <small className="error-message">{error}</small>
                }
                <br/>
                {
                    waiting?
                        <div>Waiting...</div>
                        :
                        <button  className="bbutton" onClick={handle_button_clicked}>CREATE</button>
                }
                <br/>
                <small>or <Link to="/">Return to site</Link></small>
            </form>
            </div>

        </div>
    );
}

export default RegisterPage;