import React from "react";


export type IContentContext = {
    site_info?: Array<Object>,
    categories_accounts?: Array<Object>,
    settings_menu_titles?: Array<Object>,
    users_login?: Array<Object>,
    users_create_account?: Array<Object>,
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