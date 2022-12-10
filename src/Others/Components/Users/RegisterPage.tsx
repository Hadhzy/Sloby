import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContentContext } from "../../Context/ContentContext";
import { UserContext } from "../../Context/UserContext";

function RegisterPage() {
  const { register_user } = useContext(UserContext);
  const [email, set_email] = useState("");
  const [password1, set_password1] = useState("");
  const [password2, set_password2] = useState("");
  const [error, set_error] = useState("");
  const [waiting, set_waiting] = useState(false);

  // const { theme } = useContext(ThemeContext);
  const { users_create_account } = useContext(ContentContext);

  const navigate = useNavigate();

  const handle_button_clicked = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    set_error("");

    if (email.length === 0) {
      set_error("Email must be filled.");
      return;
    }

    if (password1.length === 0) {
      set_error("Password is invalid");
      return;
    }

    if (password2 !== password1) {
      set_error("Passwords doesn't match");
      return;
    }
    set_waiting(true);
    if (!register_user) return;
    const result = await register_user(email, password1);

    set_waiting(false);
    if (result) {
      navigate("/users/verified-registration-email");
    } else {
      set_error("Something went wrong");
    }
  };
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
              <div className="waiting-color">{users_create_account.optional_waiting}</div>
            ) : (
              <button className="bbutton" onClick={handle_button_clicked}>
                {users_create_account.button_title}
              </button>
            )}
            <br />
            <small className="login-title">
              or{" "}
              <Link className="off-link-dec action-hover" to="/">
                {users_create_account.small_tag}
              </Link>
            </small>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default RegisterPage;
