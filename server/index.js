import express from 'express';
import usersRouter from './src/routers/user.routers.js';
import cors from 'cors';
import { config } from 'dotenv';
config();

const app = express();
app.use(express.json());
app.use(cors({
  origin:  `http://localhost:5173`,
  methods: ['GET', 'POST','PATCH','DELETE'],
}));
app.use(express.urlencoded({extemded: true}));
app.use("/user", usersRouter);




app.listen(3000, () =>{
  console.log("server running on port 3000");
})

