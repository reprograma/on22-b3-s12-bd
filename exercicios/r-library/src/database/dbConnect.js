const DB_MONGO= process.env.DB_MONGO
const mongoose  = require("mongoose");//chamando o banco de dados
//conectando o banco
const connect = async ()=>{
    try {
        mongoose.connect(
            DB_MONGO,
            {
              useNewUrlParser: true,//usando a url para traduzir o codigo
              useUnifiedTopology: true
            }
        );
        console.log("ta rodando o database");
    } catch (error) {
        console.log(error);
    }
};
module.exports = connect