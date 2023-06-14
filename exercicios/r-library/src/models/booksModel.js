const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: ()=> new mongoose.Types.ObjectId()
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    launchYear: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    writer: {
        type: [String], // com o [] já entende que é um array de autores
        required: true
    },
    pages: Number

})

const Model = mongoose.model('BookModel', BookSchema)

module.exports = Model