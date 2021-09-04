import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCs4rzJqtZEPdl_0OfE-xrfeBZ_PN5zKUs",
  authDomain: "crwn-db-fa568.firebaseapp.com",
  projectId: "crwn-db-fa568",
  storageBucket: "crwn-db-fa568.appspot.com",
  messagingSenderId: "602349043278",
  appId: "1:602349043278:web:3d00341a673d5523af0d1f",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
