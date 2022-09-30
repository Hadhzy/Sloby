import React, {createContext, FC, useEffect, useState} from "react";
import axios from "axios";
import {ContextChildren} from "../../../Editor/types"
import { IContentContext } from "../types";

export const ContentContext = createContext<IContentContext>(undefined!)


export const ContentContextProvider = ({ children }: ContextChildren) => {
    const [site_info, set_site_info] = useState({})
    const [categories_accounts, set_categories_accounts] = useState({})
    const [settings_menu_titles, set_settings_menu_titles] = useState([])
    const [users_login, set_users_login] = useState([])
    const [users_create_account, set_users_create_account] = useState([])
    const [forum_and_security, set_forum_and_security] = useState([])
    const [help_content, set_help_content] = useState([])
    const [footer, set_footer] = useState([])
    const [social_content, set_social_content] = useState([])
    const [settings, set_settings] = useState([])


    const fetch_site_info = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}site-info/`
        }).then(res => set_site_info(res.data))
    }

    const fetch_categories_accounts = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}categories-accounts/`
        }).then(res => set_categories_accounts(res.data))
    }

    const fetch_settings_menu_titles = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}settings-menu-titles/`
        }).then(res => set_settings_menu_titles(res.data))
    }

    const fetch_users_login = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}users-login/`
        }).then(res => set_users_login(res.data))
    }

    const fetch_users_create_account = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}users-create-account/`
        }).then(res => set_users_create_account(res.data))
    }

    const fetch_help_forum_security = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}sub-components-help-forum-forum-and-security/`
        }).then(res => set_forum_and_security(res.data))
    }

    const fetch_help_content = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}sub-components-help-sub-components-help-content/`
        }).then(res => set_help_content(res.data))
    }

    const fetch_footer = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}footer/`,
        }).then(res => set_footer(res.data))
    }

    const fetch_social_content = () =>{
        axios({
            method: "get", 
            url: `${process.env.REACT_APP_API_URL}sub-components-docs-about-us-goal-throw-a-message-community-our-project-content/`
        }).then(res => set_social_content(res.data))
    }

    const fetch_settings = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}settings-menu/`
        }).then(res => set_settings(res.data))
    }
    

    
    useEffect(() => {
        fetch_site_info()
        fetch_categories_accounts()
        fetch_settings_menu_titles()
        fetch_users_login()
        fetch_users_create_account()
        fetch_help_forum_security()
        fetch_help_content()
        fetch_footer()
        fetch_social_content()
        fetch_settings()
    }, [])

   


    return (
        <ContentContext.Provider value={{
            site_info,
            categories_accounts,
            settings_menu_titles,
            users_login,
            users_create_account,
            forum_and_security,
            help_content,
            footer,
            social_content,
            settings
        }}>
            {children}
        </ContentContext.Provider>
    )       
}
