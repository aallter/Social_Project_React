import React from 'react';
//import newsPosts from "./News.module.css";
import Post from './Post/post';

const NewsPosts = () => {
    return(
        <div>
            <h2>News Posts</h2>
           <Post/>
           <Post/>
           <Post/>
        </div>
    );
}

export default NewsPosts;