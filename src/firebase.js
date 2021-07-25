import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDANwFUUSHqQx8Yspx8W_7Wh0uDOYWTyZs",
    authDomain: "svelte-atm.firebaseapp.com",
    projectId: "svelte-atm",
    storageBucket: "svelte-atm.appspot.com",
    messagingSenderId: "786420111104",
    appId: "1:786420111104:web:51998384dfe37d820245e5"
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
