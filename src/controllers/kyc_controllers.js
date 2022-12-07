const  multer = require('multer');
const path = require('path'); 


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './documents');
    },
    filename: function (req,res, file, cb) {
      console.log(req.originalname)
      if(req.originalname === null){
         res.status(400).json("Select your File ")
      }
        const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
          )}${path.extname(file.originalname)}`;
          cb(null, uniqueName);
    }
  });

const  upload = multer({ storage : storage }).array('document',3);


exports.uploadsKyc = (req,res) => {
  console.log("checks");
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.send("Kyc is Done ");
    });
}