const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/Score', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
console.log('Database Connection complete')

module.exports = db
