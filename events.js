const express = require('express');
const app = express();

const EventEmitter = require('events')
const event = new EventEmitter();

event.on('countApi',()=>{
    console.log('called');
})
app.get('/',(req,resp)=>{
    event.emit('countApi');
    resp.send('api called');
});

app.listen(5000);