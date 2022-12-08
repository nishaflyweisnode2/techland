const express = require('express'); 
const ImagesUploads = require('../controllers/kyc_controllers')

const router = express();


router.post('/kyc', [ImagesUploads.uploadsKyc ]);



module.exports = router;