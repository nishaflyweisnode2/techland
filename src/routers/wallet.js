const express = require('express')
const walletContrallers = require("../controllers/wallet");



const router = express();

router.post('/wallet', walletContrallers.createWallet);
router.post('/wallet/add', walletContrallers.addMoney);
router.post('/wallet/remove', walletContrallers.removeMoney);
router.post('/wallet/:id', walletContrallers.getWallet);





module.exports = router ; 