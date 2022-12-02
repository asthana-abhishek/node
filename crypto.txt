const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
mongoose.connect('mongodb://localhost:27017/e-comm');

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const key = "password";
const algo = "aes256";
const jwtKey = 'jwt';
const userScheema = new mongoose.Schema({
    username: String,
    pass: String
});
const userModel = new mongoose.model('users', userScheema);

app.post('/register', async (req, resp) => {
    let getoldData = await userModel.findOne({ username: req.body.username });

    if (!getoldData) {
        const salt = await bcrypt.genSalt(10);
        encrypted = await bcrypt.hash(req.body.pass, salt);
        var data = new userModel({ username: req.body.username, pass: encrypted });
        var result = await data.save();
        console.log(encrypted);
        jwt.sign({ result }, jwtKey, { expiresIn: '300s' }, (err, token) => {
            resp.status(201);
            resp.send({ token });
        })
    } else {
        resp.send({ error: 'Data Already Exists.'});
    }

});
app.post('/login', async (req, resp) => {
    let data = await userModel.findOne({ username: req.body.username });
    const validPassword = await bcrypt.compare(req.body.pass, data.pass);
    if (validPassword) {
        jwt.sign({ data }, jwtKey, { expiresIn: '300s' }, (err, token) => {
            resp.status(201);
            resp.send({ token });
        })
    } else {
        resp.status(400).send({ error: "Invalid Password" });
    }
})
const verifyToken = (req,resp,next)=>{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !=='undefined'){
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        jwt.verify(req.token,jwtKey,(err,authData)=>{
            if(err){
                resp.send(err);
            }else{
                next();
            }
        })
    }else{
        resp.send('token not provided');
    }
}
app.get('/verify',verifyToken,async (req,resp)=>{
    let data = await userModel.find();
    resp.send(data);
})
app.listen(5000);