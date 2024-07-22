import express from "express";
import usersRouter from "./src/routers/user.routers.js";
import userLoginRouter from "./src/routers/auth.router.js";
import postsRouter from "./src/routers/posts.routers.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:5173`,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", usersRouter);
app.use("/login", userLoginRouter);
app.use("/posts", postsRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
