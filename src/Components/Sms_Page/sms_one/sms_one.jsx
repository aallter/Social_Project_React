import React from 'react';
import oneSms from './sms_one.module.css';

const OneSms = () => {
    return(
    <div>
        <div className={oneSms.blockOneSms}>
            <img src="https://habrastorage.org/getpro/habr/post_images/c18/418/8c4/c184188c4f088a155c652e51562c42f6.jpg" width="50px"/>
            <p>Name</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores, ipsum consequatur corrupti ut reiciendis molestiae magni deleniti ipsam enim voluptatum iure esse impedit aut fuga pariatur cumque dolore et!</p>
        </div>
        <div className={oneSms.blockOneSms}>
            <img src="https://habrastorage.org/getpro/habr/post_images/c18/418/8c4/c184188c4f088a155c652e51562c42f6.jpg" width="50px"/>
            <p>Name</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores, ipsum consequatur corrupti ut reiciendis molestiae magni deleniti ipsam enim voluptatum iure esse impedit aut fuga pariatur cumque dolore et!</p>
        </div>
    </div>
    );
}

export default OneSms;