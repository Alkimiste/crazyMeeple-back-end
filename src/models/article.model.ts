import { model, Schema } from 'mongoose'
import { Article } from '../models/types.article'

const articleSchema = new Schema<Article>(
  {
    title: {
      type: String,
      required: true,
      
    },
    description: {
      type: String,
      required: true,
      
    },
    price: {
      type: Number,
      required: true,
     
    },
    image : {
      type: String,
      required: true,
      
    },
  },
)

export const ArticleModel = model<Article>('Article', articleSchema)