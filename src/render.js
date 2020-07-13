import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NewPost} from './state/state';

export let renderTree =(state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} NewPost={NewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

