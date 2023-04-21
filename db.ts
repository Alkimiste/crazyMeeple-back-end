const mongoose = require('mongoose')

mongoose.connect('mongodb://Antho:meepleRun@0.0.0.0:27017/gameData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB!')
});

module.exports = db