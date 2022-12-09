import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPageDashboard from "./Editor/Components/Admin/AdminDashboard";
import AdminPage from "./Editor/Components/Admin/AdminPageValidation";
import Dashboard from "./Editor/Components/Dashboard/Dashboard";
import Progress from "./Editor/Components/Dashboard/Progress";
import Projects from "./Editor/Components/Dashboard/Projects";
import Settings from "./Editor/Components/Dashboard/Settings";
import Updates from "./Editor/Components/Dashboard/Updates";
import AboutUs from "./Others/Components/AboutUs/AboutUs";
import Docs from "./Others/Components/Docs/Docs";
import OurProject from "./Others/Components/OurProject/OurProject";
import Profile from "./Others/Components/User";
import LoginPage from "./Others/Components/Users/LoginPage";
import RegisterPage from "./Others/Components/Users/RegisterPage";
import RegistrationEmailSentPage from "./Others/Components/Users/RegistrationEmailSentPage";
import { ContentContextProvider } from "./Others/Context/ContentContext";
import { ThemeContextProvider } from "./Others/Context/ThemeContext";
import { UserContextProvider } from "./Others/Context/UserContext";
import Error from "./Others/globalPages/Error";
import Home from "./Others/Home";
import "./Others/styles/main.scss";
import SlobyEditor from "./sloby-editor-framework/implementations/SlobyEditor/Editor";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ContentContextProvider>
          <ThemeContextProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/categories/:category/:subcategory" />
                <Route path="categories/about-us/*" element={<AboutUs />} />
                <Route path="categories/docs/*" element={<Docs />} />
                <Route path="categories/our-project/*" element={<OurProject />} />
                <Route path="*" element={<Error />} />
                <Route path="users/register" element={<RegisterPage />} />
                <Route path="users/login" element={<LoginPage />} />
                <Route path="users/verified-registration-email" element={<RegistrationEmailSentPage />} />
                <Route path="editor/workspace/:id" element={<SlobyEditor />} />
                <Route path="editor/dashboard" element={<Dashboard />}>
                  <Route index element={<Projects />} />
                  <Route path="profile-settings" element={<Settings />} />
                  <Route path="updates" element={<Updates />} />
                  <Route path="progress" element={<Progress />} />
                </Route>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/dashboard" element={<AdminPageDashboard />} />
              </Routes>
            </div>
          </ThemeContextProvider>
        </ContentContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}
export default App;
