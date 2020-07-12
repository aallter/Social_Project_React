import React from 'react';
import postStyle from './post.module.css';

const Post = (props) =>{


    let new_arr_posts = props.arr_posts.map(post_new => <BodyPost id={post_new.id} img={post_new.img} name={post_new.name} surname={post_new.surname} textCont={post_new.textCont}  like={post_new.like} comment={post_new.comment} />);

    return(
        <div>
            {new_arr_posts}
        </div>
    );
}

const BodyPost = (props) => {
    return(
        <div className={ postStyle.post}>
            <div >
                <img src={props.img} width="100px"/>
                <span>{props.name}</span>
                <span>{props.surname}</span>
            </div>
            <div>
                <p> {props.textCont} </p>
            </div>
            <div>
                <span>like {props.like}</span>
                <span> comment {props.comment}</span>
            </div>
        </div>
    );
}

export default Post;