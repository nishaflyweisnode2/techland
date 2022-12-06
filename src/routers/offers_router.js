const express = require('express')
const offer_controllers = require('../controllers/offers_controllers');
const veriftToken = require('../middleware/auth_check');


const router = express();

router.post('/offer', [veriftToken.veriftToken, offer_controllers.uploadImg, offer_controllers.addoffer]);
router.get('/offer', [veriftToken.veriftToken, offer_controllers.getOffers]);
router.delete('/offer/:id', [veriftToken.veriftToken, offer_controllers.deleteOffers])


module.exports = router;


