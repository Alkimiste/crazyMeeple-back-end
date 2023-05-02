const mongoose = require('mongoose')

// Connect to the MongoDB database using the connection string
mongoose.connect('mongodb://admin:password@mongo:27017/gameData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get a reference to the connection object
const db = mongoose.connection;

// Log an error message if there's an issue with the connection
db.on('error', console.error.bind(console, 'connection error:'))

// Log a message once the connection has been established
db.once('open', function () {
  console.log('Connected to MongoDB!')
});

// Export the connection object for use in other parts of the application
module.exports = db