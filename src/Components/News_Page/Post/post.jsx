import React from 'react';
import postStyle from './post.module.css';

const Post = (props) =>{
    let arr_posts =[
        {id:"1" ,img:"" , name:"Sergio" , surname:"Jhet", textCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum rutrum varius. Aenean sodales elit quis odio mollis, ut mollis justo viverra. Mauris venenatis sem vel augue iaculis, in tempor quam egestas. Nullam in elit dignissim, iaculis libero quis, egestas tellus. Maecenas tristique consectetur consequat. Aliquam in urna varius, ornare magna eget, dapibus eros.", like:"4" ,comment:""},
        {id:"2", img:"" , name:"Kate" , surname:"Lililo", textCont:"andit. Phasellus luctus, velit id condimentum cursus, erat sem vestibulum diam, quis consectetur ex mauris id massa. Vivamus id dui tortor. Vivamus tempus sem et elit egestas venenatis ac ac est. In vel accumsan ligula. Fusce tortor nisi, molestie sit amet molestie sit amet, venenatis eu velit. ", like:"23", comment:""},
        {id:"3" ,img:"" , name:"Anastasia" , surname:"jhonir", textCont:"andit. Phasellus luctus, velit id condimentum cursus, erat sem vestibulum diam, quis consectetur ex mauris id massa. Vivamus id dui tortor. Vivamus tempus sem et elit egestas venenatis ac ac est. " ,like:"44" ,comment:""},
        {id:"4", img:"" , name:"Vova" , surname:"Boom", textCont:"andit. Phasellus luctus, velit id condimentum cursus, erat ssan ligula. Fusce tortor nisi, molestie sit amet molestie sit amet, venenatis eu velit. " ,like:"12", comment:""}
    ];

    let new_arr_posts = arr_posts.map(post_new => <BodyPost id={post_new.id} img={post_new.img} name={post_new.name} surname={post_new.surname} textCont={post_new.textCont}  like={post_new.like} comment={post_new.comment} />);

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