import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAC9W-OeWg0hEpLJfppPHR4zkuvnWMJDlE",
  authDomain: "pawn-chat-pp.firebaseapp.com",
  databaseURL: "https://pawn-chat-pp.firebaseio.com",
  projectId: "pawn-chat-pp",
  storageBucket: "pawn-chat-pp.appspot.com",
  messagingSenderId: "400014813944",
  appId: "1:400014813944:web:f41e53115db3b5b7cc290d",
  measurementId: "G-P2RTSRC9NG"
};

// Innitalize firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
