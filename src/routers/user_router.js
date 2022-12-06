const express = require('express'); 
const userControllers = require('../controllers/user_controllers');
const userProfile = require('../controllers/userProfile');
const veriftToken = require('../middleware/auth_check')

const router = express();


router.post('/login', userProfile.login);
router.post('/verify', userProfile.verifyOTP)
router.post('/userinfo', userControllers.AddUserInfo);
router.put('/editinfo/:id', userControllers.UpdateUserInfo)
router.post('/addprofile', userProfile.userProfile);
router.put('/update/:id', userProfile.userProfileUpdate);
router.delete('/delete/:id',[ veriftToken.veriftToken, userProfile.DeleteUser]);



module.exports = router; 

