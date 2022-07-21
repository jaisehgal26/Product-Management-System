import firebase from "firebase/app";
import "firebase/auth";

// USE YOUR OWN KEYS HERE
const app = firebase.initializeApp({
  apiKey: "************************************",
  authDomain: "************************************",
  projectId: "************************************",
  storageBucket: "************************************",
  messagingSenderId: "************************************",
  appId: "************************************",
  measurementId: "************************************",
});

export const auth = app.auth();
export default app;
