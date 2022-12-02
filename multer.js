const multer = require('multer');
const express = require('express');
const app = express();
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
        }
    })
}).single('user_file');

app.get('/upload', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'express/html', 'fileupload.html'))
});

app.post('/upload', upload, (req, resp) => {
    console.log('jjj');
    resp.send('file upload done.');
});

app.listen(5000);