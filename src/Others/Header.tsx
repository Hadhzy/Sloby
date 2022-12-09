import { Link, useLocation } from "react-router-dom";
import PreventUrls from "./libraries/globalHelper/preventUrls";

export const Header = () => {
  // const { theme } = useContext(ThemeContext);
  // const { categories_accounts } = useContext(ContentContext);
  // const { logged_in, log_out_user } = useContext(UserContext);

  const currentUrl = useLocation();

  const headerClassName = new PreventUrls({
    className: "theme-case-home",
    urlToPreventFrom: ["/editor/dashboard", "/admin"],
    currentUrl: currentUrl.pathname,
  });

  return (
    <div className={headerClassName.preventURL()}>
      <div className="header-container">
        <Link to="/" className="off-link-dec home icon">
          TomikaSlobyka
        </Link>
        {/* <div className="navigation">
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
        </div> */}

        {/* <div className="base-sidebar-icon"><Sidebar /></div> */}
      </div>
    </div>
  );
};
