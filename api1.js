const http = require('http');
const data = require('./data')
let dataexported = JSON.stringify(data);
http.createServer((req, resp) => {
    resp.writeHead('200', { 'content-tye': 'application/json' });
    resp.write(dataexported);
    resp.end();
}).listen(5000);