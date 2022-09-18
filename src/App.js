
import React, {useContext} from "react"
import "./styles/main.scss"
import Header from "./Components/NotEditorRelated/Header"
import Footer from "./Components/NotEditorRelated/Footer"
import Content from "./Components/NotEditorRelated/Content"
import Help from "./Components/NotEditorRelated/SubComponents/Help/Help"
import Settings from "./Components/NotEditorRelated/SubComponents/Settings/Settings"
import AboutUs from "./Components/NotEditorRelated/SubComponents/AboutUs/AboutUs"
import Docs from "./Components/NotEditorRelated/SubComponents/Docs/Docs"
import OurProject from "./Components/NotEditorRelated/SubComponents/OurProject/OurProject"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Components/NotEditorRelated/SubComponents/User"
import RegisterPage from "./Components/NotEditorRelated/Users/RegisterPage"
import {UserContextProvider} from "./Components/NotEditorRelated/Context/UserContext"
import LoginPage from "./Components/NotEditorRelated/Users/LoginPage"

import RegistrationEmailSentPage from "./Components/NotEditorRelated/Users/RegistrationEmailSentPage";
import ProjectsCotnextProvider from "./Components/NotEditorRelated/Context/ProjectsContext"
import { ThemeContextProvider } from "./Components/NotEditorRelated/Context/ThemeContext"
import {ProjectsHandlerContextProvider} from "./Components/NotEditorRelated/Context/ProjectsHandlerContext"
import ProjectHandler from "./Components/Editor/ProjectsSection/ProjectHandler"
import AdminPage from "./Components/Admin/AdminPage"
import Error from "./globalPages/Error"
import SideMenuBar from "./Components/Editor/ProjectsSection/SideMenuBar"
import {ContentContextProvider} from "./Components/NotEditorRelated/Context/ContentContext"

function App() {
  return (
  <BrowserRouter>
    <UserContextProvider>
    <ContentContextProvider>
      <ThemeContextProvider>
          <ProjectsCotnextProvider>
            <ProjectsHandlerContextProvider>
               <div className='App'>
                
                <Routes>
                  <Route path="/" element={<Header/>} />
                  <Route path='/user/profile' element={<Profile />} />
                  <Route path='/categories/:category/:subcategory' />

                  <Route path='categories/help/*' element={<Help />} />
                  <Route path='categories/about-us/*' element={<AboutUs />} />
                  <Route path='categories/docs/*' element={<Docs />} />
                  <Route path='categories/our-project/*' element={<OurProject />} />
                  <Route path='settings' element={<Settings />} />
                  <Route path='*' element={<Error />} />
                  <Route path='users/register' element={<RegisterPage />} />
                  <Route path='users/login' element={<LoginPage />} />
                  <Route path='users/verified-registration-email' element={<RegistrationEmailSentPage/>} />
                  <Route path="/editor/dashboard">
                    <Route index element={<ProjectHandler />} />
                  </Route>
                  <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
          </div>
          </ProjectsHandlerContextProvider>
          </ProjectsCotnextProvider>
      </ThemeContextProvider>
      </ContentContextProvider>
    </UserContextProvider>
  </BrowserRouter>
  )
}
export default App