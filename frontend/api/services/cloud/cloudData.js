import app from "../../firebase.js";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
