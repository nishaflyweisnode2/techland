const  multer = require('multer');
const path = require('path'); 


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './documents');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

const  upload = multer({ storage : storage }).array('document',3);


exports.uploadsKyc = (req,res, file) => {
    console.log("checks");
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.send("Kyc is Done ");
    });
  }