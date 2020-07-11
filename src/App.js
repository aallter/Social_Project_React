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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Head_func/>
        <div className="content">
          <Route path='/dialogs' component={SmsPage}/>
          <Route path='/profile' component={ProfileFull}/>
          <Route path='/news' component={NewsPosts}/>
          <Route path='/music' component={MusicFunc}/>
          <Route path='/settings' component={Settings}/>
        </div>
        <FootDiv/>
      </div>
    </BrowserRouter>
  );
}

export default App;
