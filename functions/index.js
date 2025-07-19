import functions from "firebase-functions";
import express from "express";
import cors from "cors";

import aboutMeRouter from "./routes/aboutMe.routes.js";
import "./firebaseAdmin.js";

// initialize Express app
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.use("/aboutMe", aboutMeRouter);

export const api = functions.https.onRequest(app);
