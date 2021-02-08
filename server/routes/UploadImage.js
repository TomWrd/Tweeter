var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname.split(".")[0] + Math.floor(Math.random() * 1000000) + "." + file.originalname.split(".")[1]);
    }
})
const upload = multer({storage: storage});


router.post('/', upload.single('tweetImage') , function(request, res) {
    res.status(200).send({file: "/uploads/" + request.file.filename});
});

module.exports = router;

