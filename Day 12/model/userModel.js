const mongoose = require("mongoose");
 const user =  mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true,

    },
    password: {
        type: String,
        require: true,

    },
    image: {
        type: String,
        require: true,

    },
    mobile: {
        type: Number,
        require: true,

    },
    

})

// create model

 const  User = mongoose.model('user', user)
 module.exports = User;