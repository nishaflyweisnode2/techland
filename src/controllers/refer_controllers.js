const User = require('../models/user_profile')
const WalletModel = require('../models/wallet');




  exports.useReferCode = async (req, res, next) => {
    const user2 = await User.findOne({ referCode: req.body.code });
  
    if (!user2) {
      res.status(400).json({
        message:"Invalid Refer Code!"
      })
    }
    console.log(user2)
  
    // if (user2.referStatus === "used") {
    //   res.status(400).json({
    //     message:"User has already used Referal Code!"
    //   })
    // }
  
  
    // Adding money to Old User
    const id = user2._id;
    console.log(id)
    const wallet2 = await WalletModel.find({ user: id });
    console.log(wallet2)
    wallet2.balance = wallet2.balance + 30;
    await WalletModel.updateOne({user: id}, {

      balance : wallet2.balance
    }
      )
    await User.updateOne({referCode: req.body.code},{
      referStatus : "used"
    }
      )
  
    res.status(200).json({
      status: "success",
    });
  };