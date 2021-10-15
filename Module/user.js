const mongoose = require('mongoose')

const userScema = new mongoose.Schema({
    FirstName : {
        type : String,
        require : true
    },
    LastName : {
        type : String,
        require : true
    },
    Password : { 
        type : String,
        require : true
    },
    Email : {
        type : String,
        require : true
    },
    admin : {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('User', userScema)