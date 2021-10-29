const mongoose = require('mongoose')

const bookScema = new mongoose.Schema({
    Title : {
        type : String,
        require : true
    },
    Author : {
        type : String,
        require : true
    },
    Description : { 
        type : String,
        require : true
    },
    Type: {
        type : String,
        require : true
    },
    Genre: {
        type: String,
        require: true,
    },
    Cover: {
        type: String,
        require: true,
    },
    File: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('book', bookScema)