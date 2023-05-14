
import Joi from 'joi'

// Defining a validation schema for the 'id' parameter of the 'getArticleById' API endpoint
export const getArticleById = {
params: {
id: Joi.string().required(), // 'id' must be a string and is required
},
}

// Defining a validation schema for the request body of the 'createArticle' API endpoint
export const createArticle = {
body: {
title: Joi.string().required(), // 'title' must be a string and is required
description: Joi.string().required(), // 'description' must be a string and is required
price: Joi.number().required(), // 'price' must be a number and is required
image: Joi.string().required(), // 'image' must be a string and is required
},
}

// Defining a validation schema for the 'id' parameter and request body of the 'updateArticleById' API endpoint
export const updateArticleById = {
params: {
id: Joi.string().required(), // 'id' must be a string and is required
},
body: {
title: Joi.string().required(), // 'title' must be a string and is required
description: Joi.string().required(), // 'description' must be a string and is required
price: Joi.number().required(), // 'price' must be a number and is required
image: Joi.string().required(), // 'image' must be a string and is required
},
}

// Defining a validation schema for the 'id' parameter of the 'deleteArticleById' API endpoint
export const deleteArticleById = {
params: {
id: Joi.string().required(), // 'id' must be a string and is required
},
}





