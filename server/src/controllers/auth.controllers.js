import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const client = new PrismaClient();

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await client.user.findFirst({
      where: { email: email },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid login credentials" });
      8;
    }
    // res.send(user);
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (passwordMatch) {
      const payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.cookie("access_token", token).json({ success: true, data: payload });
    } else {
      res.status(400).json({ success: false, message: "Password mismatch" });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: "server error" });
  }
};
