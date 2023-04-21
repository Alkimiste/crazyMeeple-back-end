import express from 'express'
import articleRoutes from './src/routes/v1/article.route'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/articles', articleRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})