const mongoose = require("mongoose")
const connect = async () =>{
   try {
    mongoose.connect(
        "mongodb+srv://sarahberna799:Morgana2018@cluster0.1bnc5a2.mongodb.net/rlibrary",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
          );
          console.log("corret right")
   } catch (error) {
    
   } 
}
module.exports = connect