// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADP8Qu0BpGSh6WyssS-mA0WiPIPrBIRUg",
  authDomain: "taskly-demo-5709b.firebaseapp.com",
  projectId: "taskly-demo-5709b",
  storageBucket: "taskly-demo-5709b.firebasestorage.app",
  messagingSenderId: "1045549493329",
  appId: "1:1045549493329:web:0c931fc09156fb5885dc70",
  measurementId: "G-QK0EDPEKCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);