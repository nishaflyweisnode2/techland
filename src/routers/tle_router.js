const express = require('express'); 
const tle_controllers = require('../controllers/tle_controllers');
const verifyToken = require('../middleware/auth_check')

const router = express();

router.post('/addtle', tle_controllers.AddTLE);
router.get('/gettlt', tle_controllers.GetTLT);
router.put('/editTLT/:id',  [verifyToken.veriftToken, tle_controllers.updateTLT])


module.exports  = router;
