import { UserLogin } from "../interfaces/UserLogin";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const login = async (userInfo: UserLogin) => {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(userInfo),
    });

    if (res.ok) {
      const {token} = await res.json();
      localStorage.setItem("authToken", token)
      return true
    } else {
    
    }
  }

}

export { login };
