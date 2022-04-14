import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: "mymoney-3358e.firebaseapp.com",
  projectId: "mymoney-3358e",
  storageBucket: "mymoney-3358e.appspot.com",
  messagingSenderId: "405228153616",
  appId: "1:405228153616:web:fef3ae6cfd2b816fb19395",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
