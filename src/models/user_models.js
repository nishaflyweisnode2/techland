const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
     phone : {
        type: Number, 
     },
     otp : {
        type: Number
     }

})

const User = mongoose.model('user', userSchema); 

module.exports = User;