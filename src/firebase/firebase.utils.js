import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCs4rzJqtZEPdl_0OfE-xrfeBZ_PN5zKUs",
  authDomain: "crwn-db-fa568.firebaseapp.com",
  projectId: "crwn-db-fa568",
  storageBucket: "crwn-db-fa568.appspot.com",
  messagingSenderId: "602349043278",
  appId: "1:602349043278:web:3d00341a673d5523af0d1f",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);

  objectsToAdd.forEach((object) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = [];

  collections.forEach((collectionDoc) => {
    const { title, items } = collectionDoc.data();

    transformedCollections.push({
      routeName: encodeURI(title.toLowerCase()),
      id: collectionDoc.id,
      title,
      items,
    });
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
