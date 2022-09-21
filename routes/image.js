const multer  = require('multer')

var upload = multer({ dest: 'uploads/' })
var cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'data', maxCount: 1 }])

module.exports = function(app){
    app.post('/get-data', cpUpload, function (req, res, next){
        console.log("image:", req.files['image']);
        console.log("data:", req.files['data']);
        res.send("hello");
    });
}