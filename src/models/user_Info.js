const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

const personalInfo = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String,
    },
    location: 
        {
            type: String
        },
        zipcode : {
            type: Number
        },
    pancard: {
        type: String
    }, 
    aadhercard : {
        type: String
    }, 
    age: {
        type: Number
    }, 
    occuption : {
        type: String
    }, 
    NetWorth : {
        type: String
    },
   

})


function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

personalInfo.pre("save", function (next) {
    const refer = generateOTP() + this.name
    this.ReferCode = refer;
    console.log("generated referal Code!");
    next();
  });


const UserInfo = mongoose.model('userInfo', personalInfo);

module.exports = UserInfo