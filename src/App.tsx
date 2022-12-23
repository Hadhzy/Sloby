import React, { useContext } from 'react'
import './Others/styles/main.scss'
import Settings from './pages/Dashboard/Settings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/Admin/AdminPageValidation'
import Error from './pages/global/Error'
import {
  ContentContext,
  ContentContextProvider,
} from './utils/context/ContentContext'
import Dashboard from './pages/Dashboard/Dashboard'
import AdminPageDashboard from './pages/Admin/AdminDashboard'
import Updates from './pages/Dashboard/Updates'
import Progress from './pages/Dashboard/Progress'
import Projects from './pages/Dashboard/Projects'
import SlobyEditor from './sloby-editor-framework/implementations/SlobyEditor/Editor'
import LandingPage from './pages/LandingPage/LandingPage'
import { StarAnimationContextProvider } from './utils/context/StarAnimation'
import RegisterPage from './pages/Users/RegisterPage'
import Loading from './pages/global/Loading'
import LoginPage from './pages/Users/LoginPage'
function App() {
  return (
    <BrowserRouter>
      <ContentContextProvider>
        <StarAnimationContextProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<Error />} />
              <Route path="editor/workspace/:id" element={<SlobyEditor />} />
              <Route path="editor/dashboard" element={<Dashboard />}>
                <Route index element={<Projects />} />
                <Route path="profile-settings" element={<Settings />} />
                <Route path="updates" element={<Updates />} />
                <Route path="progress" element={<Progress />} />
              </Route>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/dashboard" element={<AdminPageDashboard />} />
              <Route path="auth/signup" element={<RegisterPage />} />
              <Route path="auth/login" element={<LoginPage />} />
              <Route path="loading" element={<Loading />} />
            </Routes>
          </div>
        </StarAnimationContextProvider>
      </ContentContextProvider>
    </BrowserRouter>
  )
}
export default App
