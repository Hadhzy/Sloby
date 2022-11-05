import React, {useContext} from "react"
import "./Others/styles/main.scss"
import Header from "./Others/Header"
import Footer from "./Others/Footer"
import Content from "./Others/Content"
import Settings from "./Editor/Components/Dashboard/Settings"
import AboutUs from "./Others/Components/AboutUs/AboutUs"
import Docs from "./Others/Components/Docs/Docs"
import OurProject from "./Others/Components/OurProject/OurProject"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Others/Components/User"
import RegisterPage from "./Others/Components/Users/RegisterPage"
import {UserContextProvider} from "./Others/Context/UserContext"
import LoginPage from "./Others/Components/Users/LoginPage"
import RegistrationEmailSentPage from "./Others/Components/Users/RegistrationEmailSentPage";
import { ThemeContextProvider } from "./Others/Context/ThemeContext"
import AdminPage from "./Editor/Components/Admin/AdminPageValidation"
import Error from "./Others/globalPages/Error"
import { ContentContextProvider } from "./Others/Context/ContentContext"
import Dashboard from "./Editor/Components/Dashboard/Dashboard"
import AdminPageDashboard from "./Editor/Components/Admin/AdminDashboard"
import Updates from "./Editor/Components/Dashboard/Updates"
import Progress from "./Editor/Components/Dashboard/Progress"
import Projects from "./Editor/Components/Dashboard/Projects"
import Editor from "./Editor/SlobyEditor/Editor"
function App() {
  return (
  <BrowserRouter>
    <UserContextProvider>
    <ContentContextProvider>
      <ThemeContextProvider>
          <div className='App'>
                <Routes>
                  <Route path="/" element={<Header/>} />
                  <Route path='/user/profile' element={<Profile />} />
                  <Route path='/categories/:category/:subcategory' />
                  <Route path='categories/about-us/*' element={<AboutUs />} />
                  <Route path='categories/docs/*' element={<Docs />} />
                  <Route path='categories/our-project/*' element={<OurProject />} />
                  <Route path='*' element={<Error />} />
                  <Route path='users/register' element={<RegisterPage />} />
                  <Route path='users/login' element={<LoginPage />} />
                  <Route path='users/verified-registration-email' element={<RegistrationEmailSentPage/>} />
                  <Route path="editor/workspace/:id" element={<Editor />} />
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
  )
}
export default App