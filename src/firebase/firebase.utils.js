import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7GcisgNr1O0SeubhDZw6h1yxrz9HOllo",
    authDomain: "crwn-db-9e8a4.firebaseapp.com",
    databaseURL: "https://crwn-db-9e8a4.firebaseio.com",
    projectId: "crwn-db-9e8a4",
    storageBucket: "crwn-db-9e8a4.appspot.com",
    messagingSenderId: "942720927702",
    appId: "1:942720927702:web:5a4e5a2b7829cbf7260677"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;