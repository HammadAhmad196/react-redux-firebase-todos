import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

 const firebaseConfig = {
  apiKey: "AIzaSyCu-QkdkGz_SbJCa7f8WJnTqJMaYx4f0ww",
  authDomain: "todo-5999a.firebaseapp.com",
  projectId: "todo-5999a",
  storageBucket: "todo-5999a.appspot.com",
  messagingSenderId: "895822501116",
  appId: "1:895822501116:web:e6cabb8bf2fad6fc4d7379",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const db = firebaseApp.firestore();

const storage = firebase.storage();
export { auth, googleAuthProvider,facebookAuthProvider, db, storage, firebase as default };
