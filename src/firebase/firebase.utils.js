import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHof0bCHB4drPVt21QrMEv4fJTROiUsp0",
    authDomain: "directory-db.firebaseapp.com",
    databaseURL: "https://directory-db.firebaseio.com",
    projectId: "directory-db",
    storageBucket: "directory-db.appspot.com",
    messagingSenderId: "491066537611",
    appId: "1:491066537611:web:660067e84388192607468e",
    measurementId: "G-4H0SYYKNVB"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/5454545444'))
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


  //firebase.auth().signInWithPopup(provider);

