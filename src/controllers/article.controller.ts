import { Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import { ArticleService } from '../services/article.service'

const articleService = new ArticleService()

export const articleController = {
  getAllArticles: catchAsync(async (req: Request, res: Response) => {

    const article = await articleService.getAllArticles()

    if (!article) {
      res.status(404).json({ error: 'Article not found' })
      return
    }
    res.status(200).json(article)
  }),

  getArticleById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const articles = articleService.getArticleById(id)

    if (!id) {
      res.status(404).json({ error: `Article with ID ${id} not found` })
      return
    }
    res.status(200).json(articles)
    return
  }),

  createArticle: catchAsync(async (req: Request, res: Response) => {
    const { title, description, price, image } = req.body

    const createdArticle = await articleService.createArticle(title, description, price, image)

    res.status(200).json(createdArticle)

  }),

  updateArticleById: catchAsync(async (req: Request, res: Response) => {
    const { title, description, price, image } = req.body

    const articleId = req.params.articleId
      
    const updatedArticle = await articleService.updateArticleById(articleId, title, description, price, image)
      
    res.status(200).json(updatedArticle)
  }),

  deleteArticleById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params

    const deletedArticle = await articleService.deleteArticleById(id)

    if (!deletedArticle) {
      return res.status(404).json(`Article with ID ${id} not found`)
    }
    res.status(200).json(deletedArticle)
  })
}