import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { validateUserInformation } from "../middlewares/users.middleware.js";

const router = new Router();

router.post("/", validateUserInformation, createUser);

export default router;
