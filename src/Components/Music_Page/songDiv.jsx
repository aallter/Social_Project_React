import React from 'react';
import musicStyle from "./music.module.css";

const SongFunc = (props) => {


    let new_arr_song=props.arr_song.map(song => <SongConstruct  imgSong={song.imgSong} titleSong={song.titleSong}/>);
    return(
        <div >
            {new_arr_song}
        </div>
    );
}


const SongConstruct = (props) => {
    return(
        <div className={`${musicStyle.posit} ${musicStyle.player}`}>
            <img src="https://cdn2.iconfinder.com/data/icons/player-app-icons/512/play-512.png" width="25px"/>
            <img src={props.imgSong} width="25px"/>
            <span>{props.titleSong}</span>
        </div>
    );
}



export default SongFunc;