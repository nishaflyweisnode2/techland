const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
    eventname : {
        type: String, 
    }, 
    eventdate : {
        type: Date
    }, 
    eventDesc : {
        type: String
    }
})

const event_Model = mongoose.model('event', eventSchema);

module.exports = event_Model;