import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzpXcgQg1NfG2ZDsYZY7Qqssp05ouvLYg",
  authDomain: "tenedores-f3ca5.firebaseapp.com",
  databaseURL: "https://tenedores-f3ca5.firebaseio.com",
  projectId: "tenedores-f3ca5",
  storageBucket: "",
  messagingSenderId: "703087302335",
  appId: "1:703087302335:web:d01f9ad540157662"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
