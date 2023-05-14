import express from 'express'
import { createValidationMiddleware } from '../validations/user.validation'
import { createUserSchema, loginSchema } from '../validations/user.validation'
import { loginUserController, createUserController } from '../controllers/user.controller'

const authRouter = express.Router();

authRouter.post('/signup', createValidationMiddleware(createUserSchema), createUserController)
authRouter.post('/login', createValidationMiddleware(loginSchema), loginUserController)
authRouter.get('/logout')

export default authRouter