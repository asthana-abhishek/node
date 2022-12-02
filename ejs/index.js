const express = require('express');
const app = express()
const data = {name:'abhishek',age:40,skills:['php','mysql','node','react']};
app.set('view engine','ejs');
app.get('/login',(req,resp)=>{
    resp.render('login',{data});
})
app.listen(5000);
