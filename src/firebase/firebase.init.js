// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDssYQ6L6tQByHDTU5_8Y6zMwbG9quK-ZA',
  authDomain: 'timple-firebase-auth-9b4d3.firebaseapp.com',
  projectId: 'timple-firebase-auth-9b4d3',
  storageBucket: 'timple-firebase-auth-9b4d3.appspot.com',
  messagingSenderId: '861132820631',
  appId: '1:861132820631:web:6d791cb6437e6b2f2799d2',
  measurementId: 'G-R7W4ZP98LN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
