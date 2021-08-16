import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyCIs-K9IQYsStpt1qqneU991d5RXh1coFM",
  authDomain: "simrandeep-bajwa-portfolio.firebaseapp.com",
  databaseURL: "https://simrandeep-bajwa-portfolio.firebaseio.com",
  projectId: "simrandeep-bajwa-portfolio",
  storageBucket: "simrandeep-bajwa-portfolio.appspot.com",
  messagingSenderId: "251474267503",
  appId: "1:251474267503:web:47e2785dd7a8807f786c9a",
  measurementId: "G-Z0L0CLW9P8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
