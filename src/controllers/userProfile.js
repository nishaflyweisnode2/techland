const bcrypt = require('bcryptjs');
require('dotenv').config()
const userProfile = require('../models/user_profile');
const wallet = require('../models/wallet');

exports.userProfile = async(req,res ) => {
    try{
    const data = {
        username : req.body.username, 
        email: req.body.email,
        mobile:req.body.mobile,
        password : bcrypt.hashSync(req.body.password, 8),
        confirmPassword : bcrypt.hashSync(req.body.confirmPassword,8)
    }
    const userData = await userProfile.create(data); 
    console.log(userData); 
    res.status(200).json({
        id : userData._id,
        message : "SignUp -Profle Created "
    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}

}


exports.userProfileUpdate = async(req,res) => {
    try{
   
    const UpdatedData = await userProfile.findOneAndUpdate({_id: req.params.id}, {
        username: req.body.username, 
        email: req.body.email,  
        mobile: req.body.mobile,
    }).exec();
    console.log(UpdatedData);
    res.status(200).send({message: "Profile Uploaded "})
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

 // Function to generate OTP
 function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


exports.login = async(req, res ) => {
try{
 const otp = generateOTP();
 console.log(otp)
 const userData = await userProfile.updateOne({mobile: req.body.mobile}, {
    otp: otp
 })
 const userDetails = await userProfile.find({mobile: req.body.mobile})
 console.log(userDetails)
 if(userDetails.length>0 ){
 res.status(200).json({
    OTP :  userDetails[0].otp
 })
}else{
    res.status(400).json({
        message: "Mobile number Not Register "
    })
}
}catch(err)
{
    console.log(err);
    res.status(400).json({
        message: err.message
    })
}

 
}


exports.verifyOTP = async(req,res, next) => {
  const otp = req.body.otp;
  console.log(otp);
  const userData = await userProfile.find({otp: otp});

  console.log(userData)
  if(userData.length == 0){
      res.status(401).send("Otp wrong retry ");
  }else {
      res.status(200).send({
        id:userData[0]._id,
        username: userData[0].username, 
        email: userData[0].email, 
        mobile: userData[0].mobile,
        referCode: userData[0].referCode,
        TLT: userData[0].TLT
      })
  }
}



exports.purchase  = async (req,res) => {
    try{
    const balance = req.body.balance
    const WalletBalence = await wallet.find({user: req.params.id})
    if(!WalletBalence){
        res.status(400).json({
            message: "Your Wallet is Not Created "
        })
    }else{
         if(WalletBalence[0].balance  >= balance){
        const userTLT = await userProfile.updateOne({_id: req.params.id},{
            TLT: balance
        } 
            )
        console.log(userTLT)
        res.status(200).json({
            Data : "You Purchase TLT"
        })
    }else{
        res.status(400).json({
            message: "You Don't Have Money in wallet Please Add Money in wallet "
        })
    }
    }
   
}catch(err){
    res.status(400).json({
        message: err.message
    })
}


}