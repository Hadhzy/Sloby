import React, { createContext, FC, useEffect, useState } from 'react'
import axios from 'axios'
import { ContextChildren } from '../../Editor/utils/types'
import { IContentContext } from '../types'

export const ContentContext = createContext<IContentContext>(undefined!)

export const ContentContextProvider = ({ children }: ContextChildren) => {
  const [header_categories, set_header_categories] = useState()
  const [site_info, set_site_info] = useState()
  const [users_login, set_users_login] = useState()
  const [users_create_account, set_users_create_account] = useState()
  const [footer, set_footer] = useState()
  const [admin_page, set_admin_page] = useState()
  const [sloby_dashboard, set_sloby_dashboard] = useState()
  const [sloby_tools, set_sloby_tools] = useState()

  const { NESTJS_SERVER_URL } = process.env
  useEffect(() => {
    axios
      .get(`http://localhost:4001/api/site-info`)
      .then((res) => set_site_info(res.data))
    axios
      .get(`http://localhost:4001/api/users-login/`)
      .then((res) => set_users_login(res.data))
    axios
      .get(`http://localhost:4001/api/users-create-account/`)
      .then((res) => set_users_create_account(res.data))
    axios
      .get(`http://localhost:4001/api/footer/`)
      .then((res) => set_footer(res.data))
    axios
      .get(`http://localhost:4001/api/admin-page`)
      .then((res) => set_admin_page(res.data))
    axios
      .get(`http://localhost:4001/api/sloby-tools`)
      .then((res) => set_sloby_tools(res.data))
    axios
      .get(`http://localhost:4001/api/sloby-menu-bar`)
      .then((res) => set_sloby_dashboard(res.data))
    axios
      .get(`http://localhost:4001/api/header-categories`)
      .then((res) => set_header_categories(res.data))
  }, [])

  return (
    <ContentContext.Provider
      value={{
        header_categories,
        site_info,
        users_login,
        users_create_account,
        footer,
        admin_page,
        sloby_dashboard,
        sloby_tools,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
