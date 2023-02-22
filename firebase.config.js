// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRx6irD0PVxW0xxut0Ybzl4qwYjwrgYUw",
  authDomain: "mealplanner-rn.firebaseapp.com",
  projectId: "mealplanner-rn",
  storageBucket: "mealplanner-rn.appspot.com",
  messagingSenderId: "210815382394",
  appId: "1:210815382394:web:55d53e10961b81dcdd1cc3",
  measurementId: "G-DXF84T0TCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
