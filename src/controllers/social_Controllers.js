const { RDS } = require('aws-sdk');
const social = require('../models/google_models');





exports.AddUserData = async(req,res) => {
    try{
    const data = {
        userId : req.body.uuid, 
        email: req.body.email, 
        name: req.body.name
    }
    const userData = await social.create(data)
    console.log(userData)
    res.status(200).json({
        message: userData
    })
}catch(err){
    console.log(err)
    res.status(400).json({
        message: err.message
    })
}
}