import React from 'react';
import ProfUser from './Info_User/info_user';
import Post from '../News_Page/Post/post';

const ProfileFull = (props) =>{
    return(
        <div>
            <ProfUser name="Kate" surname="Kokitre"/>
            <Post arr_posts={props.arr_posts}/>
        </div>
    );
}

export default ProfileFull;