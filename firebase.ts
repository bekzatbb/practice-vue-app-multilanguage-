import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVl9KUKZjDTf6Q5L3d5FH3URqfA-L2qxE",
    authDomain: "habit-tracker-88759.firebaseapp.com",
    projectId: "habit-tracker-88759",
    storageBucket: "habit-tracker-88759.appspot.com",
    messagingSenderId: "554405029519",
    appId: "1:554405029519:web:83325eb8d618702e0872fa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
