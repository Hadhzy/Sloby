import React from "react";

type UsersType = {id: number, title: string, optional_waiting: boolean, forgot_password:  string, small_tag: string, button_title: string}
type UserLoginType = { id: number, title: string, optional_waiting: string, forgot_password: boolean, button_title: string, small_tag: string}
type SiteInfoType = { title: string, sub_title: string, button_title_doc: string, button_title_get_started: string, img: string } 
type CateGoriesAccountsType = {id: number, login_title: string, register_title: string, __comment: string}

export type IContentContext = {
    site_info?: SiteInfoType | any,
    categories_accounts?: CateGoriesAccountsType | any,
    settings_menu_titles?: Array<Object>,
    users_login?: UsersType[],
    users_create_account?: UserLoginType[],
    forum_and_security?: Array<Object>,
    help_content?: Array<Object>,
    footer?: any,
    social_content?: any,
    settings?: Array<Object>,
}

export type IThemeContext = {
    theme?: string,
    switchTheme?: Function
}

export type IFooterItem = {
    id: number, 
    title: string, 
    placeholder: string,
    items: [string],
    optional: [string], 
    input: boolean, 
    icons: [],
    copyright: string | null, 
    news_letter_description: string, 
    button: "" | string,
}


export type IPreventUrl = { className: string, urlToPreventFrom: Array<string>, currentUrl: string }