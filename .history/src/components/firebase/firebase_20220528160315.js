import * as firebase from 'firebase/app'

const App = () => firebase.initializeApp({
    apiKey: "AIzaSyDC8nnxcS43mWyi8fGpl8JgPGZj5mT0wpk",
    authDomain: "student-dashboard-c3bc4.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})
export default App;