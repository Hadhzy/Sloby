import { Link, useLocation } from "react-router-dom";
import PreventUrls from "./libraries/globalHelper/preventUrls";
import { Navigation } from "./Navigation";
import { Sidebar } from "./Sidebar";

export const Header = () => {
  // const { theme } = useContext(ThemeContext);

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
        <Navigation />
        <div className="base-sidebar-icon">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
