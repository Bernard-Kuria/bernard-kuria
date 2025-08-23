import app from "../../firebase.js";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

// Functions to get the profile image URL
const profileRef = ref(storage, "images/Profile.jpg");
export async function getProfileImgUrl() {
  try {
    return await getDownloadURL(profileRef);
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null;
  }
}

// Function to get milestone images URL
export async function getMilestoneImgUrl({ imageNames }) {
  const imagesRefs = imageNames.map((image) => ref(storage, image));

  try {
    return await Promise.all(
      imagesRefs.map((imageRef) => getDownloadURL(imageRef))
    );
  } catch (error) {
    console.error("Error fetching milestone image URLs:", error);
    return null;
  }
}

// Function to get milestone video URL
export async function getVideoUrl(videoName) {
  const videoRef = ref(storage, videoName);
  try {
    return await getDownloadURL(videoRef);
  } catch (error) {
    console.error("Error fetching video URL:", error);
    return null;
  }
}

// Default export (add this at the end)
export default { getProfileImgUrl, getMilestoneImgUrl, getVideoUrl, app };
