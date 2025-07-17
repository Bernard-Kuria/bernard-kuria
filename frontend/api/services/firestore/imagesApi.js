import { app } from "../../firebase.js";

import {
  getFirestore,
  connectFirestoreEmulator,
  collection,
  getDocs,
} from "firebase/firestore";

// firebaseApps previously initialized using initializeApp()
const db = getFirestore(app);

// Connect to Firestore emulator if running locally
if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

// Example fetch function
export async function fetchImages() {
  const querySnapshot = await getDocs(collection(db, "images"));
  return querySnapshot.docs.map((doc) => doc.data());
}

export default fetchImages;
