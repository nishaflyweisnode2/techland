const express = require('express'); 
const terms = require('../controllers/terms_cntrollers');
const verifyToken = require('../middleware/auth_check')

const router = express();



router.post('/terms', [  terms.addterms]);
router.get('/terms', [  terms.getterms]);
router.put('/terms/:id',[ terms.updateterms]);
router.delete('/terms/:id',[  terms.DeleteTerms]);


module.exports = router;