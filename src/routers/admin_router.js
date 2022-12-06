const express = require('express'); 
const AdminControlers = require('../controllers/admin_auth');
const verifyAdmin = require('../middleware/isAdmin')
const verifyToken = require('../middleware/auth_check');

const router = express();


router.post('/signup', AdminControlers.AdminProfile);
router.post('/login', [ verifyAdmin.isAdmin, AdminControlers.AdminLogin]);
router.get('/allusers',[verifyToken.veriftToken, AdminControlers.AllUsers]);
router.put('/update/:id',[verifyToken.veriftToken, AdminControlers.AdminUpdate]);



module.exports = router;