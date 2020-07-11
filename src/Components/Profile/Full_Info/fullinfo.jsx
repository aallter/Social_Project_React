import React from 'react';
import fullinfoUser from './fullinfo.module.css';

const FullInfoUser =(props)=>{
        return(
            <div>
                <div className={fullinfoUser.info}>
                    <h4>{props.city}</h4>
                    <h4>{props.learn}</h4>
                    <h4>{props.status}</h4>
                    <h4>{props.daybirsd}</h4>
                </div>
                
            </div>
        );
}

export default FullInfoUser;