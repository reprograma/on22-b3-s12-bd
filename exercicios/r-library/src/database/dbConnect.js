const mongoose = require("mongoose");

const connect = async () => {
    try {

        mongoose.connect(
            "mongodb+srv://tissianass:14t10s82s@cluster0.fxcf9on.mongodb.net/rlibrary",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }

            );
            console.log("Database connect");

    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;
