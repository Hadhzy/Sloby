import React, { useContext } from 'react'
import './Others/styles/main.scss'
import Settings from './Editor/Components/Dashboard/Settings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './Editor/Components/Admin/AdminPageValidation'
import Error from './Others/globalPages/Error'
import {
  ContentContext,
  ContentContextProvider,
} from './Others/Context/ContentContext'
import Dashboard from './Editor/Components/Dashboard/Dashboard'
import AdminPageDashboard from './Editor/Components/Admin/AdminDashboard'
import Updates from './Editor/Components/Dashboard/Updates'
import Progress from './Editor/Components/Dashboard/Progress'
import Projects from './Editor/Components/Dashboard/Projects'
import SlobyEditor from './sloby-editor-framework/implementations/SlobyEditor/Editor'
import LandingPage from './Others/Components/LandingPage/LandingPage'
import { StarAnimationContextProvider } from './Others/Context/StarAnimation'
import RegisterPage from './Others/Components/Users/RegisterPage'
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
            </Routes>
          </div>
        </StarAnimationContextProvider>
      </ContentContextProvider>
    </BrowserRouter>
  )
}
export default App
