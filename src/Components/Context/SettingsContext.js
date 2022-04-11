import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const SettingsDataContext = createContext(true)

export const SettingsDataProvider = (props) => {
    const [title, set_title] = useState([])


    const fetch_title = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/settings-menu`
        }).then(res => set_title(res.data))
    }
    useEffect(() =>{
        fetch_title()
    }, [])

    return <SettingsDataContext.Provider value={{
        setting_title: title
    }}>
        {props.children}
    </SettingsDataContext.Provider>
}