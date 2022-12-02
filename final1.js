const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const EventEmitter = require('events');
const route = express.Router();
mongoose.connect('mongodb://localhost:27017/e-comm');
const app = express();
const event = new EventEmitter();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
        }
    })
}).array('user_file');
app.get('/upload', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'express/html', 'fileupload.html'))
});

app.post('/upload', upload, (req, resp) => {
    resp.send('file upload done');
});
app.listen(5000);