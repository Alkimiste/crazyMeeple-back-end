import express from 'express'
import { articleController } from '../../controllers/article.controller'

const router = express.Router()

router.get('/', articleController.getAllArticles)
router.get('/:id', articleController.getArticleById)
router.post('/', articleController.createArticle)
router.put('/:articleId', articleController.updateArticleById)
router.delete('/:id', articleController.deleteArticleById)

export default router