import React from "react";

type UsersType = {id: number, title: string, optional_waiting: boolean, forgot_password:  string, small_tag: string, button_title: string}

export type IContentContext = {
    site_info?: Array<Object>,
    categories_accounts?: Array<Object>,
    settings_menu_titles?: Array<Object>,
    users_login?: UsersType,
    users_create_account?: UsersType ,
    forum_and_security?: Array<Object>,
    help_content?: Array<Object>,
    footer?: Array<Object>,
    social_content?: any,
    settings?: Array<Object>,
}

export type IThemeContext = {
    theme?: string,
    switchTheme?: Function
}