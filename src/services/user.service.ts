// Import the UserModel from the user.model file
import { UserModel } from '../models/user.model'

// Function to create a new user with the provided name, email, and password
export const createUser = async (name: string, email: string, password: string) => {
  try {
    // Check if user already exists with the provided email
    const userExists = await UserModel.findOne({ email })
    if (userExists) {
      throw new Error('This email is already in use')
    }

    // Create a new user with the provided name, email, and password
    const newUser = new UserModel({
      name,
      email,
      password,
    })

    // Save the new user to the database
    const savedUser = await newUser.save()

    return savedUser

  } catch (error) {
    console.error(error)
    throw new Error('Server error')
  }
};

// Function to log in a user with the provided email
export const loginUser = async (email: string) => {
  try {
    // Find the user with the provided email in the database
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error("This email doesn't exist")
    }

    // Return the found user
    return user

  } catch (error) {
    console.error(error)
    throw new Error('Server error')
  }
}

// Function to log out a user
export const logoutUser = async () => {
  // Logic for user logout
}