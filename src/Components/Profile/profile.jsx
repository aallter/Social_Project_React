import React from 'react';
import ProfUser from './Info_User/info_user';
import Post from '../News_Page/Post/post';
import profStyle from './profile.module.css';

const ProfileFull = (props) =>{
    let refAddPost=React.createRef();
    let addPost = () =>{
        let getElem = refAddPost.current.value;
        props.NewPost(getElem);
        getElem=refAddPost.current.value ="";
    }
    return(
        <div>
            <ProfUser name="Kate" surname="Kokitre"/>
            <div className={profStyle.sendPost}>
                <textarea ref={refAddPost} ></textarea>
                <input onClick={addPost} type="submit" value="send post"/>
            </div>
            <Post arr_posts={props.arr_posts}/>
        </div>
    );
}

export default ProfileFull;