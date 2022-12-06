const express = require('express'); 
const contactRouter = require('../controllers/contact_controllers');
const verifyToken = require('../middleware/auth_check')

const router = express();



router.post('/contact', [  contactRouter.addcontact]);
router.get('/contact',[ contactRouter.getContact])
router.put('/contact/:id',[ contactRouter.updatecontact ]);
router.delete('/contact/:id',[contactRouter.DeleteContact])


module.exports = router;