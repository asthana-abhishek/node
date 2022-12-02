console.warn('hello world');
const fs = require('fs').writeFileSync;
const http = require('http');
fs('hello.txt', "this is my first file");
let data = {'name':'hello world'}
data = JSON.stringify(data)
console.log(__dirname)
console.error(__filename)
var response = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
}).listen(5000);

console.log(response);
