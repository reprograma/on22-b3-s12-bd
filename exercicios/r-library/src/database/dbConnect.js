const mongoose = require('mongoose')

const connect = async () => {  //Fazendo a conexão com o banco
    try {
        mongoose.connect(
            'mongodb+srv://anjinhaoliveira:NaYkemQL0AKyLtr8@cluster0.wcz6rzc.mongodb.net/rlibrary',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log('Database connected')

    } catch (error) {
        console.log(error)
    }
}
module.exports = connect