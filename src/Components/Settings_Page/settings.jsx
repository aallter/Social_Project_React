import React from 'react';
import settingsStyle from "./settings.module.css";
import SettingsQuestion from './settingsQuestion';


const Settings= () =>{
    return(
        <div>
           <SettingsQuestion/>
           <SettingsQuestion/>
           <SettingsQuestion/>
           <SettingsQuestion/>
           <SettingsQuestion/>
        </div>
    );
}

export default Settings;