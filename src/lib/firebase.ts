import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

firebase.initializeApp({});

export const auth = firebase.auth();

export const fs = firebase.firestore();
export const getFsTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();
export const getFsId = () => fs.collection("dummy").doc().id;
export const printFsTimestamp = (obj: any) => {
  if (!obj) return "";
  const { seconds, nanoseconds } = obj;
  const timestamp = new firebase.firestore.Timestamp(seconds, nanoseconds);
  const date = timestamp.toDate();
  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};
export const FieldValue = firebase.firestore.FieldValue;

export const storage = firebase.storage();

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

export const functions = firebase.functions();
