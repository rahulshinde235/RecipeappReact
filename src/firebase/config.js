import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAJvu7zGkzzvyvqWhQdEDscvChlUHoi1eI",
  authDomain: "recipekart-190b9.firebaseapp.com",
  projectId: "recipekart-190b9",
  storageBucket: "recipekart-190b9.appspot.com",
  messagingSenderId: "113077810425",
  appId: "1:113077810425:web:032cf197712e0675ec1e28",
};
//initialise firebase
firebase.initializeApp(firebaseConfig);
//this connects to firebase for us

//initialise services
const projectFirestore = firebase.firestore();

export { projectFirestore };
