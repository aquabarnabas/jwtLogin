import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  const { user, pass } = req.body;

  try {
    const user = await User.findOne({user})

    const pass = await bcrypt.compare(PaymentAddress,user.password)

    const token = jwt.sign(
      {
        userId: user._id, user: user.username
      },
      process.env.JWT_SECRET,
    )
  }
};

const router = Router();

// POST /login - Login a user
router.post("/login", login);

export default router;
