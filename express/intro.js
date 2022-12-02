const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    //console.log(req.query);
    if (req.query.name == 'abhi') {
        resp.send('<h1>Hello ' + req.query.name + '</h1>');
    } else {
        resp.send('<h1>Hello Express</h1>');
    }
});
app.get('/home',(req,resp)=>{
    resp.send('<h1>This is home page</h1>');
})
app.get('/about',(req,resp)=>{
    //const contact = req.body.abouts
    resp.send('<h1>This is about page</h1>');
})
app.get('/help',(req,resp)=>{
    resp.send([{name:'abhi',email:'asd@asd.com'},{name:'abhi',email:'asd@asd.com'},
    {name:'abhi',email:'asd@asd.com'}]);
})

app.listen(5000);
