const mongoose = require('mongoose')

const connect = async () => {
    try {
        mongoose.connect('mongodb+srv://anjinhaoliveira:<password>@cluster0.wcz6rzc.mongodb.net/')
    } catch (error) {
        
    }
}