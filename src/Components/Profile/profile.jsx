import React from 'react';
import ProfUser from './Info_User/info_user';
import Post from '../News_Page/Post/post';

const ProfileFull = () =>{
    return(
        <div>
            <ProfUser name="Kate" surname="Kokitre"/>
            <Post/>
        </div>
    );
}

export default ProfileFull;