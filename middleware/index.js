const express = require('express');
const app = express();
const path = require('path')
const reqFilter = require('./middleware')
const route = express.Router();
let staticHtmlPath = path.join(__dirname, '../express/html')

app.use(express.static(staticHtmlPath));

//app.use(reqFilter)
route.use(reqFilter)
app.get('/', (req, resp) => {
    resp.send('Welcome home');
})
app.get('/users', (req, resp) => {
    resp.send('Welcome users');
})
route.get('/about', (req, resp) => {
    resp.send('Welcome about');
})
app.get('/contact', (req, resp) => {
    resp.send('Welcome contact');
})

app.use('/',route)
app.listen(5000);
