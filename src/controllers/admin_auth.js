const bcrypt = require('bcryptjs');
const path = require('path'); 
require('dotenv').config()
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin_model')
const userProfile = require('../models/user_profile');


const SECRET = "demo@1234"



exports.AdminProfile = async(req,res ) => {
    try{
    const data = {
        name : req.body.name, 
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password, 8),
    }
    const userData = await Admin.create(data); 
    console.log(userData); 
    res.status(200).json({
        id : userData._id,
        message : "Admin Account  Created "
    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}


}

exports.AdminLogin = async(req,res) => {
    const email = req.body.email 
    const password = req.body.password
    const adminData = await Admin.find({email: req.body.email});
    if(!adminData){
        res.status(500).json({
            message: "this email with not Admin "
        })
    }
    const isPassword = bcrypt.compareSync(password, adminData[0].password);
    if(!isPassword)
    {
        res.status(500).json({
            message: "Password Not Match  "
        })
    }
    const token = jwt.sign({id:adminData._id},process.env.SECRET || SECRET)
    
    res.status(200).json({
        acessToken : token
    })


}


exports.AdminUpdate = async(req,res) => {
    try{
   
    const UpdatedData = await Admin.findOneAndUpdate({_id: req.params.id}, {
        name : req.body.name, 
        email: req.body.email,
    }).exec();
    console.log(UpdatedData);
    res.status(200).send({
        message: "Admin Profile Updated "
    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
}


exports.AllUsers = async(req,res) => {
    try {
    const  Allusers = await userProfile.find();
    res.status(200).json({
        Users : Allusers
    })
    }catch(err){
        console.log(err)
        res.status(400).json({
            message : err.message
        })
    }
}




