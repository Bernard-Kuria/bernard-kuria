import { db } from "../firebaseAdmin.js";

// GET documents from collection
export const getMilestones = async (req, res, next) => {
  try {
    const snapshot = await db.collection("milestones").get();
    const milestonesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(milestonesData);
  } catch (error) {
    next(error);
  }
};

// POST document to collection
export const postMilestones = async (req, res, next) => {
  try {
    const data = req.body;
    const docRef = await db.collection("milestones").add(data);
    res.status(201).json({ message: "Milestone saved!", id: docRef.id });
  } catch (error) {
    next(error);
  }
};
