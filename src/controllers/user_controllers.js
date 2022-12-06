const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require('../models/user_models');
const UserInfo = require('../models/user_Info');
const userProfile = require('../models/user_profile');
const multer = require('multer');
const path = require('path'); 




exports.AddUserInfo = async(req,res) => {
    try{
    const data  =  {
    name: req.body.name,
    address:req.body.address,
    location: req.body.location,
    zipcode : req.body.zipcode,
    pancard: req.body.pancard,
    aadhercard : req.body.aadhercard,
    age  : req.body.age,
    occuption : req.body.occuption,
    NetWorth : req.body.NetWorth
    }
   console.log(data);
const userDetails = await UserInfo.create(data);
    
     console.log(userDetails);
   res.status(200).json({
    id: userDetails._id,
    message: "User Infomation  Created "
   })

}catch(err){
    console.log(err)
    res.status(401).send({error: err.message})
}
}

exports.UpdateUserInfo = async (req,res) => {
    try {
        if(req.body.name)
        {
            const data = {
                name: req.body.name, 
                
            }
            const UpdatedData = await UserInfo.updateOne({_id: req.params.id}, {data: data});
            res.status(200).send({message: "Name  Update  "})   
        }else {
            res.status(200).json({
                message: `Please Contact to Update  support@techland.app`
            })
        }
    }catch(err)
    {
        res.status(400).send({message: err.message})
    }
}

exports.userProfile = async(req,res ) => {
    try{
    const data = {
        username : req.body.username, 
        email: req.body.email, 
        password : bcrypt.hash(req.body.password, 8)
    }
    const userData = await userProfile.create(data); 
    res.status(200).json({
        message : "User-Profle Created "
    })
}catch(err){
    console.log(err);
}

}


exports.userProfileUpdate = async(req,res) => {
    try{
    const data = {
        username: req.body.username, 
        email: req.body.email, 
        password: bcrypt.hash(req.body.password, 8)
    }
    const UpdatedData = await userProfile.updateOne({_id: req.params.id}, {data: data});
    res.status(200).send({message: "Profile Update "})
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
}

exports.DeleteUser = async(req,res) => {
    try {
    const id = req.params.id; 
    await userProfile.deleteOne({_id: id});
    res.status(200).send({message: "User deleted "})
    }catch(err){
      console.log(err); 
      res.status(400).send({message: err.message})
    }
}


