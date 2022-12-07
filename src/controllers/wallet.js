const Wallet = require('../models/wallet')

exports.addMoney = async (req, res) => {
    const wallet = await Wallet.findOne({ user: req.body.user });
    console.log(wallet);
    console.log(req.body.balance)
    wallet.balance = wallet.balance + req.body.balance;
    console.log(wallet.balance)
     const w = await wallet.save();
  
    res.status(200).json({
      status: "success",
     data: w,
    });
  }

  exports.createWallet = async (req, res) => {
    const w = await Wallet.create({ user: req.body.user });
  
    res.status(200).json({
      status: "success",
      data: w,
    });
  };


  exports.removeMoney = async (req, res) => {
    const wallet = await Wallet.findOne({ user: req.body.user });
    //console.log(wallet);
  
    wallet.balance = wallet.balance - req.body.balance;
    const w = await wallet.save();
    console.log(w);
  
    res.status(200).json({
      status: "success",
      data: w,
    });
  };
  
  exports.getWallet = async (req, res) => {

    const wallet = await Wallet.findOne({ user: req.body.user })
    console.log(wallet)
    res.status(200).json({
      status: "success",
      data: wallet,
    });
  };
  