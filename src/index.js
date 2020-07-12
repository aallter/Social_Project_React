import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let arr_dialog_friend = [
  {id:"1", name:"Sergio" ,img:"https://www.weclever.ru/img/actions/96495/1-650x350.jpg"},
  {id:"2", name:"Pavel" , img:"https://bigpicture.ru/wp-content/uploads/2017/01/199.jpg"},
  {id:"3", name:"Jhon" , img:"https://static.ngs.ru/news/preview/fe57768c1fb0bfecbc16ef286a81709400b2839b_599_399_c.jpg"}
];
let arr_posts =[
  {id:"1" ,img:"https://static.ngs.ru/news/preview/fe57768c1fb0bfecbc16ef286a81709400b2839b_599_399_c.jpg" , name:"Sergio" , surname:"Jhet", textCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum rutrum varius. Aenean sodales elit quis odio mollis, ut mollis justo viverra. Mauris venenatis sem vel augue iaculis, in tempor quam egestas. Nullam in elit dignissim, iaculis libero quis, egestas tellus. Maecenas tristique consectetur consequat. Aliquam in urna varius, ornare magna eget, dapibus eros.", like:"4" ,comment:"1"},
  {id:"2", img:"https://www.weclever.ru/img/actions/96495/1-650x350.jpg" , name:"Kate" , surname:"Lililo", textCont:"andit. Phasellus luctus, velit id condimentum cursus, erat sem vestibulum diam, quis consectetur ex mauris id massa. Vivamus id dui tortor. Vivamus tempus sem et elit egestas venenatis ac ac est. In vel accumsan ligula. Fusce tortor nisi, molestie sit amet molestie sit amet, venenatis eu velit. ", like:"23", comment:"1"},
  {id:"3" ,img:"https://static.ngs.ru/news/preview/fe57768c1fb0bfecbc16ef286a81709400b2839b_599_399_c.jpg" , name:"Anastasia" , surname:"jhonir", textCont:"andit. Phasellus luctus, velit id condimentum cursus, erat sem vestibulum diam, quis consectetur ex mauris id massa. Vivamus id dui tortor. Vivamus tempus sem et elit egestas venenatis ac ac est. " ,like:"44" ,comment:"1"},
  {id:"4", img:"https://bigpicture.ru/wp-content/uploads/2017/01/199.jpg" , name:"Vova" , surname:"Boom", textCont:"andit. Phasellus luctus, velit id condimentum cursus, erat ssan ligula. Fusce tortor nisi, molestie sit amet molestie sit amet, venenatis eu velit. " ,like:"12", comment:"1"}
];
let arr_sms_one = [
  {img:"https://thumb.tildacdn.com/tild6464-3562-4833-b037-613464353461/-/resize/824x/-/format/webp/photo.jpg", name:"Sergio",message:"Hi Man / How are you??"},
  {img:"https://i.pinimg.com/736x/e1/3a/ee/e13aee34c92656363c3b46c31cf6bb78.jpg", name:"Pavel",message:"Norm, and you?"},
  {img:"https://thumb.tildacdn.com/tild6464-3562-4833-b037-613464353461/-/resize/824x/-/format/webp/photo.jpg", name:"Sergio",message:"Good too??"},
  {img:"https://i.pinimg.com/736x/e1/3a/ee/e13aee34c92656363c3b46c31cf6bb78.jpg", name:"Pavel",message:"Ok"}
];
let arr_song=[
  {imgSong:"https://upload.wikimedia.org/wikipedia/ru/c/c7/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D0%B0_%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%B6%D0%B0%D1%80%D0%B0%22.jpeg" ,titleSong:"Revo bee"},
  {imgSong:"https://cameralabs.org/media/lab18/03/02/arhiv-muzykalnyh-oblozhek_5.jpg" ,titleSong:"linkin park"},
  {imgSong:"https://lh3.googleusercontent.com/proxy/93dyMX86e2WuFU0V92VGwnSC4vyPep_a--jMlStXEnS5osPSt-XY3O64s1N6S1EApC4h5wZtGSTMeJ8NllPOUc4IZgxiS7slAKPqNx_8jzmcELBvWovsLDxe9MOKNLz3evokaw" ,titleSong:"poshlay Molli"},
  {imgSong:"https://samesound.ru/wp-content/uploads/2019/02/synthwave-album-cover.jpg" ,titleSong:"Ac Dc"},
  {imgSong:"https://cameralabs.org/media/lab18/03/02/arhiv-muzykalnyh-oblozhek_1.jpg" ,titleSong:"Anacondaz"}
];
ReactDOM.render(
  <React.StrictMode>
    <App arr_dialog_friend={arr_dialog_friend} arr_posts={arr_posts} arr_sms_one={arr_sms_one} arr_song={arr_song}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
