var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

// var routes = [
//   { method: 'GET', path: '/', content: 'title'}
// ];

var server = http.createServer(function(req, res) {
  var method = req.method;
  var url = req.url;
  // When a user visits '/'
  // Show a page that displays a title and an image
  // of your favorite actor or actress
  console.log('Incoming ', req.method, ' request to ', req.url);
  if ( method === 'GET' && url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  } else {
    res.statusCode = 404;
    res.write('try again');
    res.end();
  }
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port);
});
