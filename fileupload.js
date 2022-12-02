const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
mongoose.connect('mongodb://localhost:27017/e-comm');
const productScheema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
});
const productModel = new mongoose.model('products', productScheema);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            console.log(file);
            cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
        }
    })
}).array('user_file');

app.get('/upload', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'express/html', 'fileupload.html'))
});

app.post('/upload', upload, (req, resp) => {
    resp.send('upload done');
});
app.listen(5000);
