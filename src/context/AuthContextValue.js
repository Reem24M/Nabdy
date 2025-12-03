import { createContext } from "react";

export const AuthContext = createContext({
  role: "guest",
  login: () => {},
  logout: () => {},
  signup:()=>{}
});
