const express = require('express');
const multer = require('multer');
const path = require('path')
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination:function (req,file,cb){
            cb(null,'uploads');
        },
        filename:function (req,file,cb){
            cb(null,file.fieldname+Math.random()+path.extname(file.originalname));
            console.log(file.originalname);
        }
    })
}).array('user_file');

app.get('/upload', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'express/html', 'fileupload.html'))
});

app.post("/upload", upload, (req, resp) => {
    resp.send("file upload")
});

app.listen(5000)