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
    let arr_sms_one = [
        {img:"https://thumb.tildacdn.com/tild6464-3562-4833-b037-613464353461/-/resize/824x/-/format/webp/photo.jpg", name:"Sergio",message:"Hi Man / How are you??"},
        {img:"https://i.pinimg.com/736x/e1/3a/ee/e13aee34c92656363c3b46c31cf6bb78.jpg", name:"Pavel",message:"Norm, and you?"},
        {img:"https://thumb.tildacdn.com/tild6464-3562-4833-b037-613464353461/-/resize/824x/-/format/webp/photo.jpg", name:"Sergio",message:"Good too??"},
        {img:"https://i.pinimg.com/736x/e1/3a/ee/e13aee34c92656363c3b46c31cf6bb78.jpg", name:"Pavel",message:"Ok"}
    ];

    let new_arr_sms_one = arr_sms_one.map(sms_one =>  <Do_One_Sms img={sms_one.img} name={sms_one.name} message={sms_one.message}/> );
    return(
        <div>
       {new_arr_sms_one} 
       </div>
    );
}

export default OneSms;