// HTTP server example
// http://blog.modulus.io/absolute-beginners-guide-to-nodejs
var http = require('http');

http.createServer(function(err, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('test text\n');
}).listen(8080);

console.log('running on port 8080');

// next step might be to install express
