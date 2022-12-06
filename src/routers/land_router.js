const express = require('express');
const landControllers = require('../controllers/land_controllers');
const verifyToken = require('../middleware/auth_check')


const router = express();

router.post('/land', [verifyToken.veriftToken, landControllers.uploadImg, landControllers.addland]);
router.get('/land', [verifyToken.veriftToken, landControllers.getland]);
router.get('/land/:id', [verifyToken.veriftToken, landControllers.getlandById]);
router.put('/land/:id', [verifyToken.veriftToken, landControllers.landUpdate]);
router.delete('/land/:id', [verifyToken.veriftToken, landControllers.Deleteland]);




module.exports = router;