import React, {useContext, useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import {ThemeContext} from "../Context/ThemeContext";
function LoginPage(props) {
    const {theme} = useContext(ThemeContext)
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")

     const navigate = useNavigate()

    const handle_login = async (e) => {
        e.preventDefault()
        if(email.length === 0 || password.length === 0) return

        navigate("/user")
    }
    return (
        <div data_theme={theme}>
            <div className="login-container">
                <form  className="form-container-base">
                    <h3 className="login-title">Login</h3>
                    <div className="underline"></div>

                    <input className="input-base" type="email" placeholder="Email" value={email} onChange={e => set_email(e.target.value)}/>
                    <input className="input-base" type="password" placeholder="Password" value={password} onChange={e=> set_password(e.target.value)}/>

                    <small ><Link className="off-link-dec  action-hover " to="/">Forgot your password?</Link></small>
                    <br/>
                    <button onClick={handle_login} className="bbutton">LOGIN</button>

                    <br/>
                    <small className="login-title">or <Link className="off-link-dec action-hover " to="/">Return to site</Link></small>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;