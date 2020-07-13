import React from 'react';

import './App.css';
import Head_func from './Components/Header/Header';
import FootDiv from './Components/Footer/footer';
import ProfileFull from './Components/Profile/profile';
import SmsPage from './Components/Sms_Page/DialogSmsFriend';
import { Route, BrowserRouter } from 'react-router-dom';
import NewsPosts from './Components/News_Page/News';
import MusicFunc from './Components/Music_Page/music';
import Settings from './Components/Settings_Page/settings';
import { NewPost } from './state/state';

function App(props) {

  return (
    <BrowserRouter>
      <div>
        <Head_func/>
        <div className="content">
          <Route path='/dialogs' render={()=><SmsPage arr_dialog_friend={props.state.arr_dialog_friend} arr_sms_one={props.state.arr_sms_one}/>}/>
          <Route path='/profile' render={() =><ProfileFull arr_posts={props.state.arr_posts} NewPost={NewPost}/>}/>
          <Route path='/news' render={() =><NewsPosts arr_posts={props.state.arr_posts}/>}/>
          <Route path='/music' render={() =><MusicFunc arr_song={props.state.arr_song}/>}/>
          <Route path='/settings' render={() =><Settings/>}/>
        </div>
        <FootDiv/>
      </div>
    </BrowserRouter>
  );
}

export default App;
