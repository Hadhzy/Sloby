import React, {useContext} from "react"
import "./Components/Others/styles/main.scss"
import Header from "./Components/Others/Header"
import Footer from "./Components/Others/Footer"
import Content from "./Components/Others/Content"
import Settings from "./Components/Others/Components/Settings/Settings"
import AboutUs from "./Components/Others/Components/AboutUs/AboutUs"
import Docs from "./Components/Others/Components/Docs/Docs"
import OurProject from "./Components/Others/Components/OurProject/OurProject"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Components/Others/Components/User"
import RegisterPage from "./Components/Others/Components/Users/RegisterPage"
import {UserContextProvider} from "./Components/Others/Context/UserContext"
import LoginPage from "./Components/Others/Components/Users/LoginPage"
import RegistrationEmailSentPage from "./Components/Others/Components/Users/RegistrationEmailSentPage";
import { ThemeContextProvider } from "./Components/Others/Context/ThemeContext"
import AdminPage from "./Editor/Components/Admin/AdminPageValidation"
import Error from "./Components/Others/globalPages/Error"
import { ContentContextProvider } from "./Components/Others/Context/ContentContext"
import Dashboard from "./Editor/Components/Dashboard/Dashboard"
import AdminPageDashboard from "./Editor/Components/Admin/AdminDashboard"

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
                  <Route path='settings' element={<Settings />} />
                  <Route path='*' element={<Error />} />
                  <Route path='users/register' element={<RegisterPage />} />
                  <Route path='users/login' element={<LoginPage />} />
                  <Route path='users/verified-registration-email' element={<RegistrationEmailSentPage/>} />
                  <Route path="/editor/dashboard">
                    <Route index element={<Dashboard />} />
                  </Route>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/dashboard" element={ <AdminPageDashboard />} /> 
                </Routes>
          </div>
      </ThemeContextProvider>
      </ContentContextProvider>
    </UserContextProvider>
  </BrowserRouter>
  )
}
export default App