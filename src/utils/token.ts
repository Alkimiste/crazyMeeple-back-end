import jwt from "jsonwebtoken"

const generateAccesToken = async (user) => {
    const token = jwt.sign({ user}, process.env.JWT_ACCES_TOKEN, {
      expiresIn: process.env.JWT_ACCES_EXP,
    });
    return token;
  };

export default generateAccesToken