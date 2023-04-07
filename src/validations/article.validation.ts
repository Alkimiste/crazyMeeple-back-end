import Joi from 'joi'



export const getArticleById = {
  params: {
    id: Joi.string().required(),
  }
}

export const createArticle = {
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required()
  }
}

export const updateArticleById = {
  params: {
    id: Joi.string().required(),
  },
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required()
  }
}

export const deleteArticleById = {
  params: {
    id: Joi.string().required(),
  }
 
}