const DB_MONGO = process.env.DB_MONGO
const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.connect(
            DB_MONGO,
            {   
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log("Konoha ta on")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;

