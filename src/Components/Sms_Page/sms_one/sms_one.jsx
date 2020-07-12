import React from 'react';
import oneSms from './sms_one.module.css';

const Do_One_Sms = (props) => {
    
    return(
    <div>
        <div className={oneSms.blockOneSms}>
            <img src={props.img} width="50px"/>
             <p>{props.name}</p>
            <p>{props.message}</p>
        </div>
    </div>
    );
}

const  OneSms= (props) =>{

    let new_arr_sms_one = props.arr_sms_one.map(sms_one =>  <Do_One_Sms img={sms_one.img} name={sms_one.name} message={sms_one.message}/> );
    return(
        <div>
       {new_arr_sms_one} 
       </div>
    );
}

export default OneSms;