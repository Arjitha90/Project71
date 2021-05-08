import * as firebase from 'firebase'
require('@firebase/firestore')
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBiX7e_f2g-cyjJMwS2cF5jb9xUx1MKBUk",
    authDomain: "storyhub-50cc3.firebaseapp.com",
    projectId: "storyhub-50cc3",
    storageBucket: "storyhub-50cc3.appspot.com",
    messagingSenderId: "934348214637",
    appId: "1:934348214637:web:b6b4de8a1d689884400a64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()