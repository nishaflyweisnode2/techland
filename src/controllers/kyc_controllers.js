const  multer = require('multer');
const path = require('path'); 


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './documents');
//     },
//     filename: function (req,res, file, cb) {
//       console.log(req.originalname)
//       if(req.originalname === null){
//          res.status(400).json("Select your File ")
//       }
//         const uniqueName = `${Date.now()}-${Math.round(
//             Math.random() * 1e9
//           )}${path.extname(file.originalname)}`;
//           cb(null, uniqueName);
//     }
//   });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './documents');
    },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});


exports.uploadImg =  multer({ storage : storage }).array('document',3);


exports.uploadKyc = async(req, res) => {
  try{
  const data = {
      image: req.file.path
  }
console.log(data)
res.send("Kyc is Done ");
}catch(err){
  console.log(err);
  res.status(400).json({
      message: err.message
  })

}
}