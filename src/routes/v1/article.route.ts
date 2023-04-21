import express from 'express'
import { articleController } from '../../controllers'
import { validate } from 'express-validation'
import { getArticleById, createArticle, updateArticleById, deleteArticleById } from '../../validations/article.validation'


const router = express.Router()

router.get('/',articleController.getAllArticles)
router.get('/:id', validate(getArticleById), articleController.getArticleById)
router.post('/', validate(createArticle), articleController.createArticle)
router.put('/:id', validate(updateArticleById), articleController.updateArticleById)
router.delete('/:id', validate(deleteArticleById), articleController.deleteArticleById)

export default router