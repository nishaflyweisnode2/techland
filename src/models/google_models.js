const mongoose = require('mongoose');



const socialSchema = mongoose.Schema({
    userId : {
        type: String
    }, 
    email: {
        type: String
    }, 
    name: {
        type:String
    }
})


const Social = mongoose.model("social", socialSchema);

module.exports = Social;