const express = require('express'); 
const eventControllers = require('../controllers/event_controllers');
const verifyToken = require('../middleware/auth_check')


const router = express();



router.post('/event', [ verifyToken.veriftToken, eventControllers.createEvent]);
router.get('/event',  [ verifyToken.veriftToken,eventControllers.allEvent ]);
router.put('/event/:id', [ verifyToken.veriftToken, eventControllers.eventUpdate ]);
router.delete('/event/:id', [ verifyToken.veriftToken, eventControllers.DeleteEvent]);
router.get('/event/:id', [ verifyToken.veriftToken, eventControllers.getEventById])


module.exports = router;