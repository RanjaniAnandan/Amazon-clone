import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCy0vq8KQiV5SqtLOxU8Gkw2yzZHJwWiiE",
  authDomain: "clone-2c513.firebaseapp.com",
  databaseURL: "https://clone-2c513.firebaseio.com",
  projectId: "clone-2c513",
  storageBucket: "clone-2c513.appspot.com",
  messagingSenderId: "604849644299",
  appId: "1:604849644299:web:5261125ca47519fbda380e",
  measurementId: "G-V1LVFGDDFC"

});



// Use these for auth

const auth = firebase.auth();

export { auth };