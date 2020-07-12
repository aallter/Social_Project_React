import React from 'react';
import dialogFriend from './dialogFriend.module.css';
import { NavLink } from 'react-router-dom';



const DialogsFriend = () => {
    let arr_dialog_friend = [
        {id:"1", name:"Sergio" ,img:"https://www.weclever.ru/img/actions/96495/1-650x350.jpg"},
        {id:"2", name:"Pavel" , img:"https://bigpicture.ru/wp-content/uploads/2017/01/199.jpg"},
        {id:"3", name:"Jhon" , img:"https://static.ngs.ru/news/preview/fe57768c1fb0bfecbc16ef286a81709400b2839b_599_399_c.jpg"}
    ];

    let new_Arr_dial_fr = arr_dialog_friend.map(df => <InfoFriendDialog id={df.id} name={df.name} img={df.img}/>); 
    return(
        <div className="flDis">
            {new_Arr_dial_fr}
        </div>
    );
}

const InfoFriendDialog =(props) =>{
    return(
        <div>
            <NavLink to={"/dialogs/"+props.id}>
                <div className={dialogFriend.blockFriendDialog}>
                    <img src={props.img} width="100px"/>
                    <p>{props.name}</p>
                </div>
            </NavLink>
        </div>
    );
};
export default DialogsFriend;