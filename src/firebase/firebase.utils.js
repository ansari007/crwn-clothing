import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
const config = {
    apiKey: "AIzaSyAEutnfZZBDctFOhqj7IainsdjZVnXx-EA",
    authDomain: "crwn-db-ba668.firebaseapp.com",
    databaseURL: "https://crwn-db-ba668.firebaseio.com",
    projectId: "crwn-db-ba668",
    storageBucket: "crwn-db-ba668.appspot.com",
    messagingSenderId: "917450930307",
    appId: "1:917450930307:web:339983bd9fd3a999acc3b6",
    measurementId: "G-3H376QDFFS"
};
firebase.initializeApp(config);
export const auth = firebase.auth(); 
// export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;