import React from 'react';
import headStyle from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Head_func= () =>{
    return(
        <div className={headStyle.head}>
            <img src="https://static.vecteezy.com/system/resources/previews/000/580/612/non_2x/star-logo-template-vector-icon-illustration.jpg" width="100px"/>
             <div>
                <ul className={headStyle.menu}>
                    <li> 
                        <NavLink to="/profile"  activeClassName={headStyle.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" activeClassName={headStyle.active}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={headStyle.active}>Sms</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/music" activeClassName={headStyle.active}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" activeClassName={headStyle.active}>Settings</NavLink>
                    </li>
                </ul>
             </div>   
        </div>
    );
}

export default Head_func;