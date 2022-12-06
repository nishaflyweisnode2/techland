const express = require('express'); 
const referControllers = require('../controllers/refer_controllers');

const router = express();


router.post('/refer/update',referControllers.useReferCode );



module.exports = router ; 