import React from 'react';
import settingsStyle from "./settings.module.css";


const SettingsQuestion = () =>{
    return(
        <div className={settingsStyle.setDiv}>
           <h2>1. How to use React</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor bibendum ipsum, non pretium ex mollis vitae. Nulla et metus lorem. Sed libero lectus, dictum a tempor vel, blandit vel odio. Sed lacinia laoreet condimentum. Aenean blandit fermentum finibus. Cras congue tristique diam. Donec ipsum dui, varius eu est quis, congue malesuada nunc. Nulla faucibus eget dolor dictum rutrum. Vivamus vitae risus pulvinar lorem ultricies molestie. Suspendisse quis diam porttitor, iaculis ex quis, tristique ipsum. Morbi egestas risus quis tempor sagittis. Suspendisse tempus in mi id cursus.</p>
        </div>
    );
}

export default SettingsQuestion;