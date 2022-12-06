const express = require('express'); 
const policyControllers = require('../controllers/policy_controllers');
const verifyToken = require('../middleware/auth_check')

const router = express();



router.post('/policy',[  policyControllers.addPrivacy]);
router.get('/policy',[  policyControllers.getPrivacy]);
router.put('/policy/:id',[ policyControllers.updatePolicy]);
router.delete('/policy/:id',[ policyControllers.DeletePolicy])


module.exports = router;