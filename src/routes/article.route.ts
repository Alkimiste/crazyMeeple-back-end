const express = require('express')
const router = express.Router()
const { articleController } = require('../controllers/article.controller')

// GET all articles
router.get('/', articleController.getAllArticles)
// GET a single article by ID
router.get('/:id', articleController.getArticleById)
// POST create a new article
router.post('/', articleController.createArticle)
// PUT update an existing article
router.put('/:articleId', articleController.updateArticleById)
// DELETE an article by ID
router.delete('/:id', articleController.deleteArticleById)

export default router