import firebase from 'firebase';


 
const firebaseConfig = {
    apiKey: "AIzaSyBZepC_tP_ilr8WHxyt4HVzxd1qt6S1ysw",
    authDomain: "next-crud-7c101.firebaseapp.com",
    projectId: "next-crud-7c101",
    storageBucket: "next-crud-7c101.appspot.com",
    messagingSenderId: "13857619632",
    appId: "1:13857619632:web:6faa957d4bd07bfb738575"
  };

let fireDb=  firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();