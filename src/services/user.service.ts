import { UserModel } from '../models/user.model'
import bcrypt from 'bcrypt'

export const createUser = async (name: string, email: string, password: string) => {
  try {
    // check if user exists
    const userExists = await UserModel.findOne({ email })
    if (userExists) {
      throw new Error('Cet email est déjà utilisé')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)// salt = 10x

    // create user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    })
    const savedUser = await newUser.save()

    return savedUser
  } catch (error) {
    console.error(error)
    throw new Error('Erreur serveur')
  }
}

export const loginUser = async (email: string) => {
  try {
    // check user
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error("Cet email n'existe pas")
    }
console.log(user)
 

    // It's ok return user
    return user
  } catch (error) {
    console.error(error)
    throw new Error('Erreur serveur')
  }
}

export const logoutUser = async () => {
  // logique pour la déconnexion de l'utilisateur
}