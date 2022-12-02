const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-comm')
app.use(express.json());
const productScheema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number
});
const productModel = new mongoose.model('products', productScheema);

app.get('/read', async (req, resp) => {
    let data = await productModel.find();
    resp.send(data);
});
app.get('/read/:key', async (req, resp) => {
    let data = await productModel.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { brand: { $regex: req.params.key } }
        ]
    });
    resp.send(data);
});
app.post('/create', async (req, resp) => {
    let data = new productModel(req.body);
    let result = await data.save();
    var responceToSend = { 'status': 200, 'action': 'created', 'data': result };
    resp.send(responceToSend);
})
app.put('/update/:_id', async (req, resp) => {
    var responceToSend = { 'params': req.params._id, 'body': req.body };
    let result = await productModel.updateOne(
        { '_id': req.params._id },
        {
            $set: req.body
        }
    );
    resp.send(responceToSend);
});
app.delete('/delete/:key', async (req, resp) => {
    //resp.send(req.params);
    let result = await productModel.deleteOne({ 'name': req.params.key });
    resp.send(result);
});

app.listen(5000);