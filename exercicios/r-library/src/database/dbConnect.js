const DB_MONGO = process.env.DB_MONGO

const mongoose = require("mongoose") // importação da biblioteca do mongoose

const connect = async ()=>{
    try {
        mongoose.connect( DB_MONGO,
             
            {useNewUrlParser: true,// use o parser pegando a url para mongodb
             useUnifiedTopology: true,
            } 
            )
            console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect