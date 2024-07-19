import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export const validateUserInformation = async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  if (!firstName)
    return res
      .status(400)
      .json({ success: false, message: "first name  required" });
  if (!lastName)
    return res
      .status(400)
      .json({ success: false, message: "last name required" });
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "email address required" });
  if (!phoneNumber)
    return res
      .status(400)
      .json({ success: false, message: "phone number required" });
  if (!password)
    return res
      .status(400)
      .json({ success: false, message: "password required" });
  const userWithPhone = await client.user.findFirst({
    where: { phoneNumber: phoneNumber },
  });
  if (userWithPhone)
    return res
      .status(400)
      .json({ success: false, messsage: "phone number already taken" });
  next();
};
