var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;
var films = ['/newsies', '/american-psycho', '/the-dark-knight'];

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
    fs.readFile('./about.html', 'utf-8', function (err, data) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    })
  }
  // When a user visits '/films/[name-of-film]'
  // Show a description of that film and the post
  else if (method === 'GET' && url === '/films') {
    fs.readFile('./films.html', 'utf-8', function (err, data) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    })
  }
  // create urls for each movie
  else if (method === 'GET' && url === '/films' + films[0]) {
    fs.readFile('./newsies.html', 'utf-8', function (err, data) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    })
  } else if (method === 'GET' && url === '/films' + films[1]) {
    fs.readFile('./american-psycho.html', 'utf-8', function (err, data) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    })
  } else if (method === 'GET' && url === '/films' + films[2]) {
    fs.readFile('./the-dark-knight.html', 'utf-8', function (err, data) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    })
  // return 404 error
  } else {
    res.statusCode = 404;
    res.write('try again');
    res.end();
  }
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port);
});

