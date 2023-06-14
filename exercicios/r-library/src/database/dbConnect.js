const DB_MONGO = process.env.DB_MONGO
const mongoose = require('mongoose')

const connect = async () =>{
    try {
        mongoose.connect(DB_MONGO,
            {useNewUrlParser: true, useUnifiedTopology: true}
            //usa essa url e passa as infos que tão sendo passadas por ela newurlparser
        )
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect