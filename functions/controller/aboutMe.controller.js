// controller/aboutMe.controller.js
import { db } from "../firebaseAdmin.js";

// GET documents from collection
export const getAboutMe = async (req, res, next) => {
  try {
    const snapshot = await db.collection("aboutMe").get();
    const aboutData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(aboutData);
  } catch (error) {
    next(error);
  }
};

// POST document to collection
export const postAboutMe = async (req, res, next) => {
  try {
    const data = req.body;
    const docRef = await db.collection("aboutMe").add(data);
    res.status(201).json({ message: "About Me saved!", id: docRef.id });
  } catch (error) {
    next(error);
  }
};
