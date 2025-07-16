import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD54IwiGmhvbw5IVbCqgVgDAyd2Ltpgb5c",
  authDomain: "bernard-webfolio.firebaseapp.com",
  projectId: "bernard-webfolio",
  storageBucket: "bernard-webfolio.firebasestorage.app",
  messagingSenderId: "229703736461",
  appId: "1:229703736461:web:3d9f047d2280a8b83e96c4",
  measurementId: "G-EW8WZJWRTZ",
};

export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const profileRef = ref(storage, "images/Profile.jpg");

// Functions to get the image URL
export async function getProfileImgUrl() {
  try {
    return await getDownloadURL(profileRef);
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null;
  }
}

// Default export (add this at the end)
export default { getProfileImgUrl, app };
