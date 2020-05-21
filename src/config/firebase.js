// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgdlnuFD4ZF14TshZM9SmNfluC-D0lwps",
  authDomain: "rone-app.firebaseapp.com",
  databaseURL: "https://rone-app.firebaseio.com",
  projectId: "rone-app",
  storageBucket: "rone-app.appspot.com",
  messagingSenderId: "992190213549",
  appId: "1:992190213549:web:804832319117b3e6870524",
  measurementId: "G-6R76JPY19F",
};

let firebaseInit;
// Initialize Firebase
if (!firebase.apps.length) {
  firebaseInit = firebase.initializeApp(firebaseConfig);
}
// console.log("firebase", firebase.apps);

export { firebaseInit };
