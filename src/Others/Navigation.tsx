import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContentContext } from "./Context/ContentContext";
import { UserContext } from "./Context/UserContext";
import { HeaderMenu } from "./HeaderMenu";

export const Navigation = () => {
  const { categories_accounts } = useContext(ContentContext);
  const { logged_in, log_out_user } = useContext(UserContext);

  return (
    <div className="navigation">
      <motion.div
        transition={{ delay: 1, duration: 1.5 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1.1, rotateZ: 360 }}
        className="menu-container"
      >
        <HeaderMenu />
      </motion.div>

      <motion.div
        className="button-wrapper"
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{
          delay: 1,
          duration: 0.2,
          type: "spring",
          stiffness: 400,
        }}
      >
        {logged_in ? (
          <div className="log-out-container">
            <Link className="off-link-dec log-out-icon" to="/user">
              <i className="fa-solid fa-user"></i>
            </Link>

            <button onClick={log_out_user} className="bbutton">
              Log out
            </button>
          </div>
        ) : categories_accounts ? (
          <div>
            <motion.button className="button" whileHover={{ scale: 1.1 }}>
              <Link className="off-link-dec white" to="users/login">
                {categories_accounts.login_title}
              </Link>
            </motion.button>
            <motion.button className="button" whileHover={{ scale: 1.1 }}>
              <Link className="off-link-dec white" to="users/register">
                {categories_accounts.register_title}
              </Link>
            </motion.button>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
};
