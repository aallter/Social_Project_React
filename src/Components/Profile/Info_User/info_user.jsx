import React from 'react';
import infoUser from './info_user.module.css';
import FullInfoUser from '../Full_Info/fullinfo';

const ProfUser =(props)=>{
        return(
            <div className="flDis">
                <img src="https://aif-s3.aif.ru/images/011/857/f5ef0f2e2e55334bec4503294e0b6ae1.jpg" width="250px"/>
                <div className={infoUser.fio}>
                    <h3>{props.name}</h3>
                    <h3>{props.surname}</h3>
                    <p>online</p>
                </div>
                <FullInfoUser city="New-Yourk" learn="school n.32" status="free" daybirsd="11.05.1999"/>
            </div>
        );
}

export default ProfUser;