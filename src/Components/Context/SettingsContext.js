import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const SettingsDataContext = createContext(true)

export const SettingsDataProvider = (props) => {
    const [settings, set_settings] = useState([])


    const fetch_settings = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/api/settings-menu/`
        }).then(res => set_settings(res.data))
    }
    useEffect(() =>{
        fetch_settings()
    }, [])

    return <SettingsDataContext.Provider value={{
        settings: settings
    }}>
        {props.children}
    </SettingsDataContext.Provider>
}