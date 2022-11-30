import React from 'react'

type UsersType = {
  id: number
  title: string
  optional_waiting: boolean
  forgot_password: string
  small_tag: string
  button_title: string
}
type UserLoginType = {
  id: number
  title: string
  optional_waiting: string
  forgot_password: boolean
  button_title: string
  small_tag: string
}
type SiteInfoType = {
  title: string
  sub_title: string
  button_title_doc: string
  button_title_get_started: string
  img: string
}
type CateGoriesAccountsType = {
  id: number
  login_title: string
  register_title: string
  __comment: string
}
type SettingMenuTitlesType = {
  id: number
  item_1: string
  item_2: string
  item_3: string
  __comment: string
}
type LoginPageType = {
  id: number
  title: string
  forgot_password: string
  small_tag: string
}
export type IAdminPage = { forms: [IAdminPageForm] }
export type IAdminPageForm = {
  id: number
  placeholder: string
  name: string
  type: 'text' | 'password'
  value: string
}

export type IContentContext = {
  site_info?: SiteInfoType | any
  categories_accounts?: CateGoriesAccountsType | any
  settings_menu_titles?: SettingMenuTitlesType | any
  users_login?: LoginPageType | any
  users_create_account?: UserLoginType | any
  forum_and_security?: Array<Object>
  help_content?: Array<Object>
  footer?: any
  social_content?: any
  settings?: Array<Object> | any
  admin_page?: IAdminPage | any
  sloby_dashboard?: Object | any
  sloby_tools?: Object | any
}

export type IThemeContext = {
  theme?: string
  switchTheme?: Function
}

export type IFooterItem = {
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
