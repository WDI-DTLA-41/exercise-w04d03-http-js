var http = require('http'),
    fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var routes = [
  {
    method: 'GET',
    path: '/',
    content: 'Hello',
    file: './trump.txt'
  },
  {
    method: 'GET',
    path: '/about',
    content: 'meow',
    file: './bio.txt'
  },
  {
    method: 'GET',
    path: '/films/deal',
    content: 'meow',
    file: './the-art-of-the-deal.txt'
  }
];

fs.readFile(routes[0].file, 'utf8', (err, data) => {
  if (err) throw err;
  routes[0].content = data;
})

fs.readFile(routes[1].file, 'utf8', (err, data) => {
  if (err) throw err;
  routes[1].content = data;
})

fs.readFile(routes[2].file, 'utf8', (err, data) => {
  if (err) throw err;
  routes[2].content = data;
})

var server = http.createServer(function(req, res) {
  var method = req.method,
      url = req.url;
  console.log('Incoming ', req.method, ' request to ', req.url);
  var action = routes.find(function(route) {
    return route.method === method && route.path === url;
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

//dynamically call the file based on requested url

//maybe use object.values()

// var server = http.createServer(function(req, res) {
//   var method = req.method,
//       url = req.url;
//   console.log('Incoming ', req.method, ' request to ', req.url);
//   var action = routes.find(function(route) {
//     return route.method === method && route.path === url;
//   });
//   if ( action ) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     fs.readFile(action.file, 'utf8', (err, data) => {
//       if (err) throw err;
//       action.content = data;
//       res.write( action.content );
//     })
//   }
//   else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('uhoh');
//   }
//   res.end();
// });

// server.listen(port, hostname, function() {
//   console.log('Server running at http://' + hostname + ':' + port);
// });
