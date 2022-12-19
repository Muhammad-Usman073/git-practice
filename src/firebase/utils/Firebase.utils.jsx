import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxRW4oljn4a11LFsIYx16sBZDqqCCUv8U",
  authDomain: "practice-database-e96f8.firebaseapp.com",
  projectId: "practice-database-e96f8",
  storageBucket: "practice-database-e96f8.appspot.com",
  messagingSenderId: "425347304592",
  appId: "1:425347304592:web:02cdce2f8f3989378edc15",
};
const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});
const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
const db = getFirestore(firebase);
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "user",userAuth.uid);
  const createDate = new Date();
  const { displayName, email } = userAuth;
  try {
    await setDoc(userDocRef, { displayName, email, createDate });
  } catch (error) {
    console.log('error creating the user',error.message)
  }
};
