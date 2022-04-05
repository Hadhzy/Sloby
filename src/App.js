import React from "react"
import "./styles/main.scss"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Forum from "./Components/SubComponents/Help/Forum/Forum"
import Register from "./Components/SubComponents/Register"
import User from "./Components/SubComponents/User"
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
          <Route path="categories/help" element={<Forum />}/>
          <Route path='user' element={<User />}>
            <Route path='register' element={<Register />} />
            <Route path='login' />
          </Route>
        </Routes>

        <Footer />
      </div>
        </SettingsDataProvider>
    </BrowserRouter>
  )
}
export default App
