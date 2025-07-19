import { Router } from "express";
import cors from "cors";

import { getAboutMe, postAboutMe } from "../controller/aboutMe.controller.js";

const aboutMeRouter = Router();
aboutMeRouter.use(cors());

aboutMeRouter.get("/", getAboutMe);
aboutMeRouter.post("/", postAboutMe);

export default aboutMeRouter;
