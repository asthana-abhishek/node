const mongoose = require('mongoose');
const productScheema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
});
const productModel = new mongoose.model('products',productScheema);
module.exports = productModel;