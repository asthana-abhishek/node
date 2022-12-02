const { response } = require('express');
const express = require('express');
const app = express();
require('./config')
const productModel = require('./products')
app.use(express.json());
app.get('/read',async (req,resp)=>{
    let data = await productModel.find();
    resp.send(data);
});
app.get('/read/:name',async (req,resp)=>{
    let data = await productModel.find({name:req.params.name});
    resp.send(data);
});
app.post('/create', async (req,resp)=>{
    let data = new productModel(req.body);
    let result = await data.save();
    resp.send(result);
});
app.delete('/delete/:name', async (req,resp)=>{
    //console.log(req.params.name)
    let data = await productModel.deleteOne({name:req.params.name});
    resp.send(data);
});

app.get('/search/:key',async (req,resp)=>{
    let data = await productModel.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}}
        ]

        
    });
    var returnDate = {"status":200,"count":data.length,"data":data};
    resp.send(returnDate);
});

app.listen(5000)

