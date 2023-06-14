const mongoose = require ("mongoose")

const BookSchema = new mongoose.Schema(
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
        launchYear: {
            type: Number,
            required: true, 

        },
        available:{
            type: Boolean,
            requerided: true,
            
        },
        publisher: {
            type: String,
            requerided: true
        },
        gender:{
           type: String,
           requerided: true 
        },
        writer: {
            type: String,
            requerided: true
        },
        pages: Number

    }
)
const Model = mongoose.model("Book", BookSchema)

module.exports = Model