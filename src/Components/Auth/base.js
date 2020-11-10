import firebase from 'firebase/app'
import "firebase/auth"

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const fire = firebase.initializeApp( {
    apiKey: "AIzaSyCTgVjFEd2NgGsfcmXv8VUEWUXMx5tgcZQ",
    authDomain: "tutorial-c2f49.firebaseapp.com",
    databaseURL: "https://tutorial-c2f49.firebaseio.com",
    projectId: "tutorial-c2f49",
    storageBucket: "tutorial-c2f49.appspot.com",
    messagingSenderId: "302664982282",
    appId: "1:302664982282:web:be02cdd5f5f46bd2ed24f3",
    measurementId: "G-PC1Y5BY20Q"
  });
  // Initialize Firebase
  // const fire = firebase.initializeApp(firebaseConfig);

  export default fire;