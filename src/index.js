import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const names = [
  {
    name: 'jane',
    age: 4
  },
  {
    name: 'josh',
    age: 3
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App people={names}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
