
// Import the express module
import express, { Request, Response } from 'express'
// Import the routes for the article resource
import articleRoutes from './src/routes/article.route'

// Import the database connection
import './db'

// Create an instance of the express application
const app = express()

// Set the port number to listen on
const PORT = 3000

// Set up middleware to parse incoming JSON payloads
app.use(express.json())

// Set up middleware to parse incoming URL-encoded payloads
app.use(express.urlencoded({ extended: true }))

// Set up the routes for the article resource
app.use('/articles', articleRoutes)

// Add a default route to handle requests to the root URL
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
});