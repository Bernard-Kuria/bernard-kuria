import { Router } from "express";
import cors from "cors";

import {
  getMilestones,
  postMilestones,
} from "../controllers/milestones.controller.js";

const milestonesRouter = Router();
milestonesRouter.use(cors());

milestonesRouter.get("/", getMilestones);
milestonesRouter.post("/", postMilestones);

export default milestonesRouter;
