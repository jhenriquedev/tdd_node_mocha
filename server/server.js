const http = require('http');

http.createServer((req, res) => {
    res.end('Server ON.');
}).listen(process.env.PORT || 3000);