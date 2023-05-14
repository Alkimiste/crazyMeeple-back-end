import { ArticleModel } from '../models/article.model'
import { Article } from '../models/types.article'

export class ArticleService {
  // Retrieves all articles
  async getAllArticles(): Promise<Article[]> {
    const articles = await ArticleModel.find({})
    return articles
  }

  // Retrieves an article by ID
  async getArticleById(id: string): Promise<Article | null> {
    const article = await ArticleModel.findById(id)
    if (!article) {
      return null
    }
    return article
  }

  // Creates a new article
  async createArticle(title: string, description: string, price: number, image: string): Promise<Article> {
    const article = new ArticleModel({
      title,
      description,
      price,
      image
    })
    await article.save()
    return article
  }

  // Updates an article by ID
  async updateArticleById(id: string, title: string, description: string, price: number, image: string ): Promise<Article | null> {
    const updatedArticle = await ArticleModel.findByIdAndUpdate(id, {title, description, price, image}, { new: true}). orFail()
    return updatedArticle
  }

  // Deletes an article by ID
  async deleteArticleById(id: string): Promise<Article | null> {
    const article = await ArticleModel.findByIdAndDelete(id)
    if (!article) {
      return null
    }
    return article
  }
}