import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/users.controllers.js";
import { validateUserInformation } from "../middlewares/users.middleware.js";

const router = new Router();

router.post("/", validateUserInformation, createUser);
router.get("/all", getAllUsers);

export default router;
