
import React, {useContext} from "react"
import "./styles/main.scss"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Help from "./Components/SubComponents/Help/Help"
import Settings from "./Components/SubComponents/Settings/Settings"
import AboutUs from "./Components/SubComponents/AboutUs/AboutUs"
import Docs from "./Components/SubComponents/Docs/Docs"
import OurProject from "./Components/SubComponents/OurProject/OurProject"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Components/SubComponents/User"
import RegisterPage from "./Components/Users/RegisterPage"
import {UserContextProvider} from "./Components/Context/UserContext"
import LoginPage from "./Components/Users/LoginPage"

import {ContentContextProvider} from "./Components/Context/ContentContext"
import RegistrationEmailSentPage from "./Components/Users/RegistrationEmailSentPage";

import ProjectsCotnextProvider from "./Components/Context/ProjectsContext"
import { ThemeContextProvider } from "./Components/Context/ThemeContext"
import {ProjectsHandlerContextProvider} from "./Components/Context/ProjectsHandlerContext"
import ProjectHandler from "./Components/Editor/ProjectHandler"
import AdminPage from "./Components/Admin/AdminPage"

function App() {
  return (
  <BrowserRouter>
    <UserContextProvider>
    <ContentContextProvider>
      <ThemeContextProvider>
          <ProjectsCotnextProvider>
            <ProjectsHandlerContextProvider>
               <div className='App'>
                <Header/>
                <Routes>
                  <Route path='/' element={<Content />} />
                  <Route path='/user/profile' element={<Profile />} />
                  <Route path='/categories/:category/:subcategory' />

                  <Route path='categories/help/*' element={<Help />} />
                  <Route path='categories/about-us/*' element={<AboutUs />} />
                  <Route path='categories/docs/*' element={<Docs />} />
                  <Route path='categories/our-project/*' element={<OurProject />} />
                  <Route path='settings' element={<Settings />} />

                  <Route path='users/register' element={<RegisterPage />} />
                  <Route path='users/login' element={<LoginPage />} />
                  <Route path='users/verified-registration-email' element={<RegistrationEmailSentPage/>} />
                  <Route path="/editor/dashboard" element={<ProjectHandler />} />
                  <Route path="/admin" element={<AdminPage/>}/>
                </Routes>

                <Footer />
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