const mongoose = require('mongoose')
const config = require('./config.json')


const dbConfig = config.db
const connectionString = `mongo-db://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`
console.log(connectionString)
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  console.log('Connected to MongoDB!')
  
})

export { db }