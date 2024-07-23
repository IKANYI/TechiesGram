import { Router } from "express";
import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
} from "../controllers/users.controllers.js";
import { validateUserInformation } from "../middlewares/users.middleware.js";

const router = new Router();

router.post("/", validateUserInformation, createUser);
router.get("/all", getAllUsers);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);

export default router;
