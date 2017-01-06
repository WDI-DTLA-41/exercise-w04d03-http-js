var http = require('http'),
    fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var routes = [
  {
    method: 'GET',
    path: '/',
    content: 'Hello'
  },
  {
    method: 'GET',
    path: '/about',
    content: 'meow'
  },
  {
    method: 'GET',
    path: '/films/deal',
    content: 'meow'
  }
];

fs.readFile('./trump.txt', 'utf8', (err, data) => {
  if (err) throw err;
  routes[0].content = data;
})

fs.readFile('./bio.txt', 'utf8', (err, data) => {
  if (err) throw err;
  routes[1].content = data;
})

fs.readFile('./the-art-of-the-deal.txt', 'utf8', (err, data) => {
  if (err) throw err;
  routes[2].content = data;
})

var server = http.createServer(function(req, res) {
  var method = req.method,
      url = req.url;
  console.log('Incoming ', req.method, ' request to ', req.url);
  var action = routes.find(function(route) {
    return route.method === method && route.path === url
  });

  if ( action ) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write( action.content );
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('uhoh');
  }
  res.end();
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port);
});
