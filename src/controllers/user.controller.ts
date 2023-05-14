import { Request, Response } from 'express'
import { createUser, loginUser, logoutUser } from '../services/user.service'
import generateAccessToken from '../utils/token'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

// Hash password
const hashedPassword = await bcrypt.hash(password, 10)// salt = 10x
    

// create user
    const user = await createUser(name, email, hashedPassword)
    
    res.status(201).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body
   
    
    // login user
    const user = await loginUser(email)
    const passwordMatch = await bcrypt.compare(password, user.password)
    
    console.log(user)
      if (!passwordMatch) {
        res.status(400).json({
          error: 'Mot de pas incorrect !',
          fields: req.body.password,
        })
      }
      const token = generateAccessToken(user)
  
    res.status(200).json( user, token )
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
};

export const logoutUserController = async (req: Request, res: Response) => {
  try {
    // logout user
    await logoutUser()

    res.clearCookie('token').status(200).json({ message: 'Déconnecté' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
}

