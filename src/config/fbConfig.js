import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize firebase


var config = {
    apiKey: "AIzaSyBheX7RGyvEm4QLESs5S9WxYTBRhQcmwTQ",
    authDomain: "react-redux-firebase-braian.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-braian.firebaseio.com",
    projectId: "react-redux-firebase-braian",
    storageBucket: "react-redux-firebase-braian.appspot.com",
    messagingSenderId: "1093748330955",
    appId: "1:1093748330955:web:d2386cbdfff399572da64e"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase; 