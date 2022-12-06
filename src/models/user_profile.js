const mongoose = require('mongoose'); 
const Wallet = require('./wallet');


const userprofile  = mongoose.Schema({
    username: {
        type: String, 
    }, 
    email: {
        type: String,
        unique: true
    }, 
    mobile: {
        type: Number,
    },
    password : {
        type: String
    }, 
    confirmPassword: {
        type: String
    },
    otp : {
        type: Number,
        default: 0
     },
     referStatus: {
        type: String,
        default: "unused",
        enum: ["used", "unused"],
      },
    referCode : {
        type : String, 
        unique: true
    }

})

function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

// createWallet = async (req, res) => {
//     const w = await Wallet.create({ user: userProfile._id});
//     res.status(200).json({
//       status: "success",
//       data: w,
//     });
//   };

userprofile.pre("save", function (next) {
    const refer = generateOTP() + this.username
    this.referCode = refer;
    console.log("generated referal Code!");
    next();
  });


  
// createWallet = async (req, res) => {
//     const w = await Wallet.create({ user: this._id });
//     res.status(200).json({
//       status: "success",
//       data: w,
//     });
//   };


const userProfile  = mongoose.model('userprofile', userprofile); 

module.exports = userProfile;