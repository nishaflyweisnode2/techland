const event = require('../models/event_model');


exports.createEvent = async (req, res) => {
    try {
        const data = {
            eventname: req.body.name,
            eventdate: req.body.date,
            eventDesc: req.body.desc
        }
        console.log(data);
        const EventData = await event.create(data);
        console.log(EventData);
        res.status(200).json({
            message: "Event Created ",
            details: EventData
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }

}


exports.getEventById = async (req, res) => {
    try {
        const eventDetails = await event.findById({ _id: req.params.id });
        console.log(eventDetails);
        res.status(200).json({
            details: eventDetails
        })
    } catch (err) {
        console.log(err);
    }
}


exports.allEvent = async (req, res) => {
    try {
        const allevent = await event.find();
        console.log(allevent);
        res.status(200).json({
            message: "All Events ",
            Data: allevent
        })
    } catch (err) {
        console.log(err);
        res.status(200).json({
            message: err.message
        })
    }
}

exports.DeleteEvent = async (req, res) => {
    try {
        const id = req.params.id;
        await event.deleteOne({ _id: id });
        res.status(200).send({ message: "Event  deleted " })
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message })
    }
}

exports.eventUpdate = async (req, res) => {
    try {

        const UpdatedData = await event.findOneAndUpdate({ _id: req.params.id }, {
            eventname: req.body.name,
            eventdate: req.body.date,
            eventDesc: req.body.desc
        }).exec();
        console.log(UpdatedData);
        res.status(200).send({ message: "Event Updated  " })
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message })
    }
}