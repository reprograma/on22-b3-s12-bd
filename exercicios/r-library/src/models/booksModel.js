const mongoose = require("mongoose") // importando o mongodb

const BookSchema = new mongoose.Schema(
    {
        _id: { // para automatizar ID
            type: mongoose.Schema.Types.ObjectId,
            default: ()=> new mongoose.Types.ObjectId()
        },
        title: { // titulo
            type: String,
            required: true, // se é obrigatório ou não, true ou false
            unique: true // se é unico ou não, true ou false
        },
        launchYear:{ // ano de lançamento
            type: Number,
            required: true,
        },
        available:{ // disponibilidade
            type: Boolean,
            required: true
        },
        publisher: { // editora
            type: String,
            required: true
        },
        gender: { //genre é genero, Gaia escreveu errado
            type: String,
            required: true
        }, 
        writer: {type: [String],required: true},// outro jeito para escrever, pode ser na mesma linha. 
        //Mais de um autor colocar String entre colchetes
        pages: Number // informação direta, sem required e sem unique. 
    }

)

const Model = mongoose.model("Book", BookSchema)// o "Book" pode ser qualquer nome

module.exports = Model


