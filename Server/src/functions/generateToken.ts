import jwt from "jsonwebtoken";

type TokenType = "ACCESS" | "REFRESH";

export const generateToken = (payload: { id: String }, tokenType: TokenType): any => {
  if (tokenType === "ACCESS") {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    if (!accessTokenSecret) return null;
    return jwt.sign(payload, accessTokenSecret, { expiresIn: "15m" });
  }
  if (tokenType === "REFRESH") {
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
    if (!refreshTokenSecret) return null;
    return jwt.sign(payload, refreshTokenSecret, { expiresIn: "1d" });
  }
  return null;
};