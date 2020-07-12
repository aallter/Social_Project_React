import React from 'react';
import dialogFriend from './dialogFriend.module.css';
import { NavLink } from 'react-router-dom';



const DialogsFriend = (props) => {
    

    let new_Arr_dial_fr = props.arr_dialog_friend.map(df => <InfoFriendDialog id={df.id} name={df.name} img={df.img}/>); 
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