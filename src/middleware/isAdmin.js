const AdminModel = require('../models/admin_model');



module.exports = {
    isAdmin: async (req, res, next) =>{
           const AdminData = await AdminModel.find({email: req.body.email})
            console.log(AdminData[0].role);
            if(AdminData[0].role === 'admin'){
                next()
            }else {
                res.status(400).json({
                    message : "You are not Admin "
                })
            }
        }
    }
