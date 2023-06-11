const mongoose = require("mongoose"); // importação da biblioteca do mongoose

const connect = async () => {
    try {
        mongoose.connect(
           "mongodb+srv://lanepereira596:galinha123@cluster0.i3ylhg9.mongodb.net/rlibrary",
            {
             useNewUr/Parser:true,
             useUniFiedTopoLogy:true
            }
         );
          console.log("garota tá on");
      } catch(error) {
        console.log(error);
 }

  module.exports = connect;