const mongoose = require("mongoose");

const connect = async () => {
    try {
            mongoose.connect(
            "mongodb+srv://juliangdolago:Batata!23@cluster0.va3gbvo.mongodb.net/rlibrary",
            {useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("Konoha ta on");
    } catch (error) {
        console.log(error); 
    }
}

module.exports = connect;