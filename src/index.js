import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/app"

const config = {
    apiKey: "AIzaSyDOjjSeWebpIvv8U4A6FB9Czdx9-TA1Zoo",
    authDomain: "stl-low-brass-collective.firebaseapp.com",
    databaseURL: "https://stl-low-brass-collective.firebaseio.com",
    projectId: "stl-low-brass-collective",
    storageBucket: "stl-low-brass-collective.appspot.com",
    messagingSenderId: "661249930153"
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
