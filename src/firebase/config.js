import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDppuSkJqAQ51bSIhL5FOy3Mw03DomOMWA",
  authDomain: "olive-bank.firebaseapp.com",
  projectId: "olive-bank",
  storageBucket: "olive-bank.appspot.com",
  messagingSenderId: "383183063046",
  appId: "1:383183063046:web:7709303647dd4faec49b87",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFireStore, projectAuth, timestamp };
