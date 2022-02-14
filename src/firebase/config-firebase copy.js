import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyDKY9_cpZjGhiNls2W755n2WBD7XTjRbHM",
  // authDomain: "humansr-27e8a.firebaseapp.com",
  // databaseURL: "https://humansr-27e8a.firebaseio.com",
  // projectId: "humansr-27e8a",
  // storageBucket: "humansr-27e8a.appspot.com",
  // messagingSenderId: "1074786793725",
  // appId: "1:1074786793725:web:81e81758f11a03f6aea694",
  // measurementId: "G-JZ4CDJPBQG",
  apiKey: "AIzaSyAg9AJiV5YA9OrwtGRdBI5e6LUb-EJApVo",
  authDomain: "iot22-252021.firebaseapp.com",
  databaseURL: "https://iot22-252021.firebaseio.com",
  projectId: "iot22-252021",
  storageBucket: "iot22-252021.appspot.com",
  messagingSenderId: "228444587485",
  appId: "1:228444587485:web:55d01a19538d8164d06234",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, db, googleAuthProvider };
