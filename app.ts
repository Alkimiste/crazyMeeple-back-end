import express from 'express'
import cors from 'cors'
import articleRouter from './src/routes/article.route'
import userRouter from './src/routes/user.route'

const app = express()

// enable CORS
app.use(cors())

// Middleware to parse JSON body of incoming requests
app.use(express.json())

// Routes
app.use('/articles', articleRouter)
app.use('/users', userRouter)

// Start server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

require('./db')