import React from 'react';
import headStyle from "./Header.module.css";

const Head_func= () =>{
    return(
        <div className={headStyle.head}>
            <img src="https://static.vecteezy.com/system/resources/previews/000/580/612/non_2x/star-logo-template-vector-icon-illustration.jpg" width="100px"/>
             <div>
                <ul className={headStyle.menu}>
                    <a href="" className="active"><li>Profile</li></a>
                    <a href=""><li>News</li></a>
                    <a href=""><li>Sms</li></a>
                    <a href=""><li>Music</li></a>
                    <a href=""><li>Settings</li></a>
                </ul>
             </div>   
        </div>
    );
}

export default Head_func;