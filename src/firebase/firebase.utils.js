import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEY0eWB8fCFGAstUcwusWCPft5bYzFFQs",
  authDomain: "crwn-db-d11ba.firebaseapp.com",
  databaseURL: "https://crwn-db-d11ba.firebaseio.com",
  projectId: "crwn-db-d11ba",
  storageBucket: "crwn-db-d11ba.appspot.com",
  messagingSenderId: "1089876818871",
  appId: "1:1089876818871:web:17a0e667ad885e1e10c632",
  measurementId: "G-EY183XPP6N",
};

export const createUserProfileDocument = async (userAuth, addicinalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addicinalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
