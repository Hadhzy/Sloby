import React from "react"
import "./styles/main.scss"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Settings from "./Components/SubComponents/Settings"
import Register from "./Components/SubComponents/Register"
import User from "./Components/SubComponents/User"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='settings' element={<Settings />} />
          <Route path='user' element={<User />}>
            <Route path='register' element={<Register />} />
            <Route path='login' />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App
