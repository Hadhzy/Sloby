import React from "react"
import "./styles/main.scss"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Help from "./Components/SubComponents/Help/Help"
import AboutUs from "./Components/SubComponents/AboutUs/AboutUs"
import Docs from "./Components/SubComponents/Docs/Docs"
import OurProject from "./Components/SubComponents/OurProject/OurProject"
import Settings from "./Components/SubComponents/Settings/Settings"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./Components/SubComponents/User"
import {SettingsDataContext, SettingsDataProvider} from "./Components/Context/SettingsContext";

function App() {
  return (
    <BrowserRouter>
      <SettingsDataProvider>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/user' element={<User />} />
            <Route path='/categories/:category/:subcategory' />

            <Route path='categories/help/*' element={<Help />} />
            <Route path='categories/about-us/*' element={<AboutUs />} />
            <Route path='categories/docs/*' element={<Docs/>} />
            <Route path='categories/our-project/*' element={<OurProject />} />
            <Route path='settings' element={<Settings/>} />
          </Routes>

          <Footer />
        </div>
      </SettingsDataProvider>

    </BrowserRouter>
  )
}
export default App
