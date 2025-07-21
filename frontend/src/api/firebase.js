import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD54IwiGmhvbw5IVbCqgVgDAyd2Ltpgb5c",
  authDomain: "bernard-webfolio.firebaseapp.com",
  projectId: "bernard-webfolio",
  storageBucket: "bernard-webfolio.firebasestorage.app",
  messagingSenderId: "229703736461",
  appId: "1:229703736461:web:3d9f047d2280a8b83e96c4",
  measurementId: "G-EW8WZJWRTZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export the storage instance
export default app;
