const User = require('../models/user_profile')
const WalletModel = require('../models/wallet');




  exports.useReferCode = async (req, res, next) => {
    const user2 = await User.findOne({ referCode: req.body.code });
  
    if (!user2) {
      res.status(400).json({
        message:"Invalid Refer Code!"
      })
    }
  
    if (user2.referStatus === "used") {
      res.status(400).json({
        message:"User has already used Referal Code!"
      })
    }
  
  
    // Adding money to Old User
    const wallet2 = await WalletModel.findOne({ user: user2._id });
    wallet2.balance = wallet2.balance + 30;
    await wallet2.save();
  
    res.status(200).json({
      status: "success",
    });
  };