const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect('mongodb://localhost:27017/e-comm');

let productScheema = new mongoose.Schema({
    username:String,
    pass:String
});
let userSchhema = new mongoose.Schema({
    username:String,
    pass:String
});

app.get('/',(req,resp)=>{
    resp.send('home');
});

app.get('/login',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'express/html/login.html'))
});

app.post('/login',async (req,resp)=>{
    let userModel = new mongoose.model('users',userSchhema);
    let data = await userModel.find({'username':req.body.username,'pass':req.body.pass});
    resp.send(data);

});
app.post('/create',async (req,resp)=>{
    //resp.send(req.body);
    let userModel = new mongoose.model('users',userSchhema);
    let data = new userModel(req.body);
    let result = await data.save();
    resp.send('created');


});
app.listen(5000);