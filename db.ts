const mongoose = require('mongoose')
const config = require('./config.json')


const dbConfig = config.db
const connectionString = `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}?authSource=admin`
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