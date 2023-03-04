// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVrmI9mxEDevS8IirMjmv8iRIEJXHrlcA",
  authDomain: "demosss-aaa61.firebaseapp.com",
  projectId: "demosss-aaa61",
  storageBucket: "demosss-aaa61.appspot.com",
  messagingSenderId: "974968696685",
  appId: "1:974968696685:web:bba8d0d9b44f322ba4f464",
  measurementId: "G-5Y2K4EY8LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;