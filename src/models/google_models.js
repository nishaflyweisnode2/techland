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
    },
    referCode : {
        type : String, 
        unique: true
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

// createWallet = async (req, res) => {
//     const w = await Wallet.create({ user: userProfile._id});
//     res.status(200).json({
//       status: "success",
//       data: w,
//     });
//   };

socialSchema.pre("save", function (next) {
    const refer = generateOTP() + this.username
    this.referCode = refer;
    console.log("generated referal Code!");
    next();
  });


const Social = mongoose.model("social", socialSchema);

module.exports = Social;