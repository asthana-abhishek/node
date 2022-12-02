const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm')
const htmlPath = path.join(__dirname, 'html');

//app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use(express.static(htmlPath))
let productScheema = mongoose.Schema({
    username:String,
    pass:String
});
const productModel = new mongoose.model('users',productScheema);
app.get('/', (req, resp) => {
    resp.send('hello111');
    console.log(__dirname);
})
app.get('/home', (req, resp) => {
    resp.send(req.body);
})
app.get('/about', (req, resp) => {
    //resp.send('about');
    resp.sendFile(htmlPath+'/about.html')
})
app.get('/login', (req, resp) => {
    //resp.send('login');
    //resp.json({name:"abhi"});
    resp.sendFile(htmlPath+'/login.html')
})
app.post('/login', async (req, resp) => {    
    let  data = await productModel.find({'username':req.body.username,'pass':req.body.pass});    
    if(data[0]){
        resp.send('true');
    }else{
        resp.send('false');
    }
})
app.get('*', (req, resp) => {
    //resp.send('not a valid page');
    resp.sendFile(htmlPath+'/404.html')
})

app.listen(5000)
//http://localhost:5000/login.html
