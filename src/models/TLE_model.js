const mongoose = require('mongoose');

const tleSchema = mongoose.Schema({
    size: {
        type:Number, 
        default: 1
    }, 
    price : {
        type: Number, 
        default: 1
    },
    TLT: {
        type: Number,
        default: 1
    }
   
}) 

const TELModel = mongoose.model('tle', tleSchema);

module.exports = TELModel;