import React from 'react';
import musicStyle from "./music.module.css";

const SongFunc = () => {
    return(
        <div className={`${musicStyle.posit} ${musicStyle.player}`}>
            <img src="https://cdn2.iconfinder.com/data/icons/player-app-icons/512/play-512.png" width="25px"/>
            <img src="https://upload.wikimedia.org/wikipedia/ru/c/c7/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D0%B0_%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%B6%D0%B0%D1%80%D0%B0%22.jpeg" width="25px"/>
            <span>title song</span>
        </div>
    );
}

export default SongFunc;