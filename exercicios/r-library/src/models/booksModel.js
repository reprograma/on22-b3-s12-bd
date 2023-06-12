const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        title:{
            type: String,
            required: true,
            unique: true
        },
        launchYear:{
            type: Number,
            required: true
        },
        available:{
            type: Boolean,
            required: true
        },
        publisher:{
            type: String,
            riquired: true
        },
        gender:{
            type: String,
            required: true
        },
        writer:{
            type: String,
            required: true
        },
        pages: Number
    }
)

const Model = mongoose.model("book", bookSchema)
module.exports = Model