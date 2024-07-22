import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    const userId = user.id;
    const { postMedia, postText } = req.body;
    const post = await prisma.posts.create({
      data: { postMedia: postMedia, postText: postText, userId: userId },
    });
    res.status(201).json({ success: true, data: post });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.posts.findMany();
    res.json(posts);
  } catch (e) {
    res.status(500).json({ success: false, message: "error getting posts" });
  }
};
