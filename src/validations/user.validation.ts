// Import the Joi library for input validation
import Joi from 'joi'

// Import the RequestHandler interface from the Express library
import { RequestHandler } from 'express'

// Define a schema for validating user input when creating a new user
export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

// Define a schema for validating user input when logging in
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

// Define a middleware function that validates user input based on a given schema
export const createValidationMiddleware = (schema: Joi.ObjectSchema): RequestHandler => {
  // Return a function that takes in the request, response, and next function as arguments
  return (req, res, next) => {
    // Validate the request body based on the provided schema
    const { error } = schema.validate(req.body);
    // If there is an error in validation, return a 400 status code and the error message
    if (error) {
      return res.status(400).json({ message: error.message })
    }
    // Otherwise, move on to the next middleware function
    next()
  }
}
