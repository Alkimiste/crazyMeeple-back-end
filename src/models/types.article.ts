import { Document } from 'mongoose'

export interface Article extends Document {
  title: String
  description: String
  price: Number
  image: String
}