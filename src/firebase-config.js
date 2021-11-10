// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVAVCGWE_9l-uecDH2y-tLeuSKeQLGCgQ",
  authDomain: "naan-firebase.firebaseapp.com",
  projectId: "naan-firebase",
  storageBucket: "naan-firebase.appspot.com",
  messagingSenderId: "1045533284355",
  appId: "1:1045533284355:web:b3f9130223bc5550691636",
  measurementId: "G-EPMJ7C179R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);