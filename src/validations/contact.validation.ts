import Joi from "joi"

export const sendContactMessage = {
  body: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required()
  }
}

