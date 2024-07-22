import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: hashedPassword,
      },
    });
    res.status(201).json({ newUser });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
