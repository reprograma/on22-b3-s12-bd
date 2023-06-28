const mongoose = require('mongoose')

const connect = async () => {
    try {
        mongoose.connect(
            'mongodb+srv://gessicamra:gabi0409@cluster0.00ty6gv.mongodb.net/rlibrary' ,
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            }
        )
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connect