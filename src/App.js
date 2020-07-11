import React from 'react';

import './App.css';
import Head_func from './Components/Header/Header';
import FootDiv from './Components/Footer/footer';
//import ProfileFull from './Components/Profile/profile';
import SmsPage from './Components/Sms_Page/DialogSmsFriend';

function App() {
  return (
    <div>
      <Head_func/>
      <div className="content">
        {/*<SmsPage/>*/}
       <ProfileFull/>
      </div>
      <FootDiv/>
    </div>
  );
}

export default App;
