import React from 'react'

type UserLoginType = {
  id: number
  title: string
  optional_waiting: string
  forgot_password: boolean
  button_title: string
  small_tag: string
}
type TSiteInfo = {
  id: string
  title: string
  sub_title: string
  button_title_doc: string
  button_title_get_started: string
  img: string
}
type TCategoriesAccounts = {
  id: number
  login_title: string
  register_title: string
  __comment: string
}

type LoginPageType = {
  id: number
  title: string
  forgot_password: string
  small_tag: string
}
export type TAdminPage = { forms: [TAdminPageForm] }
export type TAdminPageForm = {
  id: number
  placeholder: string
  name: string
  type: 'text' | 'password'
  value: string
}

type THeaderCategories = {
  id: number
  url: string
  title: string
}

export type IContentContext = {
  header_categories?: THeaderCategories[]
  site_info?: TSiteInfo[]
  categories_accounts?: TCategoriesAccounts[]
  users_login?: LoginPageType
  users_create_account?: UserLoginType
  footer?: TFooterItem[]
  admin_page?: TAdminPage
  sloby_dashboard?: any | any
  sloby_tools?: any | any
}

export type IThemeContext = {
  theme?: string
  switchTheme?(): any
}

export type TFooterItem = {
  id: number
  title: string
  placeholder: string
  items: [string]
  optional: [string]
  input: boolean
  icons: []
  copyright: string | null
  news_letter_description: string
  button: '' | string
}

export type IPreventUrl = {
  className: string
  urlToPreventFrom: Array<string>
  currentUrl: string
}
