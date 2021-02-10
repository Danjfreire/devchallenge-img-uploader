import firebase from 'firebase' 

export const firebaseConfig = {
    apiKey: "AIzaSyCEjlnFXWNCc6wpme3PX09u0AH0dR1Im_g",
    authDomain: "image-uploader-cf09f.firebaseapp.com",
    projectId: "image-uploader-cf09f",
    storageBucket: "image-uploader-cf09f.appspot.com",
    messagingSenderId: "788999813580",
    appId: "1:788999813580:web:85d07c2ba7bd3f0b9a0569"
  };

  export const app = firebase.initializeApp(firebaseConfig);
  