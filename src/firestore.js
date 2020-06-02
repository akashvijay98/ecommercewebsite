import firebase from 'firebase';
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAhKmt-Y3IBzDWStOndnH75Lh5axgkSHlg",
  authDomain: "ecomerce-ce699.firebaseapp.com",
  databaseURL: "https://ecomerce-ce699.firebaseio.com",
  projectId: "ecomerce-ce699",
  storageBucket: "ecomerce-ce699.appspot.com",
  messagingSenderId: "996661350493",
  appId: "1:996661350493:web:2e201139abf0c5e56b7db4",
  measurementId: "G-GRWNCLD5FQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase;