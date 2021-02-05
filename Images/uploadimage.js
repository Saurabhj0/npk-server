let multer  = require('multer');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/courses/images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
let upload = require('express').Router().post('/',multer({storage: storage}).single('image'),function(req, res) {
    
    if(!req.file) {
      res.status(500);
      return err;
    }
    res.json({ fileUrl: 'http://localhost:8080/courses/images/' + req.file.filename });
  })
  
module.exports=upload;