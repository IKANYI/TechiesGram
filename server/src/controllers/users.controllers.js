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

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password, role } =
      req.body;
    const id = req.params.id;
    const updateUser = await prisma.user.update({
      where: { id: id },
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      role: role,
    });
  } catch (e) {
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
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteuser = await prisma.user.delete({
      where: { id: id },
    });
    res.status(200).json({ success: true, data: deleteuser });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
