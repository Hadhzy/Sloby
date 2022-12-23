import { Outlet, Navigate } from 'react-router-dom'

import React from 'react'

export default function ProtectedRoutes() {
  const auth = { token: false }
  return auth.token ? <Outlet /> : <Navigate to="/auth/login" />
}
