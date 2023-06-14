const mongoose = require('mongoose') //importando mongoose

const BookSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        launcheYear: {
            type: Number,
            required: true,
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
            type: String,
            required: true
        },
        writer: {
            type: String,
            required: true
        },
        pages: Number
    }
)

const Model = mongoose.model('Book', BookSchema)

module.exports = Model