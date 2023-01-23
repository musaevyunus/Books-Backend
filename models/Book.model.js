const mongoose = require('mongoose')

const bookShema = mongoose.Schema({
    name: String,
    author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Author'
    },
    janr: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Janr'
    }
})

const Book = mongoose.model('Book', bookShema)
module.exports = Book