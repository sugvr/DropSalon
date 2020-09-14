import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD255AEqYgtGkmxtJV_sxy0P9G9U-EzsIw",
  authDomain:"dropsalon-f5d38.firebaseapp.com",
  databaseURL: "https://dropsalon-f5d38.firebaseio.com",
  projectId: "dropsalon-f5d38",
  storageBucket: "dropsalon-f5d38.appspot.com",
  messagingSenderId: "391252834047",

});

export default app;