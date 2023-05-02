const mongoose = require('mongoose')
const config = require('./config.json')

const dbConfig = config.db
const connectionString = `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  console.log('Connected to MongoDB!')
  // Create the admin user
  db.db.createUser({
    user: 'admin',
    pwd: 'password123',
    roles: [{ role: 'readWrite', db: dbConfig.name }]
  }, function(err: any, result: any) {
    if (err) {
      console.error(err)
      return
    }

    console.log('Admin user created')
  })
})

module.exports = db