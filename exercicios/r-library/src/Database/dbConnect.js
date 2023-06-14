const mongoose = require("mongoose");

const connect = async () => {
    try {
        mongoose.connect(
            "mongodb+srv://nataliadepaiva:20176007Na@cluster0.t2jlipy.mongodb.net/rlibrary",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
            );
            console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect