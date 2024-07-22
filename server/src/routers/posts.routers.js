import Router from "express";
import { createPost, getAllPosts } from "../controllers/posts.controllers.js";
import verifyUser from "../middlewares/verifyUser.middleware.js";

const router = Router();

router.post("/", verifyUser, createPost);
router.get("/", getAllPosts);
export default router;
