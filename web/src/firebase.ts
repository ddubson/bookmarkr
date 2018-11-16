import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAJf7_T2MpV_94_f6N2YywLC1j9EyxudQQ",
  authDomain: "bookmarkr-253e9.firebaseapp.com",
  databaseURL: "https://bookmarkr-253e9.firebaseio.com",
  messagingSenderId: "416279231341",
  projectId: "bookmarkr-253e9",
  storageBucket: "bookmarkr-253e9.appspot.com",
};

firebase.initializeApp(config);
export default firebase;
