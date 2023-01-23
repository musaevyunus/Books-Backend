const mongoose = require('mongoose')

const janrShema = mongoose.Schema({
    name: String,
    text: String
})

const Janr = mongoose.model('Janr', janrShema)
module.exports = Janr
