// Import the jsonwebtoken package
import jwt from "jsonwebtoken"

// Create a function called generateAccessToken that takes in a user object as an argument
const generateAccessToken = async (user) => {
  // Call the sign() method from the jsonwebtoken package to generate a new token.
  // The sign() method takes in three arguments: the payload, a secret key, and an options object.
  // In this case, the payload is an object with a property of "user" whose value is the user object that was passed in as an argument.
  // The secret key is stored in the environment variable JWT_ACCES_TOKEN, and the expiration time is stored in the environment variable JWT_ACCES_EXP.
  const token = jwt.sign({ user }, process.env.JWT_ACCES_TOKEN, {
    expiresIn: process.env.JWT_ACCES_EXP,
  })
  
  // Return the generated token
  return token
}

// Export the generateAccessToken function as the default export of this module
export default generateAccessToken