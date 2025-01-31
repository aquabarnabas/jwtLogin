import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  username: string;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token format" });
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (e, d) => {
    req.user = d as JwtPayload;
    next();
  });
};
