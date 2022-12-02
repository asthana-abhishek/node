const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm');
const productScheema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number
});
let insertData = [
    { name: "apple1", price: 10001, brand: 'iphone7' },
    { name: "apple2", price: 10002, brand: 'iphone6' },
    { name: "apple3", price: 10003, brand: 'iphone5' },
    { name: "apple4", price: 10004, brand: 'iphone4' },
    { name: "apple5", price: 10005, brand: 'iphone3' },
    { name: "apple6", price: 10006, brand: 'iphone2' },
    { name: "apple7", price: 10007, brand: 'iphone1' }

]
const getData = async () => {
    const productModel = new mongoose.model('products', productScheema);
    //let data = new productModel({ name: "apple", price: 1000, brand: 'iphone' });
    //let result = await data.save();
    let result = await productModel.insertMany(insertData);
    console.log(result);
}
//getData();
const updateData = async () => {
    const productModel = new mongoose.model('products', productScheema);
    const data = await productModel.update(
        { name: "apple" },
        {
            $set: {
                price: 1600
            }
        }
    );
}
//updateData();
const deleteData = async ()=>{
    const productModel = new mongoose.model('products',productScheema);
    let data = await productModel.deleteMany({name:'apple3'});
    console.log(data);
}
//deleteData();
const readDB = async ()=>{
    const productModel = new mongoose.model('product',productScheema);
    let data = await productModel.find({name:"apple4"});
    console.log(data);
}
readDB();
