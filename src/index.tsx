import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*

import firebase from 'firebase'
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB1FZZinzUJi-2LWaWjpNSrcQo4MpWpQno",
    authDomain: "project-manager-647b2.firebaseapp.com",
    databaseURL: "https://project-manager-647b2.firebaseio.com",
    projectId: "project-manager-647b2",
    storageBucket: "project-manager-647b2.appspot.com",
    messagingSenderId: "991498001296",
    appId: "1:991498001296:web:b72dd228c9a5f2d80b7115"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = firebase.app()
const defaultAuth = firebase.auth();

firebase.auth().signInWithEmailAndPassword('ian.hansson@gmail.com', 'banana').catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error);
}).then(user => {
    console.log('YES')
    console.log(user)
    firebase.firestore()
        .collection('test')
        .get().then(doc => {
        console.log('YES', doc)
    })
});

*/

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
