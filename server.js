var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
  var method = req.method;
  var url = req.url;
  // When a user visits '/'
  // Show a page that displays a title and an image
  // of your favorite actor or actress
  console.log('Incoming ', req.method, ' request to ', req.url);
  if ( method === 'GET' && url === '/') {
    fs.readFile('./index.html', 'utf-8', function (err, data) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    })
  }
  // When a user visits '/about'
  // Show an about page which displays a short
  // biography of that person
  else if (method === 'GET' && url === '/about') {
    fs.readFule('./', 'utf-8', function (err, data) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    })
  } else {
    res.statusCode = 404;
    res.write('try again');
    res.end();
  }
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port);
});
