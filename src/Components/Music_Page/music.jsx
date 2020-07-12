import React from 'react';
import SongFunc from './songDiv';
import musicStyle from "./music.module.css";

const MusicFunc = (props) => {
    return(
        <div>
            <div className={`${musicStyle.posit} ${musicStyle.player}`}>
                <img src="https://s1.iconbird.com/ico/2014/1/598/w512h5121390846436left512.png" width="25px"/>
                <img src="https://cdn2.iconfinder.com/data/icons/player-app-icons/512/play-512.png" width="25px"/>
                <img src="https://cdn1.iconfinder.com/data/icons/music-vol-2/512/54-512.png" width="25px"/>
                <img src="https://s1.iconbird.com/ico/2014/1/598/w512h5121390846449right512.png" width="25px"/>
                <span>Title song </span>
            </div>

            <form className={musicStyle.posit}>
                <input type="search" name="searchMusic" placeholder="Search song"/>
                <input type="submit" value="Search"/>
            </form>

            <SongFunc arr_song={props.arr_song}/>
        </div>
    );
}

export default MusicFunc;