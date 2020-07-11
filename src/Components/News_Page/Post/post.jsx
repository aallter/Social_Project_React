import React from 'react';
import postStyle from './post.module.css';

const Post = (props) =>{
    return(
        <div className={ postStyle.post}>
            <div >
                <img src="https://aif-s3.aif.ru/images/011/857/f5ef0f2e2e55334bec4503294e0b6ae1.jpg" width="100px"/>
                <span>Name</span>
                <span>SurName</span>
            </div>
            <div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra metus leo, eget interdum leo cursus imperdiet. Aenean pharetra, ante non congue tristique, neque mauris cursus nisl, in euismod elit mauris non mi. In quis ullamcorper mi. Nam sit amet velit faucibus, eleifend orci rutrum, dapibus mauris. Maecenas auctor fringilla justo, eget dignissim mi porttitor eget. Praesent tempus vestibulum metus a tincidunt. Donec nec ex a ipsum condimentum porta. Suspendisse sit amet libero et ipsum porttitor congue vitae non libero. Nulla id volutpat urna.

                Aenean turpis massa, dignissim in tempor sed, mattis fringilla felis. Mauris justo magna, venenatis quis molestie ut, vestibulum sit amet ante. Duis feugiat finibus ipsum, quis eleifend risus iaculis sed. Mauris sagittis tincidunt urna, eget placerat tortor pharetra eget. Maecenas in ornare massa, non viverra enim. Mauris quis est id leo interdum placerat. Aenean sit amet dictum ipsum. Etiam sed lobortis orci. Sed ac nunc augue. Ut non velit pharetra, ultrices est ornare, blandit leo. Proin imperdiet nisl a augue posuere, ac tristique erat pellentesque. In quis pretium nulla. Proin pellentesque, nunc a lacinia efficitur, diam leo lobortis enim, quis luctus ipsum magna eget metus. Suspendisse id gravida sapien. Praesent suscipit nunc egestas pharetra placerat.

                Duis vel tortor eros. Proin non mattis nunc. Vestibulum tempus aliquet erat, a scelerisque tellus laoreet sed. Aenean finibus tortor id lacus pulvinar bibendum. Praesent fermentum lectus vitae ante varius hendrerit. Fusce cursus velit sit amet tincidunt fermentum. Aliquam feugiat diam tristique, elementum tortor sit amet, interdum sapien. Morbi consequat lobortis varius. Curabitur varius tincidunt magna vel aliquam. </p>
            </div>
            <div>
                <span>Like</span>
                <span>Comment</span>
            </div>
        </div>
    );
}

export default Post;