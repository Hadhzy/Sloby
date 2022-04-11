import React, {useContext} from 'react';
import {SettingsDataContext} from "../../Context/SettingsContext";

function Settings(props) {
    const {setting_title} = useContext(SettingsDataContext)
    return (
        <div className="settings-container">
            <div className="title">
                Settings
            </div>
            <div className="underline"></div>
            <div className="options">
                <div className="settings-item">{setting_title.map(setting => <p>{setting.title}</p>)}</div>
            </div>
        </div>
    );
}

export default Settings;