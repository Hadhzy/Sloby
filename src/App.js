import React from "react"
import "./styles/main.scss"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Help from "./Components/SubComponents/Help/Help"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SettingsDataProvider } from "./Components/Context/Forum"

function App() {
  return (   
    <BrowserRouter>
    <SettingsDataProvider>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path="/categories/:category/:subcategory"/>
          <Route path="categories/Help/*" element={<Help/>}/>
        </Routes>

        <Footer />
      </div>
        </SettingsDataProvider>
    </BrowserRouter>
  )
}
export default App
