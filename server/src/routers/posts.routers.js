import Router from "express";
import {
  createPost,
  getAllPosts,
  deletePosts,
} from "../controllers/posts.controllers.js";
import verifyUser from "../middlewares/verifyUser.middleware.js";

const router = Router();

router.post("/", verifyUser, createPost);
router.get("/", getAllPosts);
router.delete("/delete/:id", deletePosts);
export default router;
