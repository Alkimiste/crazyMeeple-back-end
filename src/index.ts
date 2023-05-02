import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './db'

import articleRouter from './routes/article.route'

const app = express()
const port = process.env.PORT || 3000

// enable CORS
app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// define a route handler for the articles routes
app.use('/articles', articleRouter)

// start the Express server
db.once('open', function () {
  console.log('Connected to MongoDB!')
  app.listen(port, () => {
    console.log(`App listening on port ${port}...`)
  });
});