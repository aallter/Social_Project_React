import React from 'react';
//import newsPosts from "./News.module.css";
import Post from './Post/post';

const NewsPosts = (props) => {
  
    return(
        <div>
            <h2>News Posts</h2>
           <Post arr_posts={props.arr_posts}/>
        </div>
    );
}

export default NewsPosts;